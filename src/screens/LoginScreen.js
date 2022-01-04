import React from "react";
import Login from "../components/login/Login";

function LoginScreen(props) {
  return (
    <div>
      <Login setIsLoggedIn={props.setIsLoggedIn} />
    </div>
  );
}

export default LoginScreen;
