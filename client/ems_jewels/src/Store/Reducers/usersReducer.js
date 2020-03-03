import { authTypes } from '../Actions/actionTypes.js';

const initialState = {
    user: [],
    loading: false,
    error: null
};

export default (state = initialState, actions) => {
   
    switch (actions.type) {
        case authTypes.AUTH_START:
            return {
                ...state,
                loading: true
            }
        case authTypes.AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                user: 
                    actions.payload
                
            }
  
            case authTypes.AUTH_FAIL:
                return {
                    ...state,
                    loading: false,
                    error: actions.payload
                }
            default:
            return state;
    };

  

}