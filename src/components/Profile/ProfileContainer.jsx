import { Axios } from 'axios';
import React from 'react';
import MyPosts from './Myposts/MyPosts';
import MyPostsContainer from './Myposts/MyPostsContainer';
import ProfileInfo from './Myposts/ProfileInfo/ProfileInfo';
import Profile from './Profile';
import *  as axios from 'axios'
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer'
import { withRouter } from '../../withRouter';


class ProfileContainer extends React.Component {
    
    componentDidMount() {
        debugger
        let userId = this.props.router.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {

                this.props.setUserProfile(response.data);

            })
    }
    
    render() {
        return <Profile {...this.props} profile={this.props.profile} />
        
    }
    
}
let mapStateToProps = (state) => ({
    
    profile: state.profilePage.profile
})
let withUrlDataContainerComponent=withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(withUrlDataContainerComponent);