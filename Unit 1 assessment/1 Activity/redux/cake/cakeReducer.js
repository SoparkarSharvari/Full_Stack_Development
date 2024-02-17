import { BUY_CAKE } from "./cakeTypes";

const initialStateCake ={
    numOfCakes :10,
}

const cakeReducer = (state = initialStateCake, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            };
        default:
            return state;
    }
};
export default cakeReducer