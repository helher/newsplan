import React from 'react';
import './NavigationBar.css';
import {Link} from 'react-router-dom';
import { MdOutlineDashboard } from 'react-icons/md';
import { RiArticleLine } from 'react-icons/ri';
import { BiBrain } from 'react-icons/bi';
import { AiOutlineTeam } from 'react-icons/ai';
import BottomAvatar from '../bottom-avatar/BottomAvatar';



function NavigationBar() {
    return (
        <div>
            <nav className="nav-container">
                <ul>
                    <li>
                        <Link to="/"><MdOutlineDashboard className = "navigation_icon"/>Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/articles"><RiArticleLine className = "navigation_icon"/>Articles</Link>
                    </li>
                    <li>
                        <Link to="/ideas"><BiBrain className = "navigation_icon"/>Ideas</Link>
                    </li>
                    <li>
                        <Link to="/teamplan"><AiOutlineTeam className = "navigation_icon"/>Team Plan</Link>
                    </li>
                </ul>
            </nav>
                <div>
                    <BottomAvatar className = "avatar_icon"/>
                </div>
        </div>
    );
};

export default NavigationBar;