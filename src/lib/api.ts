// API Types
export interface QuestionnaireNode {
  id: string;
  data: {
    title: string;
    options: string[];
    isCollapsed: boolean;
    isStartNode: boolean;
    componentType: number; // 1 = question, 2 = terms, 3 = login, 4 = checkout, 5 = custom form, 6 = prices
    hasConditionalInput?: boolean;
    conditionalInput?: boolean;
    medicalConditionsList?: string[];
  };
  type: string;
  position: {
    x: number;
    y: number;
  };
}

export interface QuestionnaireEdge {
  id: string;
  type: string;
  source: string;
  target: string;
  sourceHandle: string; // e.g., "option-0", "option-1"
  targetHandle: string | null;
}

export interface QuestionnaireFlow {
  id: string;
  name: string;
  edges: QuestionnaireEdge[];
  nodes: QuestionnaireNode[];
  version: string;
  metadata: {
    nodeTypes: string[];
    totalEdges: number;
    totalNodes: number;
    lastModified: string;
  };
  createdAt: string;
  updatedAt: string;
  description: string;
}

export interface QuestionnaireResponse {
  id: string;
  name: string;
  domain: string;
  status: string;
  isPublished: boolean;
  slug: string;
  data: QuestionnaireFlow;
  createdAt: string;
  updatedAt: string;
}

// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3090';
const WEIGHT_LOSS_QUESTIONNAIRE_ID = 'ef9ae019-91bd-4c2f-85a3-da31776de061';

/**
 * Fetches questionnaire data from the backend API
 * @param questionnaireId - The ID of the questionnaire to fetch
 * @returns Promise with the questionnaire data
 */
export async function fetchQuestionnaire(questionnaireId: string): Promise<QuestionnaireResponse> {
  const response = await fetch(`${API_BASE_URL}/v1/questionnaires/${questionnaireId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    // Add cache control for development
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch questionnaire: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Fetches the weight loss questionnaire using the fixed backend endpoint.
 * @returns Promise with the weight loss questionnaire data.
 */
export async function fetchWeightLossQuestionnaire(): Promise<QuestionnaireResponse> {
  return fetchQuestionnaire(WEIGHT_LOSS_QUESTIONNAIRE_ID);
}

