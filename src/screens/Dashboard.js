import React from 'react';
import PopupIdea from '../components/popups/popup-idea/PopupIdea';
import './Dashboard.css';

const Dashboard = () => {
    console.log('sup')    
    return (
        <div className="dashboard">
            <div className="popup-idea-component">
                <PopupIdea/>
            </div>
            
            <p>Dashboard Page</p>
        </div>
    );
};

export default Dashboard;