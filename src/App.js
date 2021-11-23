import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Screens
import LoginScreen from "./screens/LoginScreen";

// Component
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginScreen />} exact />
        <Main/>
      </Routes>
    </Router>
  );
}

export default App;
