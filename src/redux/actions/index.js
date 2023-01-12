import {apiRents} from '../../api';

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
} from "./types"

export const fetchItems = () => async dispatch => {
    try {
        dispatch({type: FETCH_ITEMS_REQUEST});
        const items =  await apiRents.get('/');
        dispatch({type: FETCH_ITEMS_SUCCESS, payload: items});
    } catch (error) {
        dispatch({type: FETCH_ITEMS_FAILURE, payload: error});
    }
};

export const addNewItem = item => async dispatch => {
    try {
        dispatch({type: ADD_ITEM_REQUEST});
        await apiRents.post(`/`, item)
        dispatch({type: ADD_ITEM_SUCCESS, payload: item});
    } catch (error) {
        dispatch({type: ADD_ITEM_FAILURE, payload: error});
    }
}

export const updateExistItem = (id, item) => async dispatch => {
    try {
        dispatch({type: UPDATE_ITEM_REQUEST});
        const response= await apiRents.put(id, item);
        dispatch({type: UPDATE_ITEM_SUCCESS, payload: response.data});
    } catch (error) {
        dispatch({type: UPDATE_ITEM_FAILURE, payload: error});
    }
};

export const removeItem = id => async dispatch => {
    try {
        dispatch({type: DELETE_ITEM_REQUEST});
        await apiRents.delete(id);
        dispatch({type: DELETE_ITEM_SUCCESS, payload: id});
    } catch (error) {
        dispatch({type: DELETE_ITEM_FAILURE, payload: error});
    }
};
