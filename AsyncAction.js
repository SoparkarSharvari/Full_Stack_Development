const redux = require('redux');
const createStore = redux.legacy_createStore 
const {thunk} =require('redux-thunk')
const axios = require('axios')

//thunk middleware 
//returns a function
console.log('From AsyncAction.js');

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

initialState = {
    loading : false,
    data:[],
    error:''
}

function fetchUsersRequest() {
    return {
        type: FETCH_USER_REQUEST,
        info: '1 reducer action'
    };
}

function fetchUsersFailure (error) {
    return {
        type: FETCH_USER_FAILURE,
        payload :error,
        info: '2 reducer action'
    };
}

function fetchUsersSuccess (users){
    return {
        type: FETCH_USER_SUCCESS,
        payload : users,
        info: '3 reducer action'
    };
}

const reducer =(state = initialState , action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading:true
            };
            case FETCH_USER_SUCCESS:
            return {
                loading:false,
                users:action.payload,
                error:''
            };
            case FETCH_USER_FAILURE:
            return {
                loading:false,
                users:[],
                error:action.payload
            };
        default:
            return state;
    }
}

const fetchUsers =()=>{
    return function(dispatch){
        axios.get('https://jsonplaeholder.typicode.com/users')
        .then(response => {
            const users = response.data.map(user => user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error=>{
            dispatch(fetchUsersFailure(error.message))
        })
    }
}

const store = redux.createStore(reducer,redux.applyMiddleware(thunk));
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())