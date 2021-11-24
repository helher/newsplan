import React from "react";
import Parse from "parse";
import { useState } from "react";
import { Button } from "react-bootstrap";

// Styles 
import "./Logout.css";


function Logout() {

  function handleLogoutAttempt(e) {
    e.preventDefault();
    this.props.setIsLoggedIn(false);
  }

  return (
    <div className="logout-container">
      <Button className ="logout-button" onCllick ={handleLogoutAttempt} > <h5>Sign out</h5></Button>
    </div>
  );
}

export default Logout;
