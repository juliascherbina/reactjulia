
import { ProfileAPI, userAPI } from '../Api/Api'
let InitialState = {
    Posts: [
        { id: 1, message: 'Hi how are you?', likes: 12 },
        { id: 2, message: 'It\'s  my first post', likes: 20 },
        { id: 2, message: 'It\'s  my 6y8t68568 post', likes: 20 },
        { id: 2, message: 'It\'s  t8t895678 first post', likes: 20 }],
   // textPost: 'it-kamasutra',
    profile: null,
    status: ''
}
const profileReducer = (state = InitialState, action) => {

    switch (action.type) {
        case AddPost:
            let newPost = {
                id: 5,
                message: action.NewPost,
                likes: 0
            };
            return {
                ...state,
                Posts: [...state.Posts, newPost],
                //textPost: ''
            }
        // case NewText:
        //     return {
        //         ...state,
        //         textPost: action.NewText
        //     }
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
            
        case SET_STATUS:
            return { ...state, status: action.status }
        default:
            return state
    }
}
const AddPost = 'AddPost';
//const NewText = 'NewPostText';
const SET_STATUS = 'SET_STATUS';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const addPostActionCreator = (NewPost) => ({ type: AddPost, NewPost })
//export const NewPostText = (text) => ({ type: NewText, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const SetStatus = (status) => ({ type:SET_STATUS, status })
export const getUserProfile = (userId) => {
    return (dispatch) => {
        ProfileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
}
export const GetStatus = (userId) => {
    return (dispatch) => {
        ProfileAPI.getStatus(userId)
            .then(data => {
                dispatch(SetStatus(data));
            })
    }
}
export const UpdateStatus = (status) => {
    return (dispatch) => {
        ProfileAPI.UpdateStatus(status)
            .then(response => {
                if(response.data.resultCode===0){
                dispatch(SetStatus(status));}
            })
    }
}
export default profileReducer;