import React, { createRef } from 'react';
import { sendMessageCreator, updateMessageCreator } from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';

const DialogContainer = (props) => {
    let state = props.store.getState();
    let addtext = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (body) => {
        let action = updateMessageCreator(body);
        props.store.dispatch(action)
    }


    return <Dialogs updateMessageCreator={onNewMessageChange}
        sendMessageCreator={addtext}
        dialogsPage={state.dialogsPage} />
}
export default DialogContainer;

