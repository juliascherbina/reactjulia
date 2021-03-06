import React from 'react'
import { connect } from 'react-redux'
import { Field } from 'redux-form'
import { reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validators'
import { CreateField, Input } from '../common/Preloader/FormsControls'
import { loginApi } from '../../redux/auth-reducer'
import { Navigate } from 'react-router-dom'
import { WithAuthRedirect } from '../../Hoc/WithAuthRedirect'
import ProfileContainer from '../Profile/ProfileContainer'
import styles from '../common/Preloader/FormsControle.module.css'
import createField from 'redux-form/lib/createField'


const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginApi(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Navigate to={'/profile/'} />
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}
        captchaUrl={props.captchaUrl} />
    </div>
}

export const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (<form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div> <Field placeholder={'Login'} name={'email'} component={Input} validate={[required]} /></div>
        <div><Field placeholder={'Password'} name={'password'} type={'password'} component={Input} validate={[required]} /></div>
        <div><Field component={Input} name={'rememberMe'} type={'checkbox'} validate={[required]} />remember me</div>
        {captchaUrl && <img src= {captchaUrl}/>}
        {captchaUrl &&  <div><Field component={Input} name={'captcha'} type={''} validate={[required]} /></div>}
        {   error && <div className={styles.formSummeryError}>
         {error}
        </div>}
        <div> <button>Login</button></div>
    </form>
    )
}

export const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const mapStateToProps = (state) => ({
    captchaUrl:state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { loginApi })(Login)


