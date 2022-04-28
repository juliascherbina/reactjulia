import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus'
const ProfileInfo = (props) => {
    
    if(!props.profile) {
        return <Preloader/>
    }
    return <div>
        {/* <div>
            <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' />
        </div> */}
        <div className={s.descriptionBlock}>
            
            <img src={props.profile.photos.large}/>
            <div> {props.profile.aboutMe}</div>
            <div> {props.profile.contacts.facebook}</div>
            <div> {props.profile.fullName}</div>
            <ProfileStatus status={props.status}/>
            ava + description
       </div>
    </div>
}
export default ProfileInfo;