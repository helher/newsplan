import React, { useState } from 'react';
import DragList from './../components/board/DragList'


import Column from '../components/column/Column';
import './Dashboard.css';
import Footer from '../components/footer/Footer';
import AddIdeaButton from '../components/buttons/AddIdeaButton/AddIdeaButton';
import PopupIdeaNew from '../components/popups/popup-idea-new/PopupIdeaNew';
import IdeaCard from '../components/card/IdeaCard';
;
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

    const [popupNew, setPopupNew] = useState(false);
    const [articleId, setArticleId] = useState()

    return (
        <>
        <div className="dashboard">
            <h1>Dashboard Page</h1>
            {/* <Column data={data}/> */}
            <IdeaCard/>
            <PopupIdeaNew popupNew={popupNew} setPopupNew={setPopupNew}/>
        </div>
        <div className="footer-container">
            <div className="footeridea-btns">
                <AddIdeaButton text="Add Idea" popupNew={popupNew} setPopupNew={setPopupNew}/>
            </div>
            <Footer/>
        </div>
        </>
    );
};

export default Dashboard;