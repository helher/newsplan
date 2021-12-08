import React from "react";
import { Button } from "react-bootstrap";

// Styles 
import "./Logout.css";


function Logout(props) {

  function handleLogoutAttempt(e) {
    e.preventDefault();
    props.setIsLoggedIn(false)
  }

  return (
    <div className="logout-container">
      <Button className ="logout-button" onClick={handleLogoutAttempt} > <h5>Sign out</h5></Button>
    </div>
  );
}

export default Logout;
