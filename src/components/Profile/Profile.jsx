import React from 'react';
import MyPosts from './Myposts/MyPosts';
import s from'./Profile.module.css';
const Profile = () => {
    return <div > <div>
        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' />
    </div>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>
}
export default Profile;