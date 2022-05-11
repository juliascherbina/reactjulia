import React from 'react'
import { connect } from 'react-redux'
import { Field } from 'redux-form'
import { reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validators'
import { Input } from '../common/Preloader/FormsControls'
import { loginApi } from '../../redux/auth-reducer'
import { Navigate } from 'react-router-dom'
import { WithAuthRedirect } from '../../Hoc/WithAuthRedirect'
import ProfileContainer from '../Profile/ProfileContainer'



const Login = (props) => {
    const onSubmit = (formData) => {
      props.loginApi(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth) {
        return <Navigate to={'/profile/'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

export const LoginForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <h1>Login</h1>
        <div> <Field placeholder={'Login'} name={'email'} component={Input} validate={[required]} /></div>
        <div><Field placeholder={'Password'} name={'password'} type={'password'} component={Input} validate={[required]} /></div>
        <div><Field component={Input} name={'rememberMe'} type={'checkbox'} validate={[required]} />remember me</div>
        <div> <button>Login</button></div>
    </form>
    )
}

export const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const mapStateToProps=(state)=>({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {loginApi})(Login)


