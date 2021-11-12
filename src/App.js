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

function App() {
  return (
    <Router>
      <div class="app">
      <NavigationBar/>
        <Routes>
          <Route path="/" element={ <Dashboard /> } exact/>
          <Route path="/articles" element={ <Articles /> } exact/>
          <Route path="/ideas" element={ <Ideas /> } exact/>
          <Route path="/teamplan" element={ <TeamPlan /> } exact/>
        </Routes>
    </div>
  </Router>
  );
}

export default App;