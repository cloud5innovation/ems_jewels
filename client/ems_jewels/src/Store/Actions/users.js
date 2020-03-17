import {authTypes} from './actionTypes';
import axios from 'axios';
import url from './../../axios';

export const getUsers = () => dispatch => {
    dispatch ({
        type: authTypes.AUTH_START
    })
    axios.get(`http://localhost:5000/users`)
        .then(res => {
            console.log(res.data, 'res.data.users')
            dispatch({
                type: authTypes.AUTH_SUCCESS,
                payload: res.data
            })
        })
            .catch( err => {
                dispatch({
                    type: authTypes.AUTH_FAIL,
                    payload: err
                })
            })
};

export const initOauth = user => dispatch => {
    dispatch ({
        type: authTypes.AUTH_START
    })

    axios.defaults.headers.common["Authorization"] = user.ftoken;

    axios.get(`http://localhost:5000/users`)
    .then(res => {
        dispatch({
            type: authTypes.AUTH_SUCCESS,
            payload: res.data
        })
    })
    .catch( err => {
        dispatch({
            type: authTypes.AUTH_FAIL,
            payload: err
        })
    })
}
export const register = (user) => dispatch => {
    dispatch({
        type: authTypes.REGISTER_START
    })
    axios.defaults.headers.common['Authorization'] = user.ra
    axios
        .post(`/users/register`, user )
        .then(res => {
            // console.log(res.data.user.id, 'in register action')
            const payload = {
                ...res.data,
                ...user
            }
            dispatch({
                type: authTypes.REGISTER_SUCCESS,
                payload: payload
            })

        })
        .catch(err => {
            dispatch({
                type: authTypes.REGISTER_FAIL,
                payload: err
            })
        })
}

export default {
    getUsers,
    register,
    initOauth
}