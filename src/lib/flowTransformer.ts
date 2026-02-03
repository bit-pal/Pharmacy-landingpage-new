import { QuestionnaireNode, QuestionnaireEdge } from './api';

// Transformed Question Types
export interface TransformedQuestion {
  id: string;
  question: string;
  options: string[];
  selectedOption?: string;
  isCustomForm?: boolean;
  hasConditionalInput?: boolean;
  medicalConditionsList?: string[];
  subtext?: string;
  isConfirmation?: boolean;
  isTermsPage?: boolean;
  isLoginPage?: boolean;
  isPricesPage?: boolean;
  isCheckoutPage?: boolean;
  componentType: number;
  // Navigation mapping: which option leads to which next question
  optionToNextQuestion: Map<string, string>;
}

/**
 * Transforms the API flow data into a usable question flow structure
 * @param nodes - Array of nodes from the API
 * @param edges - Array of edges from the API
 * @param startNodeId - The ID of the starting node (usually the first node or login node)
 * @returns Array of transformed questions in order
 */
export function transformFlowToQuestions(
  nodes: QuestionnaireNode[],
  edges: QuestionnaireEdge[],
  startNodeId?: string
): TransformedQuestion[] {
  const nodeMap = new Map(nodes.map(node => [node.id, node]));
  const edgeMap = new Map(); // key: nodeId-option or nodeId-default, value: target id

  edges.forEach(edge => {
    const sourceNode = nodeMap.get(edge.source);
    if (!sourceNode) return;
    // Use option text for key if options exist, else use 'default'.
    const handle = edge.sourceHandle;
    let key = `${edge.source}-default`;
    if (handle && handle.startsWith('option-')) {
      const idx = Number(handle.replace('option-', ''));
      if (sourceNode.data.options && sourceNode.data.options[idx]) {
        const opt = sourceNode.data.options[idx].trim();
        key = `${edge.source}-${opt}`;
      }
    }
    edgeMap.set(key, edge.target);
  });

  // Start at node with isStartNode: true, else fallback entry node
  let currentNodeId = startNodeId;
  if (!currentNodeId) {
    const explicit = nodes.find(n => {
      const data = n.data as Record<string, unknown>;
      return n.data.isStartNode || data.isstartNode;
    });
    if (explicit) currentNodeId = explicit.id;
    else {
      const incoming = new Set(edges.map(e => e.target));
      currentNodeId = nodes.find(n => !incoming.has(n.id))?.id || nodes[0]?.id;
    }
  }

  // BFS traversal to include ALL reachable nodes, not just one path
  const questions: TransformedQuestion[] = [];
  const visited = new Set<string>();
  const queue: string[] = currentNodeId ? [currentNodeId] : [];

  while (queue.length > 0) {
    const nodeId = queue.shift()!;
    if (visited.has(nodeId)) continue;
    visited.add(nodeId);

    const node = nodeMap.get(nodeId);
    if (!node) continue;

    // Map options to target question ids
    const optionToNextQuestion = new Map<string, string>();
    if (node.data.options && node.data.options.length > 0) {
      node.data.options.forEach(option => {
        const opt = option.trim();
        const next = edgeMap.get(`${node.id}-${opt}`);
        if (next) {
          optionToNextQuestion.set(opt, next);
          // Add to queue for traversal
          if (!visited.has(next)) queue.push(next);
        }
      });
    }
    // Also handle default (for login/info/custom etc)
    const defaultNext = edgeMap.get(`${node.id}-default`);
    if (defaultNext) {
      optionToNextQuestion.set('default', defaultNext);
      if (!visited.has(defaultNext)) queue.push(defaultNext);
    }

    questions.push({
      id: node.id,
      question: node.data.title,
      options: node.data.options || [],
      isCustomForm: node.data.componentType === 5,
      isTermsPage: node.data.componentType === 2,
      isLoginPage: node.data.componentType === 3,
      isCheckoutPage: node.data.componentType === 4,
      isPricesPage: node.data.componentType === 6,
      isConfirmation: node.data.componentType === 1 && node.data.options.length === 1,
      // hasConditionalInput: Boolean(node.data.hasConditionalInput || node.data.conditionalInput),
      hasConditionalInput: Boolean(true),
      medicalConditionsList: node.data.medicalConditionsList || undefined,
      componentType: node.data.componentType,
      optionToNextQuestion,
    });
  }

  return questions;
}

