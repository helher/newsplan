import React from 'react'
import './NavigationBar.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

// Screens
import Dashboard from '../../screens/Dashboard'
import Articles from '../../screens/Articles'
import Ideas from '../../screens/Ideas'
import TeamPlan from '../../screens/TeamPlan'

function NavigationBar() {
    return (
        <Router>
            <div>
                <nav className="nav">
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
                <Routes>
                    <Route path="/" element={ <Dashboard /> } exact/>
                    <Route path="/articles" element={ <Articles /> } exact/>
                    <Route path="/ideas" element={ <Ideas /> } exact/>
                    <Route path="/teamplan" element={ <TeamPlan /> } exact/>
                </Routes>
            </div>
        </Router>
    )
}

export default NavigationBar