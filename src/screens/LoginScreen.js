import React from 'react';
import Login from '../components/login/Login';
// TODO: Why with the empty component?
function LoginScreen(props){
    return (
        <div>
            <Login setIsLoggedIn={props.setIsLoggedIn}/>
        </div>
    )
}

export default LoginScreen;