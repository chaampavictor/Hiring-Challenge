import { combineReducers } from "redux";
import { studentReducer } from "./student";
import { resultReducer } from "./results";

const rootReducer = combineReducers({
    resultReducer,
    studentReducer
})

export default rootReducer;
