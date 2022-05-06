import React, { createRef } from 'react';
import DialogItems from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Messages from './Message/Message';
import {Navigate} from 'react-router-dom'
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';

const Dialogs = (props) => {
    let state = props.dialogsPage;
    // let addtext = () => {
    //     props.sendMessageCreator()
    // }
    // let onNewMessageChange = (e) => {
    //     let body = e.target.value
    //     props.updateMessageCreator(body)
    // }
    let Dialogelements = state.dialogs.map(d =>
        <DialogItems name={d.name} key={d.id} id={d.id} />
    );
    let Messageselement = state.Message.map(m =>
        <Messages message={m.message} key={m.id} />
    )
   // let newMessageText = state.newMesageText;
      if(!props.isAuth) {
          return <Navigate to='/Login'/>
      } 
     let addNewMessage=(values)=>{
        props.sendMessageCreator(values.newMessageText)
        values.newMessageText = "";
     }
    return (
        <div className={s.dialogs}>
            <div>
                {Dialogelements}
            </div>
            <div className={s.messages}>
                {Messageselement}
               
            </div>
           < AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>)
}
const AddMessageForm=(props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name='newMessageText'  placeholder='Enter your message'/>
        <button > Send</button>
        </form>
    )
}
export const AddMessageFormRedux=reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)
export default Dialogs;

