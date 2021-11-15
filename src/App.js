import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Screens
import TeamPlan from './screens/TeamPlan'
import Dashboard from './screens/Dashboard';
import Ideas from './screens/Ideas';
import Articles from './screens/Articles';

// Components
import NavigationBar from './components/nav/NavigationBar'
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <div className="app">
      <NavigationBar className="navigation-element"/>
        <Routes className="main-content">
          <Route path="/" element={ <Dashboard /> } exact/>
          <Route path="/articles" element={ <Articles /> } exact/>
          <Route path="/ideas" element={ <Ideas /> } exact/>
          <Route path="/teamplan" element={ <TeamPlan /> } exact/>
        </Routes>
        <Footer className="footer-element"/>
    </div>
  </Router>
  );
}

export default App;