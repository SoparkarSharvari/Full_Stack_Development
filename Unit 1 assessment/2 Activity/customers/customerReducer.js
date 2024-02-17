import {FETCH_USER_REQUEST,FETCH_USER_FAILURE,FETCH_USER_SUCCESS} from './customerTypes'
const axios = require('axios')

const initialState = {
    loading : false,
    data:[],
    error:''
}

//create Customer Reducer
const customerReducer =(state = initialState , action) => {
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

export default customerReducer