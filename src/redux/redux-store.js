import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer ";
import  thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import AppReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    usersPage: usersReducer,
    form: formReducer,
    app: AppReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store=store;

export default store