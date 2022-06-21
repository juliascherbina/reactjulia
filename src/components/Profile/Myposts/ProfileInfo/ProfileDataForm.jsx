import React from "react"
import { reduxForm } from "redux-form"
import { CreateField, Input, TextArea } from "../../../common/Preloader/FormsControls"

export const ProfileDataForm = ({ handleSubmit,profile }) => {
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
            {CreateField('About me', 'about me', TextArea, [],)}

        </div>
        <div>
        <b>Contacts</b>:  {Object.keys(profile.contacts).map(key => {
            return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}
    </div>
    </form>
}
const ProfileDataReduxForm = reduxForm({ form: 'ProfileInfo' })(ProfileDataForm)
export default ProfileDataReduxForm