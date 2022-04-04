import React, { createRef } from 'react';
import DialogItems from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Messages from './Message/Message';
import { sendMessageCreator, updateMessageCreator } from '../../redux/state';
const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;
    let addtext = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateMessageCreator(body))
    }
    let Dialogelements = state.dialogs.map(d =>
        <DialogItems name={d.name} id={d.id} />
    );
    let Messageselement = state.Message.map(m =>
        <Messages message={m.message} />
    )
    let newMessageText = state.newMesageText;

    return (
        <div className={s.dialogs}>
            <div>
                {Dialogelements}
            </div>
            <div className={s.messages}>
                {Messageselement}
                <textarea
                    placeholder='Enter your message'
                    onChange={onNewMessageChange}
                    value={newMessageText} />
                <button onClick={addtext}> Send</button>
            </div>


        </div>)
}
export default Dialogs;

