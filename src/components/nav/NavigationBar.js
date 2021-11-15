import React from 'react';
import './NavigationBar.css';
import {Link} from 'react-router-dom';
import { MdOutlineDashboard } from 'react-icons/md';
import { RiArticleLine } from 'react-icons/ri';
import { BiBrain } from 'react-icons/bi';
import { AiOutlineTeam } from 'react-icons/ai';





function NavigationBar() {
    return (
        <div>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/"><MdOutlineDashboard className = "dashboard-icon"/>Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/articles"><RiArticleLine className = "articles-icon"/>Articles</Link>
                    </li>
                    <li>
                        <Link to="/ideas"><BiBrain className = "ideas-icon"/>Ideas</Link>
                    </li>
                    <li>
                        <Link to="/teamplan"><AiOutlineTeam className = "teamplan-icon"/>Team Plan</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavigationBar;