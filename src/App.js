import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Screens
import TeamPlan from "./screens/TeamPlan";
import Dashboard from "./screens/Dashboard";
import Ideas from "./screens/Ideas";
import Articles from "./screens/Articles";
import LoginScreen from "./screens/LoginScreen";

// Components
import NavigationBar from "./components/nav/NavigationBar";
import Footer from "./components/footer/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //TODO: Make logout using setIsLoggedIn state hook function

  return !isLoggedIn ? (
    <LoginScreen setIsLoggedIn={setIsLoggedIn} />
  ) : (
    <Router>
      <NavigationBar className="navigation-element" />
      <Routes>
        <Route path="/" element={<Dashboard />} exact />
        <Route path="/articles" element={<Articles exact />} />
        <Route path="/ideas" element={<Ideas />} exact />
        <Route path="/teamplan" element={<TeamPlan exact />} />
      </Routes>
      <Footer className="footer-element" />
    </Router>
  );
}

export default App;
