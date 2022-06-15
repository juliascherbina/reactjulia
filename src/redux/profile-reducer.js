
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
        case DELETE_POST: {
            return { ...state, Posts: state.Posts.filter(p => p.id != action.postid) }
        }
        case SAVE_PHOTO_SUCCESS: {
            return { ...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state

    }

}
const AddPost = 'AddPost';
//const NewText = 'NewPostText';
const SET_STATUS = 'SET_STATUS';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'
export const addPostActionCreator = (NewPost) => ({ type: AddPost, NewPost })
//export const NewPostText = (text) => ({ type: NewText, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const deletePost = (postid) => ({ type: DELETE_POST, postid })
export const SetStatus = (status) => ({ type: SET_STATUS, status })
export const SavePtotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })
export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let response = await ProfileAPI.getProfile(userId)
        dispatch(setUserProfile(response));
    }
}
export const GetStatus = (userId) => {
    return async (dispatch) => {
        let response = await ProfileAPI.getStatus(userId)
        dispatch(SetStatus(response));
    }
}
export const UpdateStatus = (status) => {
    return async (dispatch) => {
        let response = await ProfileAPI.UpdateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(SetStatus(status));
        }
    }
}
export const savePhoto = (file) => {
    return async (dispatch) => {
        let response = await ProfileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(SavePtotoSuccess(response.data.data.photos));
        }
    }
}
export const saveProfile = (file) => {
    return async (dispatch) => {
        let response = await ProfileAPI.saveProfile(file)
        if (response.data.resultCode === 0) {
            dispatch(SavePtotoSuccess(response.data.data.photos));
        }
    }
}
export default profileReducer;