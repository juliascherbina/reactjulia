
import React from 'react';

import Profile from './Profile';
import *  as axios from 'axios'
import { connect } from 'react-redux';
import { GetStatus, getUserProfile, UpdateStatus } from '../../redux/profile-reducer'
import { withRouter } from '../../Hoc/withRouter';
import { userAPI } from '../../Api/Api';
import { Navigate } from 'react-router-dom';
import { WithAuthRedirect } from '../../Hoc/WithAuthRedirect';
import { compose } from 'redux';



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        this.props.getUserProfile(userId)
        this.props.GetStatus(userId)
        // let userId = this.props.router.params.userId;
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        // userAPI.getProfile(userId)
        //     .then(data => {

        //         this.props.setUserProfile(data);

        //     })
    }

    render() {

        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} 
        UpdateStatus={this.props.UpdateStatus}/>

    }

}
//let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

// let AuthRedirectComponent=(props)=>{
//     if(!props.isAuth) {
//         return <Navigate to='/Login'/>
//     } 
//     return <ProfileContainer {...props}/>
// }

let mapStateToProps = (state) => ({

    profile: state.profilePage.profile,
    status:state.profilePage.status
})

//let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)


export default compose(
    connect(mapStateToProps,  {getUserProfile , GetStatus, UpdateStatus}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)

//export default connect(mapStateToProps, { getUserProfile })(withUrlDataContainerComponent);