import rents from "../../apis/rents"
import {
    FETCH_RENTS,
    FETCH_RENT,
    CREATE_RENT,
    EDIT_RENT,
    DELETE_RENT
} from "./types";

export const fetchRents = () => async dispatch => {
    const response = await rents.get('/');

    dispatch({type: FETCH_RENTS, payload: response.data});
}
export const fetchRent = (id) => async dispatch => {
    const response = await rents.get(`/${id}`);

    dispatch({type: FETCH_RENT, payload: response.data});
}
export const createRent = (values) => async dispatch => {
    const response = await rents.post(`/`, values);

    dispatch({type: CREATE_RENT, payload: response.data});
}
export const editRent = (id, values) => async dispatch => {
    const response = await rents.put(`/${id}`, values);

    dispatch({type: EDIT_RENT, payload: response.data});
}
export const deleteRent = (id) => async dispatch => {
    await rents.delete(`/${id}`,);

    dispatch({type: DELETE_RENT, payload: id});
}


