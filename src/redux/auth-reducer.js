import {headerAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_IS_AUTH_FALSE = 'SET_IS_AUTH_FALSE';
const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: true
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        case SET_IS_AUTH_FALSE:
            return {
                ...state,
                isAuth: false,
            }
        default:
            return state;
    }

}




export const setAuthUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {
            id: userId,
            email: email,
            login: login,
        }
    }
}

const setIsAuthFalse = () => ({
        type: SET_IS_AUTH_FALSE
    });


export const resetUserData =() => (dispatch) => {
    headerAPI.getDataAuth().then(response => {
        if(response.data.resultCode === 0){
            dispatch(setAuthUserData(response.data.data.id,
                response.data.data.email,
                response.data.data.login));
        } else {
            dispatch(setIsAuthFalse());
        }
    });
};

export default authReducer;


