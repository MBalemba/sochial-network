import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";


let Login = (props) => {

    const onSubmit = ({login, password, rememberMe }) => {

        props.login(login,password, rememberMe )
    }

    if(props.isAuth === true ){
        return <Redirect to = {"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component="input"/>
            </div>


            <div>
                <Field component="input" name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps = (state) => (
    {
        isAuth: state.auth.isAuth,
    }
)

const LoginContainer = connect(mapStateToProps,{login})(Login)
export default LoginContainer