/**
 * Global API configuration
 */

// Base URL for the backend API
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3090";

// API version
export const API_VERSION = "v1";

// Full API base URL with version
export const API_URL = `${API_BASE_URL}/${API_VERSION}`;

// Common API endpoints
export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: `${API_URL}/auth/login`,
        SIGNUP: `${API_URL}/auth/signup`,
        GOOGLE: `${API_URL}/auth/google`,
        REFRESH: `${API_URL}/auth/refresh`,
        LOGOUT: `${API_URL}/auth/logout`,
        ME: `${API_URL}/auth/me`,
    },
    PATIENTS: {
        LIST: `${API_URL}/patients`,
        CREATE: `${API_URL}/patients`,
        GET_BY_EMAIL: (email: string) => `${API_URL}/patients/email/${email}`,
        GET_ONE: (id: string) => `${API_URL}/patients/${id}`,
        UPDATE: (id: string) => `${API_URL}/patients/${id}`,
        DELETE: (id: string) => `${API_URL}/patients/${id}`,
        PUT_PROCESSING: (id: string) => `${API_URL}/patients/${id}/processing`,
        PUT_WAITING: (id: string) => `${API_URL}/patients/${id}/waiting`,
        UPLOAD_PHOTO: (id: string) => `${API_URL}/patients/${id}/upload-photo`,
    },
    ORDERS: {
        LIST: `${API_URL}/orders`,
        CREATE: `${API_URL}/orders`,
        UPDATE: (id: string) => `${API_URL}/orders/${id}`,
        DELETE: (id: string) => `${API_URL}/orders/${id}`,
    },
    TREATMENTS: {
        LIST: `${API_URL}/treatments`,
        CREATE: `${API_URL}/treatments`,
        GET_ONE: (id: string) => `${API_URL}/treatments/${id}`,
        UPDATE: (id: string) => `${API_URL}/treatments/${id}`,
        DELETE: (id: string) => `${API_URL}/treatments/${id}`,
        STATS: `${API_URL}/treatments/stats`,
    },
    PRODUCTS: {
        LIST: `${API_URL}/products`,
        GET_DRUGNAME: (drugName: string) => `${API_URL}/products/search/drug-name/${drugName}`,
        CREATE: `${API_URL}/products`,
        UPDATE: `${API_URL}/products/update`,
        GET_ONE: (id: string | number) => `${API_URL}/products/${id}`,
        DELETE: (id: string) => `${API_URL}/products/${id}`,
    },
    PRODUCT_VARIANTS: {
        FIND_ALL: (productId: number) => `${API_URL}/product-variants?productId=${productId}`,
        CREATE: `${API_URL}/product-variants`,
        GET_ONE: (id: string) => `${API_URL}/product-variants/${id}`,
        UPDATE: (id: string) => `${API_URL}/product-variants/${id}`,
        DELETE: (id: string) => `${API_URL}/product-variants/${id}`,
    },
    QUESTIONNAIRES: {
        LIST: `${API_URL}/questionnaires`,
        CREATE: `${API_URL}/questionnaires`,
        UPDATE: (id: string) => `${API_URL}/questionnaires/${id}`,
        DELETE: (id: string) => `${API_URL}/questionnaires/${id}`,
    },
    BILLING_PLANS: {
        LIST: `${API_URL}/billing-plans`,
        CREATE: `${API_URL}/billing-plans`,
        UPDATE: (id: string) => `${API_URL}/billing-plans/${id}`,
        DELETE: (id: string) => `${API_URL}/billing-plans/${id}`,
    },
    PATIENT_QAS: {
        LIST: `${API_URL}/patient-qas`,
        CREATE: `${API_URL}/patient-qas`,
        UPDATE: (id: string) => `${API_URL}/patient-qas/${id}`,
        DELETE: (id: string) => `${API_URL}/patient-qas/${id}`,
    },
} as const;
