import React from 'react';
import MyPosts from './Myposts/MyPosts';
import MyPostsContainer from './Myposts/MyPostsContainer';
import ProfileInfo from './Myposts/ProfileInfo/ProfileInfo';
import s from './Profile.module.css';

const Profile = (props) => {

    return <div >
        <ProfileInfo isOwner={props.isOwner}
            savePhoto={props.savePhoto}
            profile={props.profile} status={props.status}
            UpdateStatus={props.UpdateStatus} />
        <MyPostsContainer store={props.store} />
    </div>
}
export default Profile;