import React, { useState } from 'react';
import DragList from './../components/board/DragList'


import Column from '../components/column/Column';
import './Dashboard.css';
import Footer from '../components/footer/Footer';
import AddIdeaButton from '../components/buttons/AddIdeaButton/AddIdeaButton';
import PopupIdea from '../components/popups/popup-idea/PopupIdea';
import Card from '../components/card/Card';

const data = [
    {
        title: 'group 1',
        items: ['1', '2', '3']
    },

    {
        title: 'group 2',
        items: ['4', '5']
    }
]

const Dashboard = () => {
    console.log('sup')

    const [popup, setPopup] = useState(false);
    const [ideaId, setIdeaId] = useState()
    const [articleId, setArticleId] = useState()

    return (
        <>
        <div className="dashboard">
            <p>Dashboard Page</p>
            {/* <Column data={data}/> */}
            <Card/>
            <PopupIdea popup={popup} setPopup={setPopup} ideaId={ideaId}/>
        </div>
        <div className="footer-container">
            <div className="footeridea-btns">
                <AddIdeaButton text="Add Idea" popup={popup} setPopup={setPopup} setIdeaId={setIdeaId}/>
            </div>
            <Footer/>
        </div>
        </>
    );
};

export default Dashboard;