
let store = {
    _state: {
        profilePage: {
            Posts: [
                { id: 1, message: 'Hi how are you?', likes: 12 },
                { id: 2, message: 'It\'s  my first post', likes: 20 },
                { id: 2, message: 'It\'s  my 6y8t68568 post', likes: 20 },
                { id: 2, message: 'It\'s  t8t895678 first post', likes: 20 }],
            textPost: 'it-kamasutra'
        },
        dialogsPage: {
            Message: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'How is your sister?' },
                { id: 4, message: 'How is your sister?' },
                { id: 5, message: 'How is your sister?' }
            ],
            newMesageText: '',
            dialogs: [
                { id: 1, name: 'Julia' },
                { id: 2, name: 'Toxa' },
                { id: 3, name: 'Andrey' },
                { id: 4, name: 'Olga' },
                { id: 5, name: 'Svetlana' }],

        },
        sidebar: {
            myfriends: [
                { id: 1, name: 'Julia' },
                { id: 2, name: 'Svetlana' },
                { id: 3, name: 'Toxa' }],
        },
    },
    getState() {
        return this._state
    },
    _RenderEntireTree() {
        console.log('state is changed')
    },


    subscribe(observer) {
        this._RenderEntireTree = observer
    },
    dispatch(action) {
        if (action.type === AddPost) {

            let newPost = {
                id: 5,
                message: this._state.profilePage.textPost,
                likes: 0
            };

            this._state.profilePage.Posts.push(newPost)
            this._state.profilePage.textPost = ''
            this._RenderEntireTree(this._state);

        }
        else if (action.type === NewText) {
            this._state.profilePage.textPost = action.newText
            this._RenderEntireTree(this._state);

        }
        else if (action.type === new_MesageText) {
            this._state.dialogsPage.newMesageText=action.body
            this._RenderEntireTree(this._state);
        }
        else if (action.type === sendMessage) {
            let body=this._state.dialogsPage.newMesageText;
            this._state.dialogsPage.newMesageText=''
            this._state.dialogsPage.Message.push( { id: 6, message:body })
            this._RenderEntireTree(this._state);
        }
    }
}
const AddPost = 'AddPost';
const NewText = 'NewPostText';
const sendMessage = 'addMessage';
const new_MesageText = 'NewPostBody'
export const addPostActionCreator = () => ({ type: AddPost })
export const NewPostText = (text) => ({ type: NewText, newText: text })
export const sendMessageCreator = () => ({ type: sendMessage })
export const updateMessageCreator = (body) => ({ type: new_MesageText, body: body })
export default store;
