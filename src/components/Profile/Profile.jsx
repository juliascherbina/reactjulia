import React from 'react';
import MyPosts from './Myposts/MyPosts';
import ProfileInfo from './Myposts/ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
const Profile = () => {
    return <div >
        <ProfileInfo />
        <MyPosts />
    </div>
}
export default Profile;