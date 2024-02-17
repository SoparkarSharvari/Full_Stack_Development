import {FETCH_USER_REQUEST,FETCH_USER_FAILURE,FETCH_USER_SUCCESS} from './customerTypes'
const axios = require('axios')


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

export const fetchUsers = ()=>{
    return (dispatch) =>{
        dispatch(fetchUsersRequest)
        return axios.getAdapter('http://localhost:5000/customers')
            .then((res)=>{
                dispatch(fetchUsersSuccess(res.data))
            }).catch((err)=>{
                dispatch(fetchUsersFailure(err.message))
            })
    }
}