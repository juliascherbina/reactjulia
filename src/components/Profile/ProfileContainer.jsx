
import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { GetStatus, getUserProfile, UpdateStatus, savePhoto } from '../../redux/profile-reducer'
import { withRouter } from '../../Hoc/withRouter';
import { WithAuthRedirect } from '../../Hoc/WithAuthRedirect';
import { compose } from 'redux';
import { Navigate } from 'react-router-dom';



class ProfileContainer extends React.Component {
    refreshProfile() {
        let state = this.props.store.getState();
        let userId = this.props.router.params.userId || state.auth.id
        this.props.getUserProfile(userId)
        this.props.GetStatus(userId)

    }
    componentDidMount() {
        this.refreshProfile()
        // let userId = this.props.router.params.userId;
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        // userAPI.getProfile(userId)
        //     .then(data => {

        //         this.props.setUserProfile(data);

        //     })
    }
    componentDidUpdate() {
        if (this.props.router.params.userId != this.props.router.params.userId) {
            this.refreshProfile()
        }
    }

    getIsMyProfile() {
        return !this.props.router.params.userId;
    }

    render() {
        let state = this.props.store.getState();
        if (this.getIsMyProfile() && !state.auth.isAuth) {
            return <Navigate to='/login' />
        }
        return <Profile {...this.props}
            isOwner={this.getIsMyProfile()}
            savePhoto={this.props.savePhoto}
            profile={this.props.profile} status={this.props.status}
            UpdateStatus={this.props.UpdateStatus}
            saveProfile={props.saveProfile} />

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
    status: state.profilePage.status
})

//let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)


export default compose(
    connect(mapStateToProps, { getUserProfile, GetStatus, UpdateStatus,savePhoto, saveProfile }),
    withRouter
)(ProfileContainer)

//export default connect(mapStateToProps, { getUserProfile })(withUrlDataContainerComponent);