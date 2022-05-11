import React, { createRef } from 'react';
import DialogItems from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Messages from './Message/Message';
import { Navigate } from 'react-router-dom'
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { TextArea } from '../common/Preloader/FormsControls';
import { MaxLengthCreator, required } from '../../utils/validators/validators';

const Maxlength50 = MaxLengthCreator(50)
export const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={TextArea}
                name='newMessageText'
                placeholder='Enter your message'
                validate={[required, Maxlength50]} />
            <button > Send</button>
        </form>
    )
}
export const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)


