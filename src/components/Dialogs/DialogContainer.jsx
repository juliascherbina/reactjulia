import React, { createRef } from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateMessageCreator } from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';



const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateMessageCreator: (body) => {
            let action = updateMessageCreator(body);
            dispatch(action)
        },
        sendMessageCreator: () => {
            dispatch(sendMessageCreator())
        }
    }
}




const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogContainer;

