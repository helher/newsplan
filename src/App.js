import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styles
import "./App.css";

// Screens
import TeamPlan from "./screens/TeamPlan";
import Dashboard from "./screens/Dashboard";
import Ideas from "./screens/Ideas";
import Articles from "./screens/Articles";
import LoginScreen from "./screens/LoginScreen";

// Components
import NavigationBar from "./components/nav/NavigationBar";
import Logout from "./components/logout/Logout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //TODO: Make logout using setIsLoggedIn state hook function

  return !isLoggedIn ? (
    <LoginScreen setIsLoggedIn={setIsLoggedIn} />
  ) : (
    <div className="app-content">
      <Router>
        <NavigationBar className="navigation-element" />
        <Routes className="main-content">
          <Route path="/" element={<Dashboard />} exact />
          <Route path="/articles" element={<Articles exact />} />
          <Route path="/ideas" element={<Ideas />} exact />
          <Route path="/teamplan" element={<TeamPlan exact />} />
        </Routes>
        <Logout className="logout-element" setIsLoggedIn={setIsLoggedIn} />
      </Router>
    </div>
  );
}

export default App;
