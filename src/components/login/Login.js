import React from "react";
import Parse from "parse";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
// import { useNavigate } from "react-router";

// Styles
import "./Login.css";

function Login(props) {
  const isLoggedIn = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  // const navigate = useNavigate();

  function handleLoginAttempt(e) {
    e.preventDefault();
    console.log("prevented default");
    console.log(username);
    console.log(password);

    const user = new Parse.User();

    user.setPassword(password);
    user.setUsername(username);

    user.logIn().then((loggedInUser) => {
      console.log(loggedInUser);
      // navigate("/");
      props.setIsLoggedIn(true)
    });
  }

  return (
    <div className="login-page">
      <div className="image-container">
        <img src="https://picsum.photos/200/300" />
      </div>

      <Form className="login-form">
        <div className="login-form-container">
          <div className="sign-in-container">
            <h1> Sign In</h1>
          </div>

          <div className="username-input-container">
            <Form.Group className="input-field" controlId="formBasicUsername">
              <Form.Label>
                <h6>Username</h6>
              </Form.Label>

              <Form.Control
                className="input-box"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
          </div>

          <div className="password-input-container">
            <Form.Group className="input-field" controlId="formBasicPassword">
              <Form.Label>
                <h6>Password </h6>
              </Form.Label>

              <Form.Control
                className="input-box"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </div>

          <div className="submit-container">
            <Button
              className="submit-button"
              onClick={handleLoginAttempt}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </div> /** */
  );
}

export default Login;
