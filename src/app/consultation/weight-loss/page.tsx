'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { API_ENDPOINTS } from '@/config/api';
import Header from '@/components/Header';
import { ChevronRight, Eye, EyeOff } from 'lucide-react';
import { fetchQuestionnaire } from '@/lib/api';
import { getNextQuestionId, TransformedQuestion, transformFlowToQuestions } from '@/lib/flowTransformer';
import Image from 'next/image';
import { toast } from 'react-toastify';

// Questionnaire ID - should be extracted from URL or config
const QUESTIONNAIRE_ID = 'ef9ae019-91bd-4c2f-85a3-da31776de061';

export default function WeightLossConsultationPage() {
  const router = useRouter();
  const [currentQuestionId, setCurrentQuestionId] = useState<string | undefined>();
  const [questionMap, setQuestionMap] = useState<Map<string, TransformedQuestion>>(new Map());
  const [answers, setAnswers] = useState<Array<{ questionId: string; title: string; selectedAnswer: string; detail?: string }>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [questionHistory, setQuestionHistory] = useState<string[]>([]); // Track navigation history
  const [currentBenefitIndex, setCurrentBenefitIndex] = useState(0);
  const [unitSystem, setUnitSystem] = useState<'Imperial' | 'Metric'>('Metric');

  // Metric system values
  const [heightCm, setHeightCm] = useState('');
  const [weightKg, setWeightKg] = useState('');

  // Imperial system values
  const [heightFeet, setHeightFeet] = useState('');
  const [heightInches, setHeightInches] = useState('');
  const [weightStone, setWeightStone] = useState('');
  const [weightPounds, setWeightPounds] = useState('');

  // Pregnancy specification text
  const [pregnancyDetails, setPregnancyDetails] = useState('');

  // Ethnicity specification text
  const [ethnicityDetails, setEthnicityDetails] = useState('');

  // Medical conditions details
  const [medicalConditionsDetails, setMedicalConditionsDetails] = useState('');

  // Weight-related conditions details
  const [weightConditionsDetails, setWeightConditionsDetails] = useState('');

  // Weight loss treatment history details
  const [treatmentHistoryDetails, setTreatmentHistoryDetails] = useState('');

  // Allergy details
  const [allergyDetails, setAllergyDetails] = useState('');

  // Medication details
  const [medicationDetails, setMedicationDetails] = useState('');

  // Terms and conditions checkboxes
  const [consentToInfo, setConsentToInfo] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  // Multi-step login node state (Step 1: Info, Step 2: Login)
  const [loginStep, setLoginStep] = useState<1 | 2>(1);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginFirstName, setLoginFirstName] = useState('');
  const [loginLastName, setLoginLastName] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Treatment Prices Page State
  const [selectedVariant, setSelectedVariant] = useState<{
    strength: number;
    price: number;
    productId: number;
    variantId: string;
  } | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<{
    name: string;
    price: number | undefined;
    quantity: string;
    type: string;
    image: string;
    treatment: string;
    variantId: string | undefined;
    productId: any;
  } | null>(null);
  const [postcode, setPostcode] = useState('');

  // Checkout Page State
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [townCity, setTownCity] = useState('');
  const [county, setCounty] = useState('');
  const [postcodeSecond, setPostcodeSecond] = useState('');
  const [telephone, setTelephone] = useState('');
  const [differentShipping, setDifferentShipping] = useState(false);
  const [shippingPostcode, setShippingPostcode] = useState('');
  const [shippingCompany, setShippingCompany] = useState('');
  const [shippingStreetAddress, setShippingStreetAddress] = useState('');
  const [shippingTownCity, setShippingTownCity] = useState('');
  const [shippingCounty, setShippingCounty] = useState('');
  const [shippingPostcodeSecond, setShippingPostcodeSecond] = useState('');
  const [shippingTelephone, setShippingTelephone] = useState('');
  const [selectedShipping, setSelectedShipping] = useState('royal-mail');
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [products, setProducts] = useState([]);

  // Helper: Add or update an answer in the array
  const upsertAnswer = useCallback((questionId: string, title: string, selectedAnswer: string, detail?: string) => {
    setAnswers(prev => {
      console.log(questionId, title, selectedAnswer, detail)
      const idx = prev.findIndex(a => a.questionId === questionId);
      const newAnswer = { questionId, title, selectedAnswer, ...(detail ? { detail } : {}) };
      console.log(newAnswer)
      if (idx !== -1) {
        // Replace
        return [
          ...prev.slice(0, idx),
          newAnswer,
          ...prev.slice(idx + 1)
        ];
      } else {
        // Add
        return [...prev, newAnswer];
      }
    });
  }, []);

  const getStoredLoginInfo = useCallback(() => {
    if (typeof window === 'undefined') return null;
    const stored = sessionStorage.getItem('loginInfo');
    if (!stored) return null;
    try {
      return JSON.parse(stored);
    } catch (error) {
      console.warn('Invalid login info in sessionStorage', error);
      return null;
    }
  }, []);

  const hasActiveLoginSession = useCallback(() => {
    const loginInfo = getStoredLoginInfo();
    return Boolean(loginInfo?.loggedIn);
  }, [getStoredLoginInfo]);

  const benefits = [
    { icon: '✓', text: 'Free Tracked Delivery' },
    { icon: '£', text: 'Lowest Price Guarantee' },
    { icon: '🇬🇧', text: 'We are based in the UK' }
  ];

  // Load questionnaire state (no login check, login happens in the flow itself)
  useEffect(() => {
    async function loadQuestionnaire() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchQuestionnaire(QUESTIONNAIRE_ID);
        const nodes = response.data.nodes;
        const edges = response.data.edges;
        // 1. Find node with isStartNode: true (handle both spellings)
        const realStartNode = nodes.find(n => {
          const data = n.data;
          // Accepts both casing for API consistency
          return Boolean(data.isStartNode || (typeof (data as unknown as Record<string, unknown>).isstartNode !== 'undefined' && (data as unknown as Record<string, unknown>).isstartNode));
        });
        let realStartNodeId = realStartNode?.id;
        // fallback: node with no incoming edges, or first node
        if (!realStartNodeId) {
          const nodesWithIncomingEdges = new Set(edges.map(e => e.target));
          realStartNodeId = nodes.find(n => !nodesWithIncomingEdges.has(n.id))?.id || nodes[0]?.id;
        }
        // Use transformFlowToQuestions, which supports custom start node
        const transformedQuestions = transformFlowToQuestions(
          nodes,
          edges,
          realStartNodeId
        );
        // Build questionMap from transformedQuestions
        const map = new Map<string, TransformedQuestion>();
        transformedQuestions.forEach(q => map.set(q.id, q));
        setQuestionMap(map);

        const skipLoginNodeIfNeeded = (questionId?: string | null) => {
          if (!questionId) return questionId ?? undefined;
          if (!hasActiveLoginSession()) return questionId;
          const question = map.get(questionId);
          if (question?.componentType !== 3) return questionId;
          const next =
            question.optionToNextQuestion.get('Pass') ||
            question.optionToNextQuestion.get('default');
          return next || questionId;
        };

        // Check if this is a fresh start (from URL parameter)
        const urlParams = new URLSearchParams(window.location.search);
        const isFreshStart = urlParams.get('start') === 'true' || urlParams.get('fresh') === 'true';
        const returnFrom = urlParams.get('returnFrom');
        const questionId = urlParams.get('questionId');

        // Handle return from upload pages
        if (returnFrom && questionId) {
          // Mark the upload question as answered with "Pass"
          const uploadQuestionId = sessionStorage.getItem('lastUploadQuestionId');
          if (uploadQuestionId) {
            upsertAnswer(uploadQuestionId, 'Upload', 'Pass');
            sessionStorage.removeItem('lastUploadQuestionId');
          }
          // Set the next question ID from URL
          if (questionId) {
            setCurrentQuestionId(questionId);
            setQuestionHistory(prev => {
              if (!prev.includes(questionId)) {
                return [...prev, questionId];
              }
              return prev;
            });
          }
          // Clean up URL params
          const cleanUrl = `${window.location.pathname}`;
          window.history.replaceState({}, '', cleanUrl);
        }

        // If fresh start, clear saved progress
        if (isFreshStart) {
          sessionStorage.removeItem('weightLossProgress');
          sessionStorage.removeItem('checkoutProduct');

          // Remove the start/fresh query parameter so refreshes keep progress
          const cleanUrl = `${window.location.pathname}${window.location.hash || ''}`;
          window.history.replaceState({}, '', cleanUrl);
        }

        // Try to restore saved progress from sessionStorage (only if not a fresh start)
        const savedProgress = !isFreshStart ? sessionStorage.getItem('weightLossProgress') : null;
        if (savedProgress) {
          try {
            const progress = JSON.parse(savedProgress);
            const resolvedQuestionId = skipLoginNodeIfNeeded(progress.currentQuestionId || realStartNodeId);
            const cleanedHistory = (progress.questionHistory || [resolvedQuestionId || realStartNodeId]).filter((id: string | undefined) => {
              if (!id) return false;
              const question = map.get(id);
              return !(hasActiveLoginSession() && question?.componentType === 3);
            });
            const ensuredHistory = resolvedQuestionId
              ? (cleanedHistory.includes(resolvedQuestionId) ? cleanedHistory : [...cleanedHistory, resolvedQuestionId])
              : cleanedHistory;
            setCurrentQuestionId(resolvedQuestionId || realStartNodeId);
            setQuestionHistory(ensuredHistory.length > 0 ? ensuredHistory : (resolvedQuestionId ? [resolvedQuestionId] : realStartNodeId ? [realStartNodeId] : []));
            // MIGRATION: Old Record<string, string> format handling
            let migratedAnswers: Array<{ questionId: string; title: string; selectedAnswer: string; detail?: string }> = [];
            if (Array.isArray(progress.answers)) {
              migratedAnswers = progress.answers;
            } else if (progress.answers && typeof progress.answers === 'object') {
              // Convert from legacy object { questionId: answer }
              migratedAnswers = Object.entries(progress.answers).map(([questionId, selectedAnswer]) => ({
                questionId,
                title: '', // No title known - can try lookup if needed
                selectedAnswer: String(selectedAnswer),
              }));
            }
            setAnswers(migratedAnswers);
            // Restore form fields
            if (progress.loginStep) setLoginStep(progress.loginStep);
            if (progress.loginEmail) setLoginEmail(progress.loginEmail);
            if (progress.loginFirstName) setLoginFirstName(progress.loginFirstName);
            if (progress.loginLastName) setLoginLastName(progress.loginLastName);
            if (progress.loginPassword) setLoginPassword(progress.loginPassword);
            if (progress.heightCm) setHeightCm(progress.heightCm);
            if (progress.weightKg) setWeightKg(progress.weightKg);
            if (progress.heightFeet) setHeightFeet(progress.heightFeet);
            if (progress.heightInches) setHeightInches(progress.heightInches);
            if (progress.weightStone) setWeightStone(progress.weightStone);
            if (progress.weightPounds) setWeightPounds(progress.weightPounds);
            if (progress.unitSystem) setUnitSystem(progress.unitSystem);
          } catch (e) {
            console.error('Error restoring progress:', e);
            // If restore fails, start from beginning
            const fallbackStart = skipLoginNodeIfNeeded(realStartNodeId);
            setCurrentQuestionId(fallbackStart);
            if (fallbackStart) {
              setQuestionHistory([fallbackStart]);
            }
          }
        } else {
          // No saved progress, start from beginning
          const initialStart = skipLoginNodeIfNeeded(realStartNodeId);
          setCurrentQuestionId(initialStart);
          if (initialStart) {
            setQuestionHistory([initialStart]);
          }
        }
      } catch (err) {
        console.error('Error loading questionnaire:', err);
        setError(err instanceof Error ? err.message : 'Failed to load questionnaire');
      } finally {
        setLoading(false);
      }
    }

    loadQuestionnaire();
  }, [router, hasActiveLoginSession, upsertAnswer]);

  useEffect(() => {
    if (!currentQuestionId || questionMap.size === 0) return;
    if (!hasActiveLoginSession()) return;
    const question = questionMap.get(currentQuestionId);
    if (!question || question.componentType !== 3) return;
    const next =
      question.optionToNextQuestion.get('Pass') ||
      question.optionToNextQuestion.get('default');
    if (!next || next === currentQuestionId) return;

    setQuestionHistory(prev => {
      const withoutLogin = prev.filter(id => id !== question.id);
      if (withoutLogin[withoutLogin.length - 1] === next || withoutLogin.includes(next)) {
        return withoutLogin;
      }
      return [...withoutLogin, next];
    });
    setCurrentQuestionId(next);
  }, [currentQuestionId, questionMap, hasActiveLoginSession]);

  // Save progress to sessionStorage whenever state changes
  useEffect(() => {
    if (currentQuestionId && questionHistory.length > 0) {
      const progress = {
        currentQuestionId,
        questionHistory,
        answers, // the array now
        loginStep,
        loginEmail,
        loginFirstName,
        loginLastName,
        loginPassword,
        heightCm,
        weightKg,
        heightFeet,
        heightInches,
        weightStone,
        weightPounds,
        unitSystem,
      };
      sessionStorage.setItem('weightLossProgress', JSON.stringify(progress));
    }
  }, [currentQuestionId, questionHistory, answers, loginStep, loginEmail, loginFirstName, loginLastName, loginPassword, heightCm, weightKg, heightFeet, heightInches, weightStone, weightPounds, unitSystem]);

  // Auto-rotate benefits on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBenefitIndex((prev) => (prev + 1) % 3);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Load selected product from session storage for checkout page
  useEffect(() => {
    const checkoutProduct = sessionStorage.getItem('checkoutProduct');
    if (checkoutProduct) {
      try {
        const product = JSON.parse(checkoutProduct);
        setSelectedProduct(product);
      } catch (e) {
        console.error('Error loading checkout product:', e);
      }
    }
  }, []);

  // Get products
  useEffect(() => {
    axios.get(API_ENDPOINTS.PRODUCTS.LIST)
      .then(response => {
        if (response.statusText === 'OK') {
          setProducts(response.data.data);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, [])

  // Get current question from the map
  const currentQuestion = currentQuestionId ? questionMap.get(currentQuestionId) : undefined;
  const currentAnswerObj = currentQuestionId ? answers.find(a => a.questionId === currentQuestionId) : undefined;
  const currentAnswer = currentAnswerObj?.selectedAnswer;
  const currentAnswerLower = currentAnswer?.toLowerCase();
  const answerYes = currentAnswerLower?.startsWith('yes') ?? false;
  const answerNo = currentAnswerLower?.startsWith('no') ?? false;
  const answerNever = currentAnswerLower?.includes('never') ?? false;
  const answerNone = currentAnswerLower?.includes('none') ?? false;
  const answerLessThanHour = currentAnswerLower?.includes('less than 1 hour') ?? false;
  const answerMostlyHealthy = currentAnswerLower === 'mostly healthy, filled with fruits, veggies, and whole grains';
  const answerNotListed = currentAnswerLower?.includes('not listed') ?? false;
  const hasAnswer = currentAnswerLower !== undefined;

  const questionText = currentQuestion?.question.toLowerCase() ?? '';
  const questionIncludesPregnant = questionText.includes('pregnant');
  const questionIncludesEthnic = questionText.includes('ethnic');
  const questionIncludesContraception = questionText.includes('contraception');
  const questionIncludesExercise = questionText.includes('exercis');
  const questionIncludesDiet = questionText.includes('diet');
  const questionIncludesPreviously = questionText.includes('previously') || questionText.includes('currently using');
  const questionIncludesAllergy = questionText.includes('allerg');
  const questionIncludesMedication = questionText.includes('medication');
  const questionIncludesWeightRelated = questionText.includes('weight-related');
  const questionIncludesDiagnosed = questionText.includes('diagnosed') || questionIncludesWeightRelated;
  const isSpecialLayout = Boolean(currentQuestion?.isPricesPage || currentQuestion?.isCheckoutPage);

  const diagnosedConditionsFallback = [
    'Liver disease',
    'Pancreatitis',
    'Diabetes type 1',
    'Diabetes type 2',
    'Pre diabetes',
    'Diabetic retinopathy/diabetic eye disease',
    'Heart Failure',
    'Kidney Problems',
    'Thyroid cancer or family history of thyroid cancer',
    'Gallstones',
    'Weight related surgery',
    'Fast heart rate (Tachycardia)',
    'Multiple endocrine neoplasia 2 (MEN2)',
    'Suicidal thoughts',
    'Eating disorders',
    'Cholestasis',
    'Chronic malabsorption syndrome',
  ];

  const weightRelatedConditionsFallback = [
    'Hypertension (high blood pressure)',
    'Dyslipidaemia (high cholesterol)',
    'Cardiovascular disease',
    'Pre-diabetes',
    'Knee or hip osteoarthritis',
    'Obstructive sleep apnoea',
    'Asthma/chronic obstructive pulmonary disease (COPD)',
    'Liver disease (non-alcoholic fatty liver disease - NAFLD)',
    'Non-alcoholic steatohepatitis (NASH)',
    'Polycystic ovary syndrome (PCOS)',
    'Erectile dysfunction',
  ];

  const diagnosedConditionsList = questionIncludesDiagnosed
    ? (currentQuestion?.medicalConditionsList && currentQuestion.medicalConditionsList.length > 0
      ? currentQuestion.medicalConditionsList
      : questionIncludesWeightRelated
        ? weightRelatedConditionsFallback
        : diagnosedConditionsFallback)
    : null;

  const handleOptionSelect = (option: string) => {
    if (!currentQuestionId || !currentQuestion) return;
    // Preserve existing detail if present
    const existingAnswer = answers.find(a => a.questionId === currentQuestionId);
    const existingDetail = existingAnswer?.detail;
    upsertAnswer(currentQuestionId, currentQuestion.question, option, existingDetail);
  };

  const handleNext = () => {
    if (!currentQuestionId || !currentQuestion) return;

    // ------ Handle ID upload node (componentType 7) ------
    if (currentQuestion.componentType === 7) {
      // Save current question ID for when we return
      sessionStorage.setItem('lastUploadQuestionId', currentQuestionId);
      // Navigate to ID upload page with return info
      const nextQuestionId = currentQuestion.optionToNextQuestion.get('Pass')
        || currentQuestion.optionToNextQuestion.get('default');
      const returnUrl = nextQuestionId
        ? `/consultation/weight-loss?questionId=${nextQuestionId}&returnFrom=id-upload`
        : '/consultation/weight-loss';
      router.push(`/consultation/weight-loss/id-upload?returnUrl=${encodeURIComponent(returnUrl)}&questionId=${currentQuestionId}&nextQuestionId=${nextQuestionId || ''}`);
      return;
    }

    // ------ Handle selfie upload node (componentType 8) ------
    if (currentQuestion.componentType === 8) {
      // Save current question ID for when we return
      sessionStorage.setItem('lastUploadQuestionId', currentQuestionId);
      // Navigate to selfie upload page with return info
      const nextQuestionId = currentQuestion.optionToNextQuestion.get('default');
      const returnUrl = nextQuestionId
        ? `/consultation/weight-loss?questionId=${nextQuestionId}&returnFrom=selfie-upload`
        : '/consultation/weight-loss';
      router.push(`/consultation/weight-loss/selfie-upload?returnUrl=${encodeURIComponent(returnUrl)}&questionId=${currentQuestionId}&nextQuestionId=${nextQuestionId || ''}`);
      return;
    }

    // ------ Handle login/info node navigation (2-step process) ------
    if (currentQuestion.componentType === 3) {
      if (loginStep === 1) {
        // Step 1 (Info page): Save info and move to Step 2 (Login page)
        sessionStorage.setItem('consultationUserInfo', JSON.stringify({
          email: loginEmail.trim(),
          firstName: loginFirstName.trim(),
          lastName: loginLastName.trim(),
        }));
        setLoginStep(2);
        return;
      } else if (loginStep === 2) {
        const data = {
          firstName: loginFirstName.trim(),
          lastName: loginLastName.trim(),
          email: loginEmail.trim(),
        }
        axios.post(API_ENDPOINTS.PATIENTS.CREATE, data)
          .then(response => {
            if (response.statusText === 'Created') {
              // Step 2 (Login page): Save login flag and proceed to next question
              sessionStorage.setItem('loginInfo', JSON.stringify({
                patientId: response.data.id,
                email: loginEmail.trim(),
                firstName: loginFirstName.trim(),
                lastName: loginLastName.trim(),
                loggedIn: true,
                timestamp: new Date().toISOString(),
              }));

              // Save all login data to answers
              upsertAnswer(currentQuestionId, currentQuestion.question, 'Yes', `${loginFirstName} ${loginLastName}`);

              // Reset login step for next time
              setLoginStep(1);

              // Move to next question
              const next = currentQuestion.optionToNextQuestion.get('Pass')
                || currentQuestion.optionToNextQuestion.get('default');
              if (next) {
                setQuestionHistory(prev => [...prev, next]);
                setCurrentQuestionId(next);
              }

              // Change the patient's status to Processing
              axios.put(API_ENDPOINTS.PATIENTS.PUT_PROCESSING(response.data.id));
            }
          })
          .catch(error => {
            toast.error(error.response.data.message);
          });
        return;
      }
    }
    // ------------------------------------------------------

    // Save height/weight data for custom form
    if (currentQuestion.isCustomForm) {
      if (unitSystem === 'Metric') {
        upsertAnswer(currentQuestionId, currentQuestion.question, `${heightCm} cm, ${weightKg} kg`, undefined);
      } else {
        upsertAnswer(currentQuestionId, currentQuestion.question, `${heightFeet}ft ${heightInches}in, ${weightStone}st ${weightPounds}lb`, undefined);
      }
    }

    // Get the selected option
    const selectedOption = answers.find(a => a.questionId === currentQuestionId)?.selectedAnswer;
    if (!selectedOption && !currentQuestion.isCustomForm && !currentQuestion.isTermsPage && !currentQuestion.isPricesPage && !currentQuestion.isCheckoutPage) {
      return; // Don't proceed if no option selected
    }

    // Determine next question based on flow edges
    let nextQuestionId: string | undefined;

    // Get the selected answer for this question step for conditional inputs
    const currentAnswer = answers.find(a => a.questionId === currentQuestionId)?.selectedAnswer;

    if (currentQuestion.isTermsPage || currentQuestion.isCustomForm || currentQuestion.isPricesPage) {
      // For terms, custom forms, and prices pages, find the next question from edges
      nextQuestionId = currentQuestion.optionToNextQuestion.get('default') ||
        (currentQuestion.options.length > 0 ? getNextQuestionId(currentQuestion, currentQuestion.options[0]) : undefined);
    } else if (currentAnswer) {
      // Normalize selected option for lookup
      const normOption = currentAnswer.trim();
      nextQuestionId = getNextQuestionId(currentQuestion, normOption);

      if (!nextQuestionId) {
        // Try with raw selectedOption (untrimmed)
        nextQuestionId = getNextQuestionId(currentQuestion, currentAnswer);
      }

      // DEBUG: If nextQuestionId exists but not found in map, log state
      if (nextQuestionId && !questionMap.get(nextQuestionId)) {
        console.warn('Next question not found! Debug info:', {
          currentQuestion,
          selectedOption: currentAnswer,
          optionToNextQuestion: Array.from(currentQuestion.optionToNextQuestion.entries())
        });
      }
    }

    // Get existing detail from answers to preserve it if state is empty
    const existingAnswer = answers.find(a => a.questionId === currentQuestionId);
    const existingDetail = existingAnswer?.detail || '';

    // Only save detail for the correct question type, and preserve existing detail if state is empty
    if (currentQuestion.hasConditionalInput) {
      if (questionIncludesPregnant && currentAnswer === 'Yes') {
        const detailToSave = pregnancyDetails.trim() || existingDetail;
        if (detailToSave) {
          upsertAnswer(currentQuestionId, currentQuestion.question, currentAnswer, detailToSave);
        }
      } else if (questionIncludesEthnic && currentAnswer === 'Not listed') {
        const detailToSave = ethnicityDetails.trim() || existingDetail;
        if (detailToSave) {
          upsertAnswer(currentQuestionId, currentQuestion.question, currentAnswer, detailToSave);
        }
      } else if (questionIncludesWeightRelated && currentAnswer === 'Yes') {
        const detailToSave = weightConditionsDetails.trim() || existingDetail;
        if (detailToSave) {
          upsertAnswer(currentQuestionId, currentQuestion.question, currentAnswer, detailToSave);
        }
      } else if (questionIncludesDiagnosed && currentAnswer === 'Yes') {
        const detailToSave = medicalConditionsDetails.trim() || existingDetail;
        if (detailToSave) {
          upsertAnswer(currentQuestionId, currentQuestion.question, currentAnswer, detailToSave);
        }
      } else if (questionIncludesPreviously && currentAnswer && currentAnswer !== 'Never taken weight loss treatment') {
        const detailToSave = treatmentHistoryDetails.trim() || existingDetail;
        if (detailToSave) {
          upsertAnswer(currentQuestionId, currentQuestion.question, currentAnswer, detailToSave);
        }
      } else if (questionIncludesAllergy && currentAnswer === 'Yes') {
        const detailToSave = allergyDetails.trim() || existingDetail;
        if (detailToSave) {
          upsertAnswer(currentQuestionId, currentQuestion.question, currentAnswer, detailToSave);
        }
      } else if (questionIncludesMedication && currentAnswer === 'Yes') {
        const detailToSave = medicationDetails.trim() || existingDetail;
        if (detailToSave) {
          upsertAnswer(currentQuestionId, currentQuestion.question, currentAnswer, detailToSave);
        }
      }
    }

    // Navigate to next question
    if (nextQuestionId) {
      setQuestionHistory(prev => [...prev, nextQuestionId]);
      setCurrentQuestionId(nextQuestionId);
    } else {
      // No next question - end of flow, clear progress and redirect to treatment prices
      console.log('Consultation completed:', answers);
      sessionStorage.removeItem('weightLossProgress');
    }
  };

  const handlePrevious = () => {
    // If on login node Step 2, go back to Step 1
    if (currentQuestion?.componentType === 3 && loginStep === 2) {
      setLoginStep(1);
      return;
    }

    // Otherwise, go to previous question
    if (questionHistory.length > 1) {
      const newHistory = [...questionHistory];
      newHistory.pop(); // Remove current question
      const previousQuestionId = newHistory[newHistory.length - 1];
      setQuestionHistory(newHistory);
      setCurrentQuestionId(previousQuestionId);

      // Reset login step when going back to a previous question
      if (currentQuestion?.componentType === 3) {
        setLoginStep(1);
      }
    }
  };

  // Check if custom form is properly filled
  const isCustomFormValid = () => {
    if (!currentQuestion?.isCustomForm) return true;

    if (unitSystem === 'Metric') {
      const heightValid = heightCm && heightCm.trim() !== '';
      const weightValid = weightKg && weightKg.trim() !== '';
      return heightValid && weightValid;
    } else {
      const feetValid = heightFeet && heightFeet.trim() !== '';
      const inchesValid = heightInches && heightInches.trim() !== '';
      const stoneValid = weightStone && weightStone.trim() !== '';
      const poundsValid = weightPounds && weightPounds.trim() !== '';
      return feetValid && inchesValid && stoneValid && poundsValid;
    }
  };

  // Determine if current question is answered
  const isAnswered = (() => {
    if (!currentQuestion || !currentQuestionId) return false;

    // Upload nodes (componentType 7 and 8) - always enabled, clicking Next navigates to upload page
    if (currentQuestion.componentType === 7 || currentQuestion.componentType === 8) {
      return true;
    }

    if (currentQuestion.componentType === 3) {
      if (loginStep === 1) {
        // Step 1 validation: email, firstName, lastName must be filled
        return loginEmail.trim() !== '' && loginFirstName.trim() !== '' && loginLastName.trim() !== '';
      } else if (loginStep === 2) {
        // Step 2 validation: email and password must be filled
        return loginEmail.trim() !== '' && loginPassword.trim() !== '';
      }
    }

    if (currentQuestion.isCustomForm) {
      return isCustomFormValid();
    }

    if (currentQuestion.isTermsPage) {
      return consentToInfo && acceptTerms;
    }

    const selectedAnswer = answers.find(a => a.questionId === currentQuestionId)?.selectedAnswer;
    if (!selectedAnswer) return false;

    if (selectedAnswer === "I understand") return true;

    // Check conditional inputs based on question content (heuristic matching)
    if (currentQuestion.hasConditionalInput) {
      const questionLower = currentQuestion.question.toLowerCase();

      // Pregnancy question
      if (questionLower.includes('pregnant') || questionLower.includes('breastfeeding')) {
        return selectedAnswer === 'No' || pregnancyDetails.trim() !== '';
      }

      // Ethnicity question
      if (questionLower.includes('ethnic')) {
        return selectedAnswer !== 'Not listed' || ethnicityDetails.trim() !== '';
      }

      // Medical conditions question
      if (questionLower.includes('diagnosed')) {
        return selectedAnswer === 'No' || medicalConditionsDetails.trim() !== '';
      }

      // Weight-related conditions
      if (questionLower.includes('weight-related')) {
        return selectedAnswer === 'No' || weightConditionsDetails.trim() !== '';
      }

      // Treatment history
      if (questionLower.includes('previously') || questionLower.includes('currently using')) {
        return selectedAnswer === 'Never taken weight loss treatment' || treatmentHistoryDetails.trim() !== '';
      }

      // Allergies
      if (questionLower.includes('allerg')) {
        return selectedAnswer === 'No' || allergyDetails.trim() !== '';
      }

      // Medications
      if (questionLower.includes('medication')) {
        return selectedAnswer === 'No' || medicationDetails.trim() !== '';
      }
    }

    return true; // Default: if option is selected, it's answered
  })();

  // Format card styles
  const formatCardNumber = (value: string) => {
    // Remove all non-digit characters
    const digitsOnly = value.replace(/\D/g, '');
    // Insert a space after every 4 digits, but not at the end
    return digitsOnly.replace(/(.{4})/g, '$1 ').trim();
  }

  const formatExpiryDate = (value: string) => {
    // Remove non-digit and non-slash characters
    const cleaned = value.replace(/[^\d]/g, '');
    // Add slash after 2 digits (max 4 digits after slash)
    if (cleaned.length <= 2) return cleaned;
    return cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
  }

  // Show loading state
  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading consultation...</p>
          </div>
        </div>
      </main>
    );
  }

  // Show error state
  if (error) {
    return (
      <main className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-red-800 mb-2">Error Loading Consultation</h2>
              <p className="text-red-600 mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Show message if no question loaded
  if (!currentQuestion) {
    return (
      <main className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600">No questions available.</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="bg-black text-white py-4 overflow-hidden">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile: Carousel - single item sliding */}
          <div className="md:hidden flex justify-center items-center text-sm h-6 relative">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex items-center space-x-2 absolute transition-all duration-500 ease-in-out ${index === currentBenefitIndex
                  ? 'translate-x-0 opacity-100'
                  : index < currentBenefitIndex
                    ? '-translate-x-full opacity-0'
                    : 'translate-x-full opacity-0'
                  }`}
              >
                <span className="text-green-400">{benefit.icon}</span>
                <span>{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* Desktop: All items visible spread across full width */}
          <div className="hidden md:flex justify-between items-center text-sm">
            <div className="flex items-center space-x-2 animate-[fadeInUp_0.5s_ease-out]">
              <span className="text-green-400">✓</span>
              <span>Free Tracked Delivery</span>
            </div>
            <div className="flex items-center space-x-2 animate-[fadeInUp_0.5s_ease-out_0.2s_both]">
              <span className="text-green-400">£</span>
              <span>Lowest Price Guarantee</span>
            </div>
            <div className="flex items-center space-x-2 animate-[fadeInUp_0.5s_ease-out_0.4s_both]">
              <span className="text-green-400">🇬🇧</span>
              <span>We are based in the UK</span>
            </div>
          </div>
        </div>
      </div>

      {/* Questionnaire Progress Bar */}
      {!currentQuestion.isPricesPage && !currentQuestion.isCheckoutPage && (
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 py-4 md:py-6">
            <div className="flex items-center justify-between">
              {/* Step 1 - Completed */}
              <div className="flex flex-col items-center flex-1">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-green-500 rounded-full flex items-center justify-center mb-1 md:mb-2">
                  <span className="text-white text-sm md:text-base">✓</span>
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-800 text-center">Medical Questions</span>
              </div>

              {/* Line 1 - Pending */}
              <div className="flex-1 h-0.5 md:h-1 bg-gray-200 mx-1 md:mx-2 mb-4 md:mb-6"></div>

              {/* Step 2 - Upcoming */}
              <div className="flex flex-col items-center flex-1">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-gray-300 rounded-full flex items-center justify-center mb-1 md:mb-2">
                  <span className="text-white text-sm md:text-base">✓</span>
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-500 text-center">Treatment & Prices</span>
              </div>

              {/* Line 2 - Upcoming */}
              <div className="flex-1 h-0.5 md:h-1 bg-gray-200 mx-1 md:mx-2 mb-4 md:mb-6"></div>

              {/* Step 3 - Upcoming */}
              <div className="flex flex-col items-center flex-1">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-gray-300 rounded-full flex items-center justify-center mb-1 md:mb-2">
                  <span className="text-white text-sm md:text-base">✓</span>
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-500 text-center">Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content - Flex grow to push footer down */}
      <div className="flex-grow">
        <div className={`${isSpecialLayout ? 'max-w-6xl' : 'max-w-4xl'} w-full mx-auto ${isSpecialLayout ? 'px-0 md:px-4 pb-12 md:pb-16 pt-6 md:pt-10' : 'px-4 py-12'}`}>
          <div className={isSpecialLayout ? 'bg-transparent' : 'bg-white overflow-hidden'}>
            {/* Question Header */}
            {!currentQuestion.isPricesPage && !currentQuestion.isCheckoutPage && (
              <div className="text-center py-8 px-6">
                <h2 className={`${currentQuestion.isTermsPage ? 'text-2xl font-bold' : 'text-xl'} text-gray-700`}>
                  {currentQuestion.question}
                </h2>
                {currentQuestion.subtext && (
                  <p className="text-base text-gray-600 mt-4">
                    {currentQuestion.subtext}
                  </p>
                )}
              </div>
            )}

            {/* Answer Options */}
            <div className={currentQuestion.isPricesPage || currentQuestion.isCheckoutPage ? '' : 'px-6 pb-8'}>
              {currentQuestion.componentType === 3 ? (
                <div className="space-y-6 mb-8 px-4 max-w-xl mx-auto">
                  {loginStep === 1 ? (
                    // Step 1: Info page (email, firstName, lastName)
                    <>
                      <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">Let&apos;s start with your info.</h2>
                      <div>
                        <label htmlFor="loginEmail" className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="loginEmail"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="loginFirstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="loginFirstName"
                          value={loginFirstName}
                          onChange={(e) => setLoginFirstName(e.target.value)}
                          placeholder="Enter your first name"
                          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="loginLastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="loginLastName"
                          value={loginLastName}
                          onChange={(e) => setLoginLastName(e.target.value)}
                          placeholder="Enter your last name"
                          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                    </>
                  ) : (
                    // Step 2: Login page (email, password)
                    <>
                      <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">Please, log in to your account.</h2>
                      <div>
                        <label htmlFor="loginEmailStep2" className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="loginEmailStep2"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="loginPassword" className="block text-sm font-medium text-gray-700 mb-2">
                          Password
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            id="loginPassword"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent pr-12"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                          >
                            {showPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>
                      <div className="text-center">
                        <a
                          href="/forgot-password"
                          className="text-sm text-gray-600 hover:text-blue-600"
                        >
                          Forgot Your Password? <span className="text-blue-600 underline">Click here</span>
                        </a>
                      </div>
                    </>
                  )}
                </div>
              ) : currentQuestion.isTermsPage ? (
                <div className="space-y-6 mb-8">
                  {/* Terms and Conditions Content */}
                  <div className="text-left space-y-4 text-gray-700 text-sm leading-relaxed max-w-3xl mx-auto">
                    <p>
                      I have answered all of the medical questions truthfully and confirm that the medication is for my own use.
                    </p>
                    <p>
                      I have read all the information and understand the potential risks and benefits of Weight management treatment. I will watch any instructional video required for any treatment and if I have any questions I will contact Assured Pharmacy.
                    </p>
                    <p>
                      We collect information about your health to enable us to treat you safely. Under the GDPR this type of data is classed as sensitive and so we take further precautions when collecting and processing it. By consenting to the treatment you are permitting us to use this health data to provide the weight management service.
                    </p>
                    <p>
                      I agree to be treated by healthcare professionals at Assured Pharmacy.
                    </p>
                    <p>
                      And if I have any questions or side effects from my treatment then I will speak to a healthcare professional.
                    </p>
                    <p>
                      I acknowledge that the weight loss treatment plan will be billed monthly. The first month of treatment may be offered at a discounted rate, with subsequent monthly subscriptions thereafter.
                    </p>
                    <p>
                      You have the flexibility to cancel or pause your prescription indefinitely at any time by contacting customer services at team@assuredpharmacy.co.uk or reaching us at 01625460621. Please be aware that payment is processed 48 hours before your order is scheduled for dispatch. Once medication has been dispensed, refunds cannot be issued.
                    </p>
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-4 mt-8">
                    <label className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={consentToInfo}
                        onChange={(e) => setConsentToInfo(e.target.checked)}
                        className="mt-1 w-5 h-5 text-green-500 border-gray-300 rounded focus:ring-green-500"
                      />
                      <span className="text-gray-800 text-sm">
                        I consent to the above information and conditions
                      </span>
                    </label>

                    <label className="flex items-start space-x-3 p-4 border border-green-200 bg-green-50 rounded-lg cursor-pointer hover:bg-green-100">
                      <input
                        type="checkbox"
                        checked={acceptTerms}
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                        className="mt-1 w-5 h-5 text-green-500 border-gray-300 rounded focus:ring-green-500"
                      />
                      <span className="text-gray-800 text-sm">
                        I&apos;ve read and accept the{' '}
                        <a href="/terms-and-conditions" target="_blank" className="text-blue-600 hover:underline">
                          terms & conditions
                        </a>
                        {' '}and{' '}
                        <a href="/privacy-policy" target="_blank" className="text-blue-600 hover:underline">
                          privacy policy
                        </a>
                      </span>
                    </label>
                  </div>
                </div>
              ) : currentQuestion.isCustomForm ? (
                <div className="space-y-6 mb-8">
                  {/* Unit System Toggle */}
                  <div className="flex justify-center">
                    <div className="flex bg-gray-100 rounded-lg p-1">
                      <button
                        onClick={() => setUnitSystem('Imperial')}
                        className={`px-6 py-2 rounded-md transition-colors ${unitSystem === 'Imperial'
                          ? 'bg-green-100 text-gray-800 shadow-sm'
                          : 'text-gray-600'
                          }`}
                      >
                        <span className={unitSystem === 'Imperial' ? 'flex items-center' : ''}>
                          {unitSystem === 'Imperial' && (
                            <span className="w-5 h-5 bg-green-500 rounded-sm flex items-center justify-center mr-2">
                              <span className="text-white text-xs">✓</span>
                            </span>
                          )}
                          Imperial
                        </span>
                      </button>
                      <button
                        onClick={() => setUnitSystem('Metric')}
                        className={`px-6 py-2 rounded-md transition-colors ${unitSystem === 'Metric'
                          ? 'bg-green-100 text-gray-800 shadow-sm'
                          : 'text-gray-600'
                          }`}
                      >
                        <span className={unitSystem === 'Metric' ? 'flex items-center' : ''}>
                          {unitSystem === 'Metric' && (
                            <span className="w-5 h-5 bg-green-500 rounded-sm flex items-center justify-center mr-2">
                              <span className="text-white text-xs">✓</span>
                            </span>
                          )}
                          Metric
                        </span>
                      </button>
                    </div>
                  </div>

                  {unitSystem === 'Metric' ? (
                    <>
                      {/* Metric Height Input */}
                      <div>
                        <label className="block text-center text-gray-700 font-medium mb-3">
                          Height (cm)
                        </label>
                        <input
                          type="text"
                          value={heightCm}
                          onChange={(e) => setHeightCm(e.target.value)}
                          placeholder="170"
                          className="w-full p-4 border border-gray-200 rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>

                      {/* Metric Weight Input */}
                      <div>
                        <label className="block text-center text-gray-700 font-medium mb-3">
                          Weight (kg)
                        </label>
                        <input
                          type="text"
                          value={weightKg}
                          onChange={(e) => setWeightKg(e.target.value)}
                          placeholder="50"
                          className="w-full p-4 border border-gray-200 rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Imperial Height Inputs */}
                      <div>
                        <label className="block text-center text-gray-700 font-medium mb-3">
                          Height
                        </label>
                        <div className="flex space-x-4">
                          <div className="flex-1">
                            <label className="block text-center text-gray-600 text-sm mb-2">
                              Feet
                            </label>
                            <input
                              type="text"
                              value={heightFeet}
                              onChange={(e) => setHeightFeet(e.target.value)}
                              placeholder="5"
                              className="w-full p-4 border border-gray-200 rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                          </div>
                          <div className="flex-1">
                            <label className="block text-center text-gray-600 text-sm mb-2">
                              Inches
                            </label>
                            <input
                              type="text"
                              value={heightInches}
                              onChange={(e) => setHeightInches(e.target.value)}
                              placeholder="7"
                              className="w-full p-4 border border-gray-200 rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Imperial Weight Inputs */}
                      <div>
                        <label className="block text-center text-gray-700 font-medium mb-3">
                          Weight
                        </label>
                        <div className="flex space-x-4">
                          <div className="flex-1">
                            <label className="block text-center text-gray-600 text-sm mb-2">
                              Stone
                            </label>
                            <input
                              type="text"
                              value={weightStone}
                              onChange={(e) => setWeightStone(e.target.value)}
                              placeholder="7"
                              className="w-full p-4 border border-gray-200 rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                          </div>
                          <div className="flex-1">
                            <label className="block text-center text-gray-600 text-sm mb-2">
                              Pounds
                            </label>
                            <input
                              type="text"
                              value={weightPounds}
                              onChange={(e) => setWeightPounds(e.target.value)}
                              placeholder="12"
                              className="w-full p-4 border border-gray-200 rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ) : currentQuestion.componentType === 7 ? (
                /* ID Upload Node */
                <div className="px-6 py-8 text-center">
                  <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      {currentQuestion.question}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Click &quot;Next&quot; to proceed to the ID upload page where you can upload your ID card or passport.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-sm text-blue-800">
                        You will be redirected to a secure upload page where you can upload a clear image of your ID card or passport.
                      </p>
                    </div>
                  </div>
                </div>
              ) : currentQuestion.componentType === 8 ? (
                /* Selfie Upload Node */
                <div className="px-6 py-8 text-center">
                  <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      {currentQuestion.question}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Click &quot;Next&quot; to proceed to the selfie upload page where you can take or upload a selfie photo.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-sm text-blue-800">
                        You will be redirected to a secure upload page where you can take a selfie photo or upload an existing one.
                      </p>
                    </div>
                  </div>
                </div>
              ) : currentQuestion.componentType === 6 ? (
                /* Treatment Prices Page */
                <>
                  {/* Progress Bar */}
                  <div className="bg-white border-b">
                    <div className="max-w-6xl mx-auto px-4 py-4 md:py-8">
                      <div className="flex items-center justify-between">
                        {/* Step 1 - Completed */}
                        <div className="flex flex-col items-center flex-1">
                          <div className="w-7 h-7 md:w-8 md:h-8 bg-green-500 rounded-full flex items-center justify-center mb-1 md:mb-2">
                            <span className="text-white text-sm md:text-lg">✓</span>
                          </div>
                          <span className="text-xs md:text-sm font-medium text-gray-800 text-center">Medical Questions</span>
                        </div>

                        {/* Line 1 - Completed */}
                        <div className="flex-1 h-0.5 md:h-1 bg-green-500 mx-1 md:mx-2 mb-4 md:mb-6"></div>

                        {/* Step 2 - Current */}
                        <div className="flex flex-col items-center flex-1">
                          <div className="w-7 h-7 md:w-8 md:h-8 bg-green-500 rounded-full flex items-center justify-center mb-1 md:mb-2">
                            <span className="text-white text-sm md:text-lg">✓</span>
                          </div>
                          <span className="text-xs md:text-sm font-medium text-gray-800 text-center">Treatment & Prices</span>
                        </div>

                        {/* Line 2 - Incomplete */}
                        <div className="flex-1 h-0.5 md:h-1 bg-gray-300 mx-1 md:mx-2 mb-4 md:mb-6"></div>

                        {/* Step 3 - Incomplete */}
                        <div className="flex flex-col items-center flex-1">
                          <div className="w-7 h-7 md:w-8 md:h-8 bg-gray-300 rounded-full flex items-center justify-center mb-1 md:mb-2">
                            <span className="text-white text-sm md:text-lg">✓</span>
                          </div>
                          <span className="text-xs md:text-sm font-medium text-gray-500 text-center">Secure Checkout</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Qualification Banner */}
                  <div className="bg-white py-4 md:py-8">
                    <div className="max-w-7xl mx-auto px-4">
                      <div className="md:hidden bg-gradient-to-r from-green-500 to-green-400 rounded-2xl p-6">
                        <div className="text-white text-center mb-6">
                          <h1 className="text-2xl font-bold mb-1">Awesome,</h1>
                          <h2 className="text-2xl font-bold mb-3">it looks like you qualify</h2>
                          <p className="text-sm leading-relaxed">
                            It looks like you qualify for one of the treatments shown below. Please proceed with the purchase of your preferred treatment and the team will review your order.
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-4 text-center mx-auto max-w-xs">
                          <Image
                            src="/"
                            alt="Doctor Image"
                            width={100}
                            height={100}
                            className="w-24 h-24 rounded-lg mb-2 mx-auto object-cover"
                          />
                          <h3 className="font-bold text-gray-800 text-sm">Doctor's name</h3>
                          <p className="text-xs text-gray-600">Doctor's position</p>
                          <p className="text-[10px] text-gray-500 mt-0.5">Doctor's detail</p>
                        </div>
                      </div>

                      <div className="hidden md:block bg-gradient-to-r from-green-500 to-green-400 rounded-2xl p-8 relative overflow-hidden">
                        <div className="flex items-start gap-6">
                          <div className="text-white flex-1 pr-4">
                            <h1 className="text-4xl font-bold mb-2">Awesome,</h1>
                            <h2 className="text-3xl font-bold mb-4">it looks like you qualify</h2>
                            <p className="text-base leading-relaxed">
                              It looks like you qualify for one of the treatments shown below. Please proceed with the purchase of your preferred treatment and the team will review your order.
                            </p>
                          </div>
                          <div className="bg-white rounded-lg p-4 text-center flex-shrink-0 w-40">
                            <Image
                              src="/"
                              alt="Doctor's Photo"
                              width={120}
                              height={120}
                              className="w-24 h-24 rounded-lg mb-2 mx-auto object-cover"
                            />
                            <h3 className="font-bold text-gray-800 text-sm">Doctor's Name</h3>
                            <p className="text-xs text-gray-600">Doctor's position</p>
                            <p className="text-[10px] text-gray-500 mt-0.5">Doctor's detail</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-grow py-12">
                    <div className="max-w-7xl mx-auto px-4 space-y-8">
                      {products?.map((product: any, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
                          {/* Title and Rating */}
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-0">{product.treatment_name}</h2>
                            {/* <div className="flex items-center space-x-2">
                              <span className="text-sm font-medium">Excellent</span>
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <span key={star} className="text-green-500 text-lg">★</span>
                                ))}
                              </div>
                              <span className="text-sm text-gray-600">TrustPilot</span>
                            </div> */}
                          </div>

                          {/* Mobile Layout */}
                          <div className="md:hidden">
                            {/* 2. Image */}
                            <div className="mb-6">
                              <img
                                src={`http://localhost:3090${product.primary_img}`}
                                alt="Mounjaro"
                                width={200}
                                height={200}
                                className="mx-auto"
                              />
                            </div>

                            {/* 3. Strength Selection */}
                            <div className="mb-6">
                              <h3 className="text-lg font-semibold mb-3">Strength</h3>
                              <div className="grid grid-cols-3 gap-3 mb-3">
                                {product.variants.slice(0, 3).map((variant: any, idx: number) => (
                                  <button
                                    key={idx}
                                    onClick={() => setSelectedVariant({ strength: variant.strength, price: variant.price, productId: product.id, variantId: variant.id })}
                                    className={`p-3 rounded-lg border-2 transition-colors ${selectedVariant?.productId === product.id && selectedVariant?.strength === variant.strength
                                      ? 'bg-green-100 border-green-500'
                                      : 'bg-gray-100 border-gray-200 hover:border-gray-300'
                                      }`}
                                  >
                                    <div className="font-semibold">{variant.strength}{variant.unit}</div>
                                    <div className="text-xs text-gray-600">{product.drugName}</div>
                                  </button>
                                ))}
                              </div>
                              <div className="grid grid-cols-3 gap-3">
                                {product.variants.slice(3).map((variant: any, idx: number) => (
                                  <button
                                    key={idx}
                                    onClick={() => setSelectedVariant({ strength: variant.strength, price: variant.price, productId: product.id, variantId: variant.id })}
                                    className={`p-3 rounded-lg border-2 transition-colors ${selectedVariant?.productId === product.id && selectedVariant?.strength === variant.strength
                                      ? 'bg-green-100 border-green-500'
                                      : 'bg-gray-100 border-gray-200 hover:border-gray-300'
                                      }`}
                                  >
                                    <div className="font-semibold">{variant.strength}{variant.unit}</div>
                                    <div className="text-xs text-gray-600">{product.drugName}</div>
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* 4. Quantity */}
                            <div className="mb-6">
                              <h3 className="text-lg font-semibold mb-3">Quantity</h3>
                              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <span className="font-medium">{product.labelerName}</span>
                              </div>
                            </div>

                            {/* 5. Price */}
                            <div className="text-center mb-4">
                              <div className="text-3xl font-bold text-gray-800">£ {selectedVariant?.price}</div>
                              <div className="text-sm text-gray-600">£ {((selectedVariant?.price ?? 0) / 4).toFixed(2)} Per week</div>
                            </div>

                            {/* 6. Buy Button */}
                            <button
                              onClick={() => {
                                const productData = {
                                  name: `${product.treatment_name}`,
                                  price: selectedVariant?.price,
                                  quantity: `${product.labelerName}`,
                                  type: `${product.drugName} - ${selectedVariant?.strength}`,
                                  image: `http://localhost:3090${product.primary_img}`,
                                  treatment: 'weight-loss',
                                  variantId: `${selectedVariant?.variantId}`,
                                  productId: product.id
                                };
                                setSelectedProduct(productData);
                                sessionStorage.setItem('checkoutProduct', JSON.stringify(productData));
                                handleNext();
                              }}
                              className={`text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 mb-3 w-full ${selectedVariant?.productId !== product.id
                                ? 'bg-gray-500'
                                : 'bg-blue-600 hover:bg-blue-700'
                                }`}
                              disabled={selectedVariant?.productId !== product.id}
                            >
                              <span>Buy Now</span>
                              <span>→</span>
                            </button>

                            {/* 7. Prescription Text */}
                            <p className="text-center text-sm text-gray-600 mb-6">Prescription included</p>

                            {/* Treatment Info */}
                            <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-sm text-gray-700">
                              <p>{product.shortDescription}</p>
                              <p className="font-semibold">{product.description}</p>
                            </div>
                          </div>

                          {/* Desktop Grid Layout */}
                          <div className="hidden md:grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-2">
                              {/* Strength Selection */}
                              <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-3">Strength</h3>
                                <div className="grid grid-cols-3 gap-3 mb-3">
                                  {product.variants.slice(0, 3).map((variant: any, idx: number) => (
                                    <button
                                      key={idx}
                                      onClick={() => setSelectedVariant({ strength: variant.strength, price: variant.price, productId: product.id, variantId: variant.id })}
                                      className={`p-3 rounded-lg border-2 transition-colors ${selectedVariant?.productId === product.id && selectedVariant?.strength === variant.strength
                                        ? 'bg-green-100 border-green-500'
                                        : 'bg-gray-100 border-gray-200 hover:border-gray-300'
                                        }`}
                                    >
                                      <div className="font-semibold">{variant.strength}{variant.unit}</div>
                                      <div className="text-xs text-gray-600">{product.drugName}</div>
                                    </button>
                                  ))}
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                  {product.variants.slice(3).map((variant: any, idx: number) => (
                                    <button
                                      key={idx}
                                      onClick={() => setSelectedVariant({ strength: variant.strength, price: variant.price, productId: product.id, variantId: variant.id })}
                                      className={`p-3 rounded-lg border-2 transition-colors ${selectedVariant?.productId === product.id && selectedVariant?.strength === variant.strength
                                        ? 'bg-green-100 border-green-500'
                                        : 'bg-gray-100 border-gray-200 hover:border-gray-300'
                                        }`}
                                    >
                                      <div className="font-semibold">{variant.strength}{variant.unit}</div>
                                      <div className="text-xs text-gray-600">{product.drugName}</div>
                                    </button>
                                  ))}
                                </div>
                              </div>

                              {/* Quantity */}
                              <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-3">Quantity</h3>
                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                  <span className="font-medium">{product.labelerName}</span>
                                </div>
                              </div>

                              {/* Treatment Info */}
                              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-sm text-gray-700">
                                <p>{product.shortDescription}</p>
                                <p className="font-semibold">{product.description}</p>
                              </div>
                            </div>

                            {/* Price and Buy Button (Desktop) */}
                            <div className="flex flex-col">
                              <div className="mb-4">
                                <img
                                  src={`http://localhost:3090${product.primary_img}`}
                                  alt="Mounjaro"
                                  width={200}
                                  height={200}
                                  className="mx-auto"
                                />
                              </div>
                              <div className="text-center mb-4">
                                <div className="text-3xl font-bold text-gray-800">£ {selectedVariant?.productId === product.id ? selectedVariant?.price : 0}</div>
                                <div className="text-sm text-gray-600">£ {selectedVariant?.productId === product.id ? ((selectedVariant?.price ?? 0) / 4).toFixed(2) : 0} Per week</div>
                              </div>
                              <button
                                onClick={() => {
                                  const productData = {
                                    name: `${product.treatment_name}`,
                                    price: selectedVariant?.price,
                                    quantity: `${product.labelerName}`,
                                    type: `${product.drugName} - ${selectedVariant?.strength}`,
                                    image: `http://localhost:3090${product.primary_img}`,
                                    treatment: 'weight-loss',
                                    variantId: `${selectedVariant?.variantId}`,
                                    productId: product.id
                                  };
                                  setSelectedProduct(productData);
                                  sessionStorage.setItem('checkoutProduct', JSON.stringify(productData));
                                  handleNext();
                                }}
                                className={`text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 mb-3 w-full ${selectedVariant?.productId !== product.id
                                  ? 'bg-gray-500'
                                  : 'bg-blue-600 hover:bg-blue-700'
                                  }`}
                                disabled={selectedVariant?.productId !== product.id}
                              >
                                <span>Buy Now</span>
                                <span>→</span>
                              </button>
                              <p className="text-center text-sm text-gray-600">Prescription included</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : currentQuestion.componentType === 4 ? (
                <>
                  {/* Progress Bar */}
                  <div className="bg-white border-b">
                    <div className="max-w-7xl mx-auto px-4 py-8">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col items-center flex-1">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mb-2">
                            <span className="text-white text-lg">✓</span>
                          </div>
                          <span className="text-sm font-medium text-gray-800">Medical Questions</span>
                        </div>
                        <div className="flex-1 h-1 bg-green-500 mx-2 mb-6"></div>
                        <div className="flex flex-col items-center flex-1">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mb-2">
                            <span className="text-white text-lg">✓</span>
                          </div>
                          <span className="text-sm font-medium text-gray-800">Treatment & Prices</span>
                        </div>
                        <div className="flex-1 h-1 bg-green-500 mx-2 mb-6"></div>
                        <div className="flex flex-col items-center flex-1">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mb-2">
                            <span className="text-white text-lg">✓</span>
                          </div>
                          <span className="text-sm font-medium text-gray-800">Secure Checkout</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-grow py-8">
                    <div className="max-w-7xl mx-auto px-4">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="lg:pr-4 flex flex-col gap-6 lg:h-full">
                          {/* Patient Details */}
                          <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="bg-green-50 px-4 py-2 -mx-6 -mt-6 mb-6 rounded-t-lg">
                              <h2 className="text-lg font-bold text-gray-800">Patient details</h2>
                            </div>
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Patient First Name</label>
                                  <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Patient Last Name</label>
                                  <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>
                              </div>
                              <div className="relative">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Postcode</label>
                                <input
                                  type="text"
                                  value={postcode}
                                  onChange={(e) => setPostcode(e.target.value)}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button className="absolute right-3 top-9 text-green-600 text-sm font-medium hover:underline">Find Address</button>
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Street Address <span className="text-red-500">*</span></label>
                                <input
                                  type="text"
                                  value={streetAddress}
                                  onChange={(e) => setStreetAddress(e.target.value)}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Town / City <span className="text-red-500">*</span></label>
                                <input
                                  type="text"
                                  value={townCity}
                                  onChange={(e) => setTownCity(e.target.value)}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">County</label>
                                  <input
                                    type="text"
                                    value={county}
                                    onChange={(e) => setCounty(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Postcode <span className="text-red-500">*</span></label>
                                  <input
                                    type="text"
                                    value={postcodeSecond}
                                    onChange={(e) => setPostcodeSecond(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Telephone <span className="text-red-500">*</span></label>
                                <input
                                  type="tel"
                                  value={telephone}
                                  onChange={(e) => setTelephone(e.target.value)}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col gap-6 flex-1">
                            {/* Shipping Details */}
                            <div className="bg-white rounded-lg shadow-sm p-6">
                              <div className="bg-green-50 px-4 py-2 -mx-6 -mt-6 mb-6 rounded-t-lg">
                                <h2 className="text-lg font-bold text-gray-800">Shipping details</h2>
                              </div>
                              <div className="space-y-4">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={differentShipping}
                                    onChange={(e) => setDifferentShipping(e.target.checked)}
                                    className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
                                  />
                                  <span className="text-sm text-gray-700">I have a different shipping address</span>
                                </label>
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-gray-700">
                                  All delivery options apart from click and collect may be posted without a signature. You confirm that no animals or children may be harmed by posting through your letterbox.
                                </div>
                                {differentShipping && (
                                  <div className="space-y-4 bg-white border border-green-100 rounded-lg p-4 shadow-sm">
                                    <div className="relative">
                                      <label className="block text-sm font-medium text-gray-700 mb-1">Postcode</label>
                                      <input
                                        type="text"
                                        value={shippingPostcode}
                                        onChange={(e) => setShippingPostcode(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                      />
                                      <button className="absolute right-3 top-9 text-green-600 text-sm font-medium hover:underline">
                                        Find Address
                                      </button>
                                    </div>
                                    <div>
                                      <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                                      <input
                                        type="text"
                                        value={shippingCompany}
                                        onChange={(e) => setShippingCompany(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                      />
                                    </div>
                                    <div>
                                      <label className="block text-sm font-medium text-gray-700 mb-1">Street Address <span className="text-red-500">*</span></label>
                                      <input
                                        type="text"
                                        value={shippingStreetAddress}
                                        onChange={(e) => setShippingStreetAddress(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                      />
                                    </div>
                                    <div>
                                      <label className="block text-sm font-medium text-gray-700 mb-1">Town / City <span className="text-red-500">*</span></label>
                                      <input
                                        type="text"
                                        value={shippingTownCity}
                                        onChange={(e) => setShippingTownCity(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                      />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">County</label>
                                        <input
                                          type="text"
                                          value={shippingCounty}
                                          onChange={(e) => setShippingCounty(e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Postcode <span className="text-red-500">*</span></label>
                                        <input
                                          type="text"
                                          value={shippingPostcodeSecond}
                                          onChange={(e) => setShippingPostcodeSecond(e.target.value)}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                      </div>
                                    </div>
                                    <div>
                                      <label className="block text-sm font-medium text-gray-700 mb-1">Telephone</label>
                                      <input
                                        type="tel"
                                        value={shippingTelephone}
                                        onChange={(e) => setShippingTelephone(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                      />
                                    </div>
                                  </div>
                                )}
                                <div className="space-y-3">
                                  {[
                                    { id: 'royal-mail', price: '£5.95', label: 'Royal Mail / DPD', note: 'Next Day Delivery' },
                                  ].map(option => (
                                    <label
                                      key={option.id}
                                      className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer ${selectedShipping === option.id ? 'border-green-500 bg-green-50' : 'border-gray-300'
                                        }`}
                                    >
                                      <input
                                        type="radio"
                                        name="shipping"
                                        value={option.id}
                                        checked={selectedShipping === option.id}
                                        onChange={(e) => setSelectedShipping(e.target.value)}
                                        className="w-5 h-5 text-green-500"
                                      />
                                      <div className="flex items-center justify-between flex-1">
                                        <div className="flex items-center space-x-4">
                                          <span className="font-semibold text-gray-800">{option.price}</span>
                                          <span className="text-gray-700">{option.label}</span>
                                        </div>
                                        <span className="text-gray-700 font-medium">{option.note}</span>
                                      </div>
                                    </label>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Payment Methods */}
                            <div className="bg-white rounded-lg shadow-sm p-6 mt-auto">
                              <div className="bg-green-50 px-4 py-2 -mx-6 -mt-6 mb-6 rounded-t-lg">
                                <h2 className="text-lg font-bold text-gray-800">Payment Methods</h2>
                              </div>
                              <div className="space-y-4">
                                <p className="text-sm text-gray-700">Processed Securely by <span className="text-blue-600 font-medium">Ryft</span></p>
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-700">
                                  A secure Payment window will open for you to input credit card details.
                                </div>
                                <button
                                  onClick={() => setIsPaymentModalOpen(true)}
                                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                                >
                                  <span>Continue to Payment</span>
                                  <span className="text-xl">→</span>
                                </button>
                                <div className="flex items-center justify-center gap-3 pt-4 flex-wrap md:flex-nowrap">
                                  <div className="flex items-center space-x-2 px-3 py-2 bg-green-100 border border-green-300 rounded">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                      <span className="text-white text-xs">🔒</span>
                                    </div>
                                    <span className="text-xs font-semibold text-gray-700">VERIFIED &amp; SECURED</span>
                                  </div>
                                  <div className="px-3 py-2 border border-gray-300 rounded">
                                    <span className="text-xs font-semibold text-blue-600">Trustwave</span>
                                    <p className="text-xs text-gray-600">Trusted Commerce</p>
                                  </div>
                                  <div className="px-3 py-2 border border-gray-300 rounded flex items-center justify-center">
                                    <Image
                                      src={`/${selectedProduct?.treatment === 'ed' ? 'ed_treatment' : selectedProduct?.treatment === 'hair-loss' ? 'hair_loss' : selectedProduct?.treatment === 'premature-ejaculation' ? 'pe_treatment' : 'weight_management'}/register-pharmacy.png`}
                                      alt="Registered Pharmacy"
                                      width={60}
                                      height={30}
                                      className="object-contain"
                                    />
                                  </div>
                                  <div className="px-3 py-2 border border-gray-300 rounded flex items-center justify-center">
                                    <Image
                                      src={`/${selectedProduct?.treatment === 'ed' ? 'ed_treatment' : selectedProduct?.treatment === 'hair-loss' ? 'hair_loss' : selectedProduct?.treatment === 'premature-ejaculation' ? 'pe_treatment' : 'weight_management'}/home-logo-royal-mail.png`}
                                      alt="Royal Mail"
                                      width={60}
                                      height={30}
                                      className="object-contain"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right Column - Order Summary */}
                        <div className="lg:sticky lg:top-4 lg:self-start">
                          <div className="bg-gray-50 rounded-lg p-6">
                            {selectedProduct && (
                              <>
                                <div className="flex items-start gap-4 mb-6">
                                  <img src={selectedProduct.image} alt={selectedProduct.name} width={80} height={80} className="object-contain" />
                                  <div className="flex-1">
                                    <h3 className="font-bold text-gray-900 text-lg mb-2">{selectedProduct.name}</h3>
                                    <p className="text-xl font-bold text-gray-900">£{selectedProduct.price && selectedProduct.price.toFixed(2)}</p>
                                  </div>
                                </div>
                                <div className="space-y-3 mb-6 pb-6 border-b border-gray-300">
                                  {selectedProduct.type && (
                                    <div className="flex justify-between items-start">
                                      <span className="text-sm text-gray-700">Type:</span>
                                      <span className="text-sm font-medium text-gray-900 text-right">{selectedProduct.type}</span>
                                    </div>
                                  )}
                                  <div className="flex justify-between items-start">
                                    <span className="text-sm text-gray-700">Quantity:</span>
                                    <span className="text-sm font-medium text-gray-900 text-right">{selectedProduct.quantity}</span>
                                  </div>
                                </div>
                                <button className="w-full text-left text-gray-600 text-sm py-3 px-4 bg-white border border-gray-300 rounded-md hover:bg-gray-50 mb-6 flex justify-between items-center">
                                  <span>Apply Discount Code</span>
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                  </svg>
                                </button>
                                <div className="space-y-3 mb-6 pb-6 border-b border-gray-300">
                                  <div className="flex justify-between">
                                    <span className="text-sm text-gray-700">Cart Subtotal</span>
                                    <span className="text-sm font-medium text-gray-900">£{selectedProduct.price && selectedProduct.price.toFixed(2)}</span>
                                  </div>
                                  <div>
                                    <div className="flex justify-between">
                                      <span className="text-sm text-gray-700">Shipping</span>
                                      <span className="text-sm font-medium text-gray-900">£5.95</span>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-1">Next Day Delivery - Royal Mail / DPD</p>
                                  </div>
                                </div>
                                <div className="flex justify-between items-center mb-6">
                                  <span className="text-base font-bold text-gray-900">Order Total</span>
                                  <span className="text-2xl font-bold text-gray-900">£{selectedProduct.price && (selectedProduct.price + 5.95).toFixed(2)}</span>
                                </div>
                                <button
                                  onClick={() => setIsPaymentModalOpen(true)}
                                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 mb-4"
                                >
                                  <span>Continue to Payment</span>
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                  </svg>
                                </button>
                                <p className="text-xs text-gray-700 text-center leading-relaxed">
                                  A secure Payment window will open for you to input credit card details.
                                </p>
                                <p className="text-xs text-gray-700 text-center leading-relaxed mt-3">
                                  The payment processed today encompasses the initial month of your treatment plan at a discounted rate. Subsequent payments will be billed automatically at the rate of your next required dosage.{' '}
                                  <a href="/consultation/terms" className="text-blue-600 hover:underline">Read more…</a>
                                </p>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Modal */}
                  {isPaymentModalOpen && selectedProduct && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-8 relative">
                        <button
                          onClick={() => setIsPaymentModalOpen(false)}
                          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
                        >
                          ×
                        </button>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Payment</h2>
                        <div className="mb-6">
                          <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-white">
                            <div className="mr-3 text-gray-300">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <rect x="2" y="5" width="20" height="14" rx="2" />
                                <line x1="2" y1="10" x2="22" y2="10" />
                              </svg>
                            </div>
                            <input
                              type="text"
                              placeholder="Card Number"
                              value={cardNumber}
                              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                              className="flex-1 outline-none text-gray-900 placeholder-gray-300 text-sm"
                              maxLength={19}
                            />
                            <input
                              type="text"
                              placeholder="MM/YY"
                              value={expiryDate}
                              onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                              className="w-16 outline-none text-gray-900 placeholder-gray-300 text-right text-sm mr-3"
                              maxLength={5}
                            />
                            <input
                              type="text"
                              placeholder="CVC"
                              value={cvc}
                              onChange={e => {
                                // Allow only digits, up to 3 characters
                                const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 3);
                                setCvc(digitsOnly);
                              }}
                              className="w-12 outline-none text-gray-900 placeholder-gray-300 text-right text-sm"
                              maxLength={3}
                            />
                          </div>
                        </div>
                        <div className="mb-8">
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                            <span className="text-sm text-gray-600 italic">Save card for future payments</span>
                          </label>
                        </div>
                        <button
                          onClick={() => {
                            // Validate card details before proceeding
                            if (!cardNumber.trim() || !expiryDate.trim() || !cvc.trim()) {
                              alert('Please fill in all card details');
                              return;
                            }
                            setIsPaymentModalOpen(false);

                            // Find ID upload node (componentType 7) and selfie upload node (componentType 8)
                            let idUploadNodeId: string | undefined;
                            let selfieUploadNodeId: string | undefined;

                            // Search through questionMap to find componentType 7 and 8
                            questionMap.forEach((question, id) => {
                              if (question.componentType === 7) {
                                idUploadNodeId = id;
                              } else if (question.componentType === 8) {
                                selfieUploadNodeId = id;
                              }
                            });

                            // If we're on checkout page, try to get next question from current question
                            if (currentQuestion && currentQuestion.isCheckoutPage) {
                              const checkoutNextId = currentQuestion.optionToNextQuestion.get('default');
                              if (checkoutNextId) {
                                idUploadNodeId = checkoutNextId;
                                // Find selfie upload node from ID upload node's next question
                                const idUploadNode = questionMap.get(idUploadNodeId);
                                if (idUploadNode) {
                                  const selfieNextId = idUploadNode.optionToNextQuestion.get('Pass')
                                    || idUploadNode.optionToNextQuestion.get('default');
                                  if (selfieNextId) {
                                    selfieUploadNodeId = selfieNextId;
                                  }
                                }
                              }
                            }

                            // Navigate to ID upload page with proper parameters
                            if (idUploadNodeId && selfieUploadNodeId) {
                              const returnUrl = `/consultation/weight-loss?questionId=${selfieUploadNodeId}&returnFrom=selfie-upload`;
                              router.push(`/consultation/weight-loss/id-upload?returnUrl=${encodeURIComponent(returnUrl)}&questionId=${idUploadNodeId}&nextQuestionId=${selfieUploadNodeId}`);
                            } else if (idUploadNodeId) {
                              // Fallback: just navigate to ID upload if we can't find selfie node
                              router.push(`/consultation/weight-loss/id-upload?questionId=${idUploadNodeId}&nextQuestionId=`);
                            } else {
                              // Last resort: navigate without params
                              router.push('/consultation/weight-loss/id-upload');
                            }

                            // Set patient to waiting
                            const userInfoStr = sessionStorage.getItem('loginInfo');
                            const userInfo = userInfoStr ? JSON.parse(userInfoStr) : null;
                            axios.put(API_ENDPOINTS.PATIENTS.PUT_WAITING(userInfo.patientId));

                            // Create order
                            const checkoutInfoStr = sessionStorage.getItem('checkoutProduct');
                            const checkoutInfo = checkoutInfoStr ? JSON.parse(checkoutInfoStr) : null;
                            const data = {
                              patientId: userInfo.patientId,
                              productId: checkoutInfo.productId,
                              productVariantId: checkoutInfo.variantId
                            }
                            axios.post(API_ENDPOINTS.ORDERS.CREATE, data);
                          }}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold"
                        >
                          Pay £{selectedProduct.price && (selectedProduct.price + 5.95).toFixed(2)} →→
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="space-y-4 mb-8">
                  {/* Special layout for medical conditions questions */}
                  {(currentQuestion.question.toLowerCase().includes('diagnosed') ||
                    currentQuestion.question.toLowerCase().includes('weight-related')) ? (
                    <div className="space-y-4">
                      {/* Medical conditions list - shown for both Yes and No */}
                      {questionIncludesDiagnosed && diagnosedConditionsList && diagnosedConditionsList.length > 0 && (
                        <div>
                          {/* Medical conditions list */}
                          <div className="text-sm text-gray-700 space-y-1 mb-4">
                            {diagnosedConditionsList.map((condition, index) => (
                              <div key={index} className="py-1">
                                {condition}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Yes/No options for medical conditions */}
                      {currentQuestion.options.map((option, index) => {
                        const isSelected = answers.some(a => a.questionId === currentQuestionId && a.selectedAnswer === option);

                        return (
                          <label
                            key={index}
                            className={`flex items-center space-x-4 p-4 border border-gray-200 rounded-lg cursor-pointer transition-colors group ${isSelected ? 'bg-green-100 border-green-200' : 'hover:bg-gray-50'
                              }`}
                          >
                            <input
                              type="radio"
                              name={`question-${currentQuestionId}`}
                              value={option}
                              checked={isSelected}
                              onChange={() => handleOptionSelect(option)}
                              className="w-5 h-5 text-green-500"
                            />
                            <span className={`flex-1 ${isSelected ? 'text-gray-800' : 'text-gray-700'}`}>
                              {option}
                            </span>
                            {isSelected && (
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center ml-2">
                                <span className="text-white text-sm">✓</span>
                              </div>
                            )}
                          </label>
                        );
                      })}

                      {/* Please specify input - only for "Yes" selection */}
                      {questionIncludesDiagnosed && currentQuestionId && answerYes && (
                        <div className="mt-4 space-y-3">
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-center space-x-2">
                            <span className="text-yellow-600 text-lg">!</span>
                            <span className="text-yellow-800 text-sm font-medium">Please specify</span>
                          </div>
                          <textarea
                            value={questionIncludesWeightRelated ? weightConditionsDetails : medicalConditionsDetails}
                            onChange={(e) => questionIncludesWeightRelated ? setWeightConditionsDetails(e.target.value) : setMedicalConditionsDetails(e.target.value)}
                            placeholder={questionIncludesWeightRelated ? "Please provide details about your weight-related conditions..." : "Please provide details about your medical conditions..."}
                            className="w-full p-4 border border-gray-200 rounded-lg resize-none h-24 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            rows={3}
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Regular layout for all other questions */
                    <>
                      {currentQuestion.options.map((option, index) => {
                        const isSelected = answers.some(a => a.questionId === currentQuestionId && a.selectedAnswer === option);
                        const isEthnicityQuestion = currentQuestion.question.toLowerCase().includes('ethnic');
                        const shouldShowInfoIcon = isEthnicityQuestion && option !== "Not listed";

                        return (
                          <label
                            key={index}
                            className={`flex items-center space-x-4 p-4 border border-gray-200 rounded-lg cursor-pointer transition-colors group ${isSelected ? 'bg-green-100 border-green-200' : 'hover:bg-gray-50'
                              }`}
                          >
                            <input
                              type="radio"
                              name={`question-${currentQuestionId}`}
                              value={option}
                              checked={isSelected}
                              onChange={() => handleOptionSelect(option)}
                              className="w-5 h-5 text-green-500"
                            />
                            <span className={`flex-1 ${isSelected ? 'text-gray-800' : 'text-gray-700'}`}>
                              {option}
                            </span>
                            {shouldShowInfoIcon && (
                              <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">i</span>
                              </div>
                            )}
                            {isSelected && (
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center ml-2">
                                <span className="text-white text-sm">✓</span>
                              </div>
                            )}
                          </label>
                        );
                      })}

                      {/* Conditional input for pregnancy question */}
                      {questionIncludesPregnant &&
                        answerYes && (
                          <div className="mt-4 space-y-3">
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-center space-x-2">
                              <span className="text-yellow-600 text-lg">!</span>
                              <span className="text-yellow-800 text-sm font-medium">Please specify</span>
                            </div>
                            <textarea
                              value={pregnancyDetails}
                              onChange={(e) => setPregnancyDetails(e.target.value)}
                              placeholder="Please provide details..."
                              className="w-full p-4 border border-gray-200 rounded-lg resize-none h-24 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                              rows={3}
                            />
                          </div>
                        )}

                      {/* Conditional input for ethnicity question */}
                      {questionIncludesEthnic &&
                        answerNotListed && (
                          <div className="mt-4 space-y-3">
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-center space-x-2">
                              <span className="text-yellow-600 text-lg">!</span>
                              <span className="text-yellow-800 text-sm font-medium">Please specify</span>
                            </div>
                            <textarea
                              value={ethnicityDetails}
                              onChange={(e) => setEthnicityDetails(e.target.value)}
                              placeholder="Please provide details..."
                              className="w-full p-4 border border-gray-200 rounded-lg resize-none h-24 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                              rows={3}
                            />
                          </div>
                        )}

                      {/* Conditional warning for contraception question */}
                      {questionIncludesContraception &&
                        answerNo && (
                          <div className="mt-4">
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                              <div className="flex items-start space-x-2">
                                <span className="text-yellow-600 text-lg mt-0.5">!</span>
                                <div className="text-yellow-800 text-sm leading-relaxed">
                                  Weight loss treatment is not recommended during pregnancy, and it is crucial to prevent unintended pregnancies while on this medication. Effective contraceptive use ensures that individuals on Weight loss treatment can focus on their health and weight management goals without the added concern of pregnancy, which may not be advisable due to the potential risks associated with the medication during pregnancy. If you need more information about this, please get in touch and read the information provided with any orders.
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                      {/* Conditional message for exercise question */}
                      {questionIncludesExercise &&
                        (answerNone || answerLessThanHour) && (
                          <div className="mt-4">
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                              <div className="flex items-start space-x-2">
                                <span className="text-yellow-600 text-lg mt-0.5">!</span>
                                <div className="text-yellow-800 text-sm leading-relaxed">
                                  It is recommended that patients prescribed weight loss treatment incorporate a comprehensive approach to manage their health, which includes maintaining a balanced diet, engaging in regular physical activity, and adopting a healthy lifestyle. To optimise the therapeutic benefits of weight loss treatment, we advise patients to undertake at least 150 minutes of moderate-intensity exercise per week.
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                      {/* Conditional message for diet question */}
                      {questionIncludesDiet &&
                        !answerMostlyHealthy &&
                        hasAnswer && (
                          <div className="mt-4">
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                              <div className="flex items-start space-x-2">
                                <span className="text-yellow-600 text-lg mt-0.5">!</span>
                                <div className="text-yellow-800 text-sm leading-relaxed">
                                  Acknowledging dietary challenges is crucial for your health improvement. To complement your treatment with medications, adopting a balanced diet and reducing calorie intake are essential steps. We suggest starting with manageable changes: increase fruits and vegetables, opt for whole grains, include lean proteins, and importantly, reduce processed foods and sugary snacks. Cutting down on portion sizes and avoiding high-calorie meals can significantly contribute to your overall calorie reduction. Our team is prepared to offer further guidance and connect you with a health professional for personalised advice.
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                      {/* Conditional input for weight loss treatment question */}
                      {questionIncludesPreviously &&
                        !answerNever &&
                        hasAnswer && (
                          <div className="mt-4 space-y-3">
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-start space-x-2">
                              <span className="text-yellow-600 text-lg">!</span>
                              <div className="text-yellow-800 text-sm">
                                Could you please share with us when you first started taking this medication, how long you&apos;ve been using it, and the last time you took it? It helps us understand your treatment history better.
                              </div>
                            </div>
                            <textarea
                              value={treatmentHistoryDetails}
                              onChange={(e) => setTreatmentHistoryDetails(e.target.value)}
                              placeholder="Please provide details about your weight loss treatment history..."
                              className="w-full p-4 border border-gray-200 rounded-lg resize-none h-24 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                              rows={3}
                            />
                          </div>
                        )}

                      {/* Conditional input for allergy question */}
                      {questionIncludesAllergy &&
                        answerYes && (
                          <div className="mt-4 space-y-3">
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-center space-x-2">
                              <span className="text-yellow-600 text-lg">!</span>
                              <span className="text-yellow-800 text-sm font-medium">Please specify</span>
                            </div>
                            <textarea
                              value={allergyDetails}
                              onChange={(e) => setAllergyDetails(e.target.value)}
                              placeholder="Please provide details about your allergies..."
                              className="w-full p-4 border border-gray-200 rounded-lg resize-none h-24 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                              rows={3}
                            />
                          </div>
                        )}

                      {/* Conditional input for medication question */}
                      {questionIncludesMedication &&
                        answerYes && (
                          <div className="mt-4 space-y-3">
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-center space-x-2">
                              <span className="text-yellow-600 text-lg">!</span>
                              <span className="text-yellow-800 text-sm font-medium">Please specify</span>
                            </div>
                            <textarea
                              value={medicationDetails}
                              onChange={(e) => setMedicationDetails(e.target.value)}
                              placeholder="Please provide details about your medications..."
                              className="w-full p-4 border border-gray-200 rounded-lg resize-none h-24 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                              rows={3}
                            />
                          </div>
                        )}
                    </>
                  )}
                </div>
              )}

              {/* Navigation Buttons - Hidden for prices and checkout pages */}
              {!currentQuestion.isPricesPage && !currentQuestion.isCheckoutPage && (
                <div className="flex justify-between items-center pt-6">
                  <button
                    onClick={handlePrevious}
                    disabled={questionHistory.length <= 1 && !(currentQuestion.componentType === 3 && loginStep === 2)}
                    className="px-6 py-2 text-gray-600 disabled:text-gray-300 disabled:cursor-not-allowed hover:text-gray-800 transition-colors flex items-center space-x-1"
                  >
                    {currentQuestion.isTermsPage ? (
                      <>
                        <ChevronRight size={16} className="rotate-180" />
                        <span>Go back to questions</span>
                      </>
                    ) : (
                      <>
                        <ChevronRight size={16} className="rotate-180" />
                        <span>Previous</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={!isAnswered}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                  >
                    <span>{currentQuestion.isTermsPage ? 'Submit' : 'Next'}</span>
                    {!currentQuestion.isTermsPage && (
                      <ChevronRight size={16} />
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Simple Footer - Positioned at bottom */}
      <div className="bg-white py-8 text-center mt-auto">
        <p className="text-sm text-gray-600">
          Copyright MediTrue 2025
        </p>
      </div>
    </main>
  );
}
