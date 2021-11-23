import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Screens
import TeamPlan from '../screens/TeamPlan'
import Dashboard from '../screens/Dashboard';
import Ideas from '../screens/Ideas';
import Articles from '../screens/Articles';

// Components
import NavigationBar from './nav/NavigationBar'
import Footer from './footer/Footer';



function Main(){

    return (
            <>
              <NavigationBar className="navigation-element"/>
                <Routes>
                    <Route path="/dashboard" element={ <Dashboard /> } exact/>
                    <Route path="/articles" element={ <Articles exact/> } />
                    <Route path="/ideas" element={ <Ideas /> } exact/>
                    <Route path="/teamplan" element={ <TeamPlan exact/> } />
                </Routes>
              <Footer className="footer-element"/>  
            </>
        );
}

export default Main;


