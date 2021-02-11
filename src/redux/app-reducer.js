import {headerAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {resetUserData} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED'


const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }

}





const initializedSucces = () => ({
        type: SET_INITIALIZED
    });


export const initializeApp =() => (dispatch) => {
    let promise = dispatch(resetUserData());

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSucces());
        })

};



export default appReducer;


