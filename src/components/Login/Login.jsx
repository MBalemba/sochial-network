import React from 'react';


let Login = (props) => {
    return <div>
        <h1>Login</h1>
        <LoginForm />
    </div>
}


const LoginForm = (props) => {
    return (
        <form action="">
            <div>
                <input placeholder={'Login'}/>
            </div>
            <div>
                <input placeholder={'Password'}/>
            </div>



            <div>
                <input type="checkbox"/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
export default Login