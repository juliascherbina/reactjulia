
import { userAPI } from '../Api/Api'
import { authAPI } from '../Api/Api'
import { stopSubmit } from 'redux-form'

let InitialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
    //  isFetching: false
}
const authReducer = (state = InitialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}

//export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const SetAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: { id, email, login, isAuth }
});
const SET_USER_DATA = 'sanurei-network/auth/SET_USER_DATA';
//const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

export const GetAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()
    if (response.resultCode === 0) {
        let { id, email, login } = response.data;
        dispatch(SetAuthUserData(id, email, login, true))
    }
}


export const loginApi = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.resultCode === 0) {
        dispatch(GetAuthUserData())
    }
    else {
        let message = response.messages.length > 0 ? response.data.messages[0] : 'some error';
        dispatch(stopSubmit('login', { _error: message }))
    }
}



export const loginOut = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(SetAuthUserData(null, null, null, false))
    }

}

export default authReducer; 