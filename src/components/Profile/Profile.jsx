import React from 'react';
import MyPosts from './Myposts/MyPosts';
import ProfileInfo from './Myposts/ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import { addPost } from '../../redux/state';
import { updateNewPostText } from '../../redux/state';
const Profile = (props) => {
    return <div >
        <ProfileInfo />
        <MyPosts Posts={props.profilePage.Posts} 
        textPost={props.profilePage.textPost} 
        dispatch={props.dispatch}/>
    </div>
}
export default Profile;