/**
 * Gets the next question ID based on the current question and selected option
 * @param currentQuestion - The current question
 * @param selectedOption - The selected option text
 * @returns The next question ID or undefined if no next question
 */
export function getNextQuestionId(
  currentQuestion: TransformedQuestion,
  selectedOption: string
): string | undefined {
  return currentQuestion.optionToNextQuestion.get(selectedOption);
}

/**
 * Builds a complete question flow with proper ordering
 * This function handles the full flow including conditional logic
 */
export function buildQuestionFlow(
  nodes: QuestionnaireNode[],
  edges: QuestionnaireEdge[]
): {
  questions: TransformedQuestion[];
  questionMap: Map<string, TransformedQuestion>;
  startQuestionId: string | undefined;
} {
  // Create a map of node ID to node for quick lookup
  const nodeMap = new Map<string, QuestionnaireNode>();
  nodes.forEach(node => nodeMap.set(node.id, node));

  // Build edge map: maps "nodeId-optionText" to target node ID
  const edgeMap = new Map<string, string>();
  
  edges.forEach(edge => {
    const sourceNode = nodeMap.get(edge.source);
    if (!sourceNode) return;
    
    // Extract option index from sourceHandle (e.g., "option-0" -> 0)
    const optionMatch = edge.sourceHandle?.match(/option-(\d+)/);
    if (optionMatch) {
      const optionIndex = parseInt(optionMatch[1], 10);
      if (sourceNode.data.options && sourceNode.data.options[optionIndex]) {
        const optionText = sourceNode.data.options[optionIndex];
        const key = `${edge.source}-${optionText}`;
        edgeMap.set(key, edge.target);
      }
    } else if (sourceNode.data.options && sourceNode.data.options.length > 0) {
      // If no specific handle, assume first option (for custom forms, etc.)
      const key = `${edge.source}-${sourceNode.data.options[0]}`;
      edgeMap.set(key, edge.target);
    } else {
      // For nodes with no options (like custom forms), use a default key
      const key = `${edge.source}-default`;
      edgeMap.set(key, edge.target);
    }
  });

  // Transform all nodes to questions
  const questionMap = new Map<string, TransformedQuestion>();
  const questions: TransformedQuestion[] = [];
  
  nodes.forEach(node => {
    // Build option to next question mapping
    const optionToNextQuestion = new Map<string, string>();
    
    if (node.data.options && node.data.options.length > 0) {
      node.data.options.forEach((option) => {
        const opt = option.trim();
        const key = `${node.id}-${opt}`;
        const nextNodeId = edgeMap.get(key);
        if (nextNodeId) {
          optionToNextQuestion.set(opt, nextNodeId);
        }
      });
    } else {
      // For nodes without options (custom forms), check for default edge
      const defaultKey = `${node.id}-default`;
      const nextNodeId = edgeMap.get(defaultKey);
      if (nextNodeId) {
        // For custom forms, we'll use the first available option or a placeholder
        optionToNextQuestion.set('default', nextNodeId);
      }
    }

    const question: TransformedQuestion = {
      id: node.id,
      question: node.data.title,
      options: node.data.options || [],
      isCustomForm: node.data.componentType === 5,
      isTermsPage: node.data.componentType === 2,
      isLoginPage: node.data.componentType === 3,
      isCheckoutPage: node.data.componentType === 4,
      isPricesPage: node.data.componentType === 6,
      isConfirmation: node.data.componentType === 1 && (node.data.options?.length === 1 || false),
      hasConditionalInput: false, // Will be determined by question content
      componentType: node.data.componentType,
      optionToNextQuestion,
    };

    questionMap.set(node.id, question);
    questions.push(question);
  });

  // Find start question (first question after login, or first question)
  const loginNode = nodes.find(n => n.data.componentType === 3);
  let startQuestionId: string | undefined;
  
  if (loginNode) {
    const loginEdge = edges.find(e => e.source === loginNode.id);
    startQuestionId = loginEdge?.target;
  }
  
  if (!startQuestionId && questions.length > 0) {
    // Find node with no incoming edges (entry point)
    const nodesWithIncomingEdges = new Set(edges.map(e => e.target));
    const entryNode = nodes.find(n => !nodesWithIncomingEdges.has(n.id) && n.data.componentType !== 3);
    startQuestionId = entryNode?.id || questions[0]?.id;
  }

  return {
    questions,
    questionMap,
    startQuestionId,
  };
}

