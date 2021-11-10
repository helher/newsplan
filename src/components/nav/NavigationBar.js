import React from 'react';
import './NavigationBar.css';
import {Link} from "react-router-dom";

function NavigationBar() {
    return (
        <div>
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
        </div>
    );
}

export default NavigationBar;