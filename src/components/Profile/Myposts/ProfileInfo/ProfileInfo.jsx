import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import userPhoto from '../../../../assets/images/user.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import { useState } from 'react';
const ProfileInfo = (props) => {
    let [EditMode, SetEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    if (!props.profile) {
        return <Preloader />
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    return <div>
        <div className={s.descriptionBlock}>

            <img src={props.profile.photos.large || userPhoto} className={s.avatar} />
            {!props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
            {EditMode
                ? <ProfileDataForm profile={props.profile} />
                : <ProfileData goToEditMode={()=>{SetEditMode(true)}} profile={props.profile} isOwner={props.isOwner} />}
            <ProfileStatusWithHooks status={props.status} UpdateStatus={props.UpdateStatus} />
            ava + description
        </div>
    </div>
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return <div>
        {isOwner && <div> <button onClick={goToEditMode}>edit</button></div>}
        <div>
            <b> Fullname</b>:{profile.fullName}
        </div>
        <div>
            <b> lookingForAJob</b>:{profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        <div>
            <b>Contacts</b>:  {Object.keys(profile.contacts).map(key => {
                return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>
    </div>
}
const ProfileDataForm = ({ profile }) => {
    return <div>
        Form
    </div>
}
const Contacts = ({ contactTitle, contactValue }) => {
    return <div className={s.contact}>
        <b>{contactTitle}</b>:{contactValue}
    </div>
}
export default ProfileInfo;