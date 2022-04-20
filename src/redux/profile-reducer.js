

let InitialState = {
    Posts: [
        { id: 1, message: 'Hi how are you?', likes: 12 },
        { id: 2, message: 'It\'s  my first post', likes: 20 },
        { id: 2, message: 'It\'s  my 6y8t68568 post', likes: 20 },
        { id: 2, message: 'It\'s  t8t895678 first post', likes: 20 }],
    textPost: 'it-kamasutra',
    profile:null
}
const profileReducer = (state = InitialState, action) => {

    switch (action.type) {
        case AddPost:
            let newPost = {
                id: 5,
                message: state.textPost,
                likes: 0
            };
            return {
                ...state,
                Posts: [...state.Posts, newPost],
                textPost: ''
            }
        case NewText:
            return {
                ...state,
                textPost: action.NewText
            }
        case SET_USER_PROFILE:
            return {...state, profile:action.profile}
        default:
            return state
    }
}
const AddPost = 'AddPost';
const NewText = 'NewPostText';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const addPostActionCreator = () => ({ type: AddPost })
export const NewPostText = (text) => ({ type: NewText, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export default profileReducer;