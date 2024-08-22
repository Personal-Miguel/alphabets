import {combineReducers} from "redux";
import memReducer from "./memReducer";

const rootReducer = combineReducers({mem: memReducer});

export default rootReducer
