

let InitialState = {
    Message: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'How is your sister?' },
        { id: 4, message: 'How is your sister?' },
        { id: 5, message: 'How is your sister?' }
    ],
  
    dialogs: [
        { id: 1, name: 'Julia' },
        { id: 2, name: 'Toxa' },
        { id: 3, name: 'Andrey' },
        { id: 4, name: 'Olga' },
        { id: 5, name: 'Svetlana' }],

}
const dialogReducer = (state = InitialState, action) => {

    switch (action.type) {
      


        case sendMessage:
            let body = action.newMessageText;
            return {
                ...state,
                Message: [...state.Message, { id: 6, message: body }],
                
            }


        default:
            return state
    }
}

const sendMessage = 'addMessage';

export const sendMessageCreator = (newMessageText) => ({ type: sendMessage,newMessageText})

export default dialogReducer