import React from 'react'
import { Field } from 'redux-form'
import { reduxForm } from 'redux-form'




const Login = (props) => {
    const onSubmit=(formData)=>{
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm  onSubmit={onSubmit}/>
    </div>
}

export const LoginForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <h1>Login</h1>
        <div> <Field placeholder={'Login'} name={'login'} component={'input'} /></div>
        <div><Field placeholder={'Password'} name={'Password'}component={'input'} /></div>
        <div><Field component={'input'}  name={'rememberMe'}type={'checkbox'} />remember me</div>
        <div> <button>Login</button></div>
    </form>
    )
}

export const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)


export default Login


