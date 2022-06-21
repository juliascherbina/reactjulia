
import { securityAPI, userAPI } from '../Api/Api'
import { authAPI } from '../Api/Api'
import { stopSubmit } from 'redux-form'

let InitialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
    //  isFetching: false
}
const authReducer = (state = InitialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
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
export const GetCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl }
});
const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS';
//const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

export const GetAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()
    if (response.resultCode === 0) {
        let { id, email, login } = response.data;
        dispatch(SetAuthUserData(id, email, login, true))
    }
}


export const loginApi = (email, password, rememberMe,captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.resultCode === 0) {
        dispatch(GetAuthUserData())
    }
    else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        else {
            let message = response.messages.length > 0 ? response.data.messages[0] : 'some error';
            dispatch(stopSubmit('login', { _error: message }))
        }
    }
}
export const getCaptchaUrl = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl()
    let captchaUrl = response.url
    dispatch(GetCaptchaUrlSuccess(captchaUrl))
}



export const loginOut = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(SetAuthUserData(null, null, null, false))
    }

}


export default authReducer; 