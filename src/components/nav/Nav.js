import React from 'react';
import './nav.css';
import Dashboard from './screens/Dashboard';
import Articles from './screens/Articles';
import Ideas from './screens/Ideas';
import TeamPlan from './screens/TeamPlan';
import { 
    BrowserRouter as Router, 
    Routes,
    Route, 
    Link
} from "react-router-dom";

function NavigationBar() {
    return (
        <nav className="navigation-bar">
            <ul>
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/articles">Articles</Link>
                </li>
                <li>
                    <Link to="/ideas">Ideas</Link>
                </li>
                <li>
                    <Link to="/teamplan">Team Plan</Link>
                </li>
            </ul>
        </nav>
    
    );
}

export default NavigationBar;
