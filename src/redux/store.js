import dialogReducer from "./dialog-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._RenderEntireTree(this._state);
    }
}
export default store;
