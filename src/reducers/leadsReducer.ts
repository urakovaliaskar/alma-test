import { AnyAction } from 'redux';

interface LeadsState {
    leads: {
        firstName: string;
        lastName: string;
        email: string;
        linkedInProfile: string;
        visasOfInterest: string[];
        resume: File | null;
        additionalInformation: string;
        status: string;
    }[]; // Replace `any` with a specific type if available
    loading: boolean;
    error: string | null;
}

const initialState: LeadsState = {
    leads: [],
    loading: false,
    error: null,
};

const leadsReducer = (state = initialState, action: AnyAction): LeadsState => {
    switch (action.type) {
        case 'FETCH_LEADS_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'FETCH_LEADS_SUCCESS':
            return {
                ...state,
                loading: false,
                leads: action.payload,
            };
        case 'FETCH_LEADS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default leadsReducer;