import React from 'react';
import IdeaCard from '../components/kanban-cards/idea-card/IdeaCard';
import PopupIdea from '../components/popups/popup-idea/PopupIdea';
import './Dashboard.css';

const Dashboard = () => {
    console.log('sup')    
    return (
        <div className="dashboard">
            <div className="popup-idea-component">
                <PopupIdea/>
            </div>
            <div className = "ideacard-component">
                <IdeaCard/>
            </div>
            

            <p>Dashboard Page</p>
        </div>
    );
};

export default Dashboard;