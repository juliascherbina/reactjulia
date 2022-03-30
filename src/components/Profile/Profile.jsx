import React from 'react';
import MyPosts from './Myposts/MyPosts';
import ProfileInfo from './Myposts/ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
const Profile = (props) => {
    return <div >
        <ProfileInfo />
        <MyPosts Posts={props.state.Posts} addPost={props.addPost} />
    </div>
}
export default Profile;