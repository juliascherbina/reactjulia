import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return <div>
        <div className={s.descriptionBlock}>

            <img src={props.profile.photos.large} />
            <div> {props.profile.aboutMe}</div>
            <div> {props.profile.contacts.facebook}</div>
            <div> {props.profile.fullName}</div>
            <ProfileStatusWithHooks status={props.status} UpdateStatus={props.UpdateStatus} />
            ava + description
        </div>
    </div>
}
export default ProfileInfo;