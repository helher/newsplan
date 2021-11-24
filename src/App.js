import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Screens
import TeamPlan from "./screens/TeamPlan";
import Dashboard from "./screens/Dashboard";
import Ideas from "./screens/Ideas";
import Articles from "./screens/Articles";
import LoginScreen from "./screens/LoginScreen";
import PopupIdea from './components/popups/popup-idea/PopupIdea';

// Components
import NavigationBar from "./components/nav/NavigationBar";
import Footer from "./components/footer/Footer";
import Logout from "./components/logout/Logout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //TODO: Make logout using setIsLoggedIn state hook function
  const [showPopup, setShowpopup] = useState(false)

  return !isLoggedIn ? (
    <LoginScreen setIsLoggedIn={setIsLoggedIn} />
  ) : (
    <div className="app-content">
    <Router>
      <NavigationBar className="navigation-element" />
      <Routes className ="main-content">
        <Route path="/" element={<Dashboard />} exact />
        <Route path="/articles" element={<Articles exact />} />
        <Route path="/ideas" element={<Ideas />} exact />
        <Route path="/teamplan" element={<TeamPlan exact />} />
      </Routes>
       <Footer className="footer-element" trigger={setShowpopup}/>
       <PopupIdea trigger={showPopup} setTrigger={setShowpopup}/>
    </Router>
    </div>
  );
}

export default App;
