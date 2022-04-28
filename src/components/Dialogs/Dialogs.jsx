import React, { createRef } from 'react';
import DialogItems from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Messages from './Message/Message';
import {Navigate} from 'react-router-dom'

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let addtext = () => {
        props.sendMessageCreator()
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateMessageCreator(body)
    }
    let Dialogelements = state.dialogs.map(d =>
        <DialogItems name={d.name} key={d.id} id={d.id} />
    );
    let Messageselement = state.Message.map(m =>
        <Messages message={m.message} key={m.id} />
    )
    let newMessageText = state.newMesageText;
      if(!props.isAuth) {
          return <Navigate to='/Login'/>
      } 
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

