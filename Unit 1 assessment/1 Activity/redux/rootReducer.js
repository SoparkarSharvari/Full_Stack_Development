import cakeReducer from "./cake/cakeReducer";
import icecreamReducer from "./iceCream/icecreamReducer";
import {combineReducers} from "redux";
import customerReducer from "./customers/customerReducer";

const rootReducer = combineReducers({
    cake:cakeReducer,
    icecream:icecreamReducer,
    // customer:customerReducer
})
export default rootReducer