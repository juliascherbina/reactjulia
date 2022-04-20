

let InitialState = {
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

}
const dialogReducer = (state = InitialState, action) => {

    switch (action.type) {
        case new_MesageText:
            return {
                ...state,
                Message: [...state.Message],
                newMesageText: action.body
            }


        case sendMessage:
            let body = state.newMesageText;
            return {
                ...state,
                Message: [...state.Message, { id: 6, message: body }],
                newMesageText: ''
            }


        default:
            return state
    }
}

const sendMessage = 'addMessage';
const new_MesageText = 'NewPostBody';
export const sendMessageCreator = () => ({ type: sendMessage })
export const updateMessageCreator = (body) => ({ type: new_MesageText, body: body })
export default dialogReducer