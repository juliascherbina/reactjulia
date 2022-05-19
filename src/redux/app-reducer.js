
import { userAPI } from '../Api/Api'
import { authAPI } from '../Api/Api'
import { stopSubmit } from 'redux-form'
import { GetAuthUserData } from './auth-reducer'

let InitialState = {
    initialized: false
}
const AppReducer = (state = InitialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED:

            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}

export const InitializedSuccess = () => ({
    type: SET_INITIALIZED
});
const SET_INITIALIZED = 'SET_INITIALIZED';

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(GetAuthUserData()); 
    Promise.all([promise])
    .then(() => {
         dispatch(InitializedSuccess()) })

}

export default AppReducer; 