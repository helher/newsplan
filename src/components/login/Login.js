import React, {useState} from "react";
import Parse from "parse";
import { Form, Button } from "react-bootstrap";

// Styles
import "./Login.css";

// Images
import img from "../../images/login_image.jpg"


function Login(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

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
      props.setIsLoggedIn(true)
    });
  }

  return (
    <div className="login-page">
      <div className="image-container">
        <img src={img} alt= "login-screen-image"/>
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
              Login
            </Button>
          </div>
        </div> 
      </Form>
    </div> /* closing login page */
  );
}

export default Login;
