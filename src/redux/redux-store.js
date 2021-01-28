import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./user-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    }
)



let store = createStore(reducers);
window.store = store;
export default store