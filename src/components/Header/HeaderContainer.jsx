import React from 'react';
import Header from './Header';
import * as axios from 'axios'
import { connect } from 'react-redux';
import { SetAuthUserData, GetAuthUserData } from '../../redux/auth-reducer';
import { userAPI } from '../../Api/Api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.GetAuthUserData()
        // userAPI.HeaderGet().
        // then(data => {
        //     if (data.resultCode === 0) {
        //         let { id, email, login } = data.data;
        //         this.props.SetAuthUserData(id, email, login)
        //     }
        //})
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true})
        //     .then(response => {
        //         if(response.data.resultCode===0) {
        //             let {id, email, login}=response.data.data;
        //             this.props.SetAuthUserData(id,email,login)
        //         }
        //     })
    }
    render() {
        return <Header {...this.props} />
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { SetAuthUserData, GetAuthUserData })(HeaderContainer);