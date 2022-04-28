
import {userAPI} from '../Api/Api'
import {authAPI} from '../Api/Api'

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
                ...action.data,
                isAuth: true
            }
       
        default:
            return state
    }
}

//export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const SetAuthUserData= (id,email,login) => ({ type: SET_USER_DATA, data:{id,email,login} });
const SET_USER_DATA = 'SET_USER_DATA';
//const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

 export const GetAuthUserData=()=>{
    return (dispatch) => {
        authAPI.me().
        then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(SetAuthUserData(id, email, login))
            }
    })
    }}
    export default authReducer; 