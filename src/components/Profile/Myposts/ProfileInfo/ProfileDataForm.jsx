import React from "react"
import { reduxForm } from "redux-form"
import { CreateField, Input, TextArea } from "../../../common/Preloader/FormsControls"
import { Contacts } from "./ProfileInfo"
import s from './ProfileInfo.module.css';

export const ProfileDataForm = ({ handleSubmit, profile }) => {
    return <form onSubmit={handleSubmit}>
        <div> <button>save</button></div>
        <div>
            <b> Fullname</b>: {CreateField('fullname', 'Fullname', Input, [])}
        </div>
        <div>
            <b> lookingForAJob</b>:
            {CreateField('', 'lookingForAJob', Input, [], { type: 'checkbox' })}

        </div>
        <div>
            <b>My professional skills</b>:
            {CreateField('My professional skills', 'lookingForAJobDescription', TextArea, [],)}
        </div>
        <div>
            <b>About me</b>
            {CreateField('About me', 'aboutMe', TextArea, [],)}

        </div>
        <div>
            <b>Contacts</b>:  {Object.keys(profile.contacts).map(key => {
                return <div className={s.contact}>
                    <b>{key}:  {CreateField(key, 'contact.'+ key, TextArea, [],)}</b>
                </div>
            })}
        </div>
    </form>
}
const ProfileDataReduxForm = reduxForm({ form: 'ProfileInfo' })(ProfileDataForm)
export default ProfileDataReduxForm