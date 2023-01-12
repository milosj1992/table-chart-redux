import {combineReducers} from 'redux';

import rentReducer from "./rentReducer";

export default combineReducers({
    rents: rentReducer
});
