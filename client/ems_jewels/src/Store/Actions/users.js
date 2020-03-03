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

export default {
    getUsers,
}