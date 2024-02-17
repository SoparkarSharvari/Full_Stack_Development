// const redux = require('redux')
// const createStore = redux.legacy_createStore 
// const { applyMiddleware } = require('redux');
// const logger = require('redux-logger');

// console.log('From index.js');

// const BUY_CAKE = "BUY_CAKE";
// const BUY_ICECREAM = "BUY_ICECREAM";

// //Action creator
// function buyCake(){
//     //action
//     return{
//         type:BUY_CAKE,
//         info:'first reduc action'
//     }
// }
// function buyIceCream(){
//     //action
//     return{
//         type:BUY_ICECREAM,
//         info:'Second reduc action'
//     }
// }

// // const initialState ={
// //     numOfCakes :10,
// //     numOfIcecream:20
// // }

// const initialStatecake ={
//     numOfCakes :10
// }
// const initialStateIceCream ={
//     numOfIcecream:20
// }

// //create reducer
// // const reducer =(state=initialState,action)=>{
// //     switch(action.type){
// //         case BUY_CAKE :return{
// //             ...state,
// //             numOfCakes :state.numOfCakes -1
// //         }
// //         case BUY_ICECREAM :return{
// //             ...state,
// //             numOfIcecream :state.numOfIcecream -1
// //         }
// //         default:return state
// //     }
// // }

// //two seperate reducer
// const cakeReducer =(state=initialStatecake,action)=>{
//     switch(action.type){
//         case BUY_CAKE :return{
//             ...state,
//             numOfCakes :state.numOfCakes -1
//         }
        
//         default:return state
//     }
// }

// const iceCreamReducer =(state=initialStateIceCream,action)=>{
//     switch(action.type){
        
//         case BUY_ICECREAM :return{
//             ...state,
//             numOfIcecream :state.numOfIcecream -1
//         }
//         default:return state
//     }
// }

// //combining reducer 
// const rootReducer = redux.combineReducers({
//     cake: cakeReducer,
//     iceCream: iceCreamReducer
// });

// //middleware
// // const loggingMiddleware = (store) => (next) => (action) => {
// //     console.log('Action:', action.type);
// //     console.log('Payload:', action.payload);
// //     return next(action);
// //   };
// //   export default loggingMiddleware;


// const store = createStore(
//   rootReducer,
//   applyMiddleware(logger)
// )
// //subscribe store and dispatch action 

// // const store = createStore(rootReducer);
// console.log('initial state ', store.getState());
// store.subscribe(()=>console.log('Updated store ', store.getState()));
// store.dispatch(buyIceCream());
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());

const redux = require('redux');
const createStore = redux.legacy_createStore 

//to genrate the log that gives the initial , previous and updated state 
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger()

console.log('From index.js');

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// Action creators
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'first reduc action'
    };
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'Second reduc action'
    };
}

// Initial states
const initialStateCake = {
    numOfCakes: 10
};

const initialStateIceCream = {
    numOfIcecream: 20
};

// Reducers
const cakeReducer = (state = initialStateCake, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            };
        default:
            return state;
    }
};

const iceCreamReducer = (state = initialStateIceCream, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIcecream: state.numOfIcecream - 1
            };
        default:
            return state;
    }
};

// Combine reducers
const rootReducer = redux.combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

// Middleware
const store = createStore(
    rootReducer,
    applyMiddleware(logger)//we can apply multiple middleware
    
);

// Subscribe store (excute only when ) and dispatch actions
console.log('initial state ', store.getState());
// store.subscribe(() => console.log('Updated store ', store.getState()));
store.dispatch(buyIceCream());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());