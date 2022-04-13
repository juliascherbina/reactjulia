

let InitialState= {
    Posts: [
        { id: 1, message: 'Hi how are you?', likes: 12 },
        { id: 2, message: 'It\'s  my first post', likes: 20 },
        { id: 2, message: 'It\'s  my 6y8t68568 post', likes: 20 },
        { id: 2, message: 'It\'s  t8t895678 first post', likes: 20 }],
    textPost: 'it-kamasutra'
}
const profileReducer = (state=InitialState, action) => {
    
    switch (action.type) {
        case AddPost: let newPost = {
            id: 5,
            message: state.textPost,
            likes: 0
        };
            state.Posts.push(newPost)
            state.textPost = ''

            return state;
        case NewText: state.textPost = action.newText
        return state
        default:
            return state
    }
}
const AddPost = 'AddPost';
const NewText = 'NewPostText';
export const addPostActionCreator = () => ({ type: AddPost })
export const NewPostText = (text) => ({ type: NewText, newText: text })
export default profileReducer;