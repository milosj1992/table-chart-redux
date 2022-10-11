import _ from 'lodash';
import{
    FETCH_RENTS,
    FETCH_RENT,
    CREATE_RENT,
    EDIT_RENT,
    DELETE_RENT
} from "../actions/types";

export default (state={},action)=>{
    switch (action.type){
        case FETCH_RENTS:
            return{...state, ..._.mapKeys(action.payload, 'id')}
        case FETCH_RENT:
            return{...state, [action.payload.id]: action.payload}
        case CREATE_RENT:
            return{...state, [action.payload.id]: action.payload}
        case EDIT_RENT:
            return{...state, [action.payload.id]: action.payload}
        case DELETE_RENT:
            return _.omit(state, action.payload);
        default:
            return state;
    }

}
