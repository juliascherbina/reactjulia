import React, { createRef } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { compose } from 'redux';
import { WithAuthRedirect } from '../../Hoc/WithAuthRedirect';
import { sendMessageCreator, updateMessageCreator } from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';



const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,

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
//let AuthRedirectComponent = WithAuthRedirect(Dialogs)


// let AuthRedirectComponent=(props)=>{
//     if(!this.props.isAuth) {
//         return <Navigate to='/Login'/>
//     } 
//     return <Dialogs {...props}/>
// }




//const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)
    (Dialogs);

