import {
    FETCH_ITEMS_REQUEST,
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_FAILURE,
    ADD_ITEM_REQUEST,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_FAILURE,
    UPDATE_ITEM_REQUEST,
    UPDATE_ITEM_SUCCESS,
    UPDATE_ITEM_FAILURE,
    DELETE_ITEM_REQUEST,
    DELETE_ITEM_SUCCESS,
    DELETE_ITEM_FAILURE
} from "../actions/types"

const initialState = {
    items: [],
    isLoading: false,
    hasError: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ITEMS_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_ITEMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: action.payload
            };
        case FETCH_ITEMS_FAILURE:
            return {
                ...state,
                isLoading: false,
                hasError: true
            };
        case ADD_ITEM_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case ADD_ITEM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: {[action.payload.id]: action.payload}
            };
        case ADD_ITEM_FAILURE:
            return {
                ...state,
                isLoading: false,
                hasError: true
            };
        case UPDATE_ITEM_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case UPDATE_ITEM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: {[action.payload.id]: action.payload}
            };
        case UPDATE_ITEM_FAILURE:
            return {
                ...state,
                isLoading: false,
                hasError: true
            };
        case DELETE_ITEM_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case DELETE_ITEM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: state.items.filter(item => item.id !== action.payload)
            };
        case DELETE_ITEM_FAILURE:
            return {
                ...state,
                isLoading: false,

            };
        default:
            return state;
    }
}

