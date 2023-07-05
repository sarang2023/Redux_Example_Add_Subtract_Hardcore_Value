import { combineReducers } from "redux";
import addNumbersReducer from './Reducer';

const rootreducer1=combineReducers({
    addNumbers:addNumbersReducer

})
export default rootreducer1;