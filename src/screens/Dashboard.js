import React, { useState } from 'react';

// Styles
import './Dashboard.css';

// Components
import Footer from '../components/footer/Footer';
import AddIdeaButton from '../components/buttons/AddIdeaButton/AddIdeaButton';
import PopupIdeaNew from '../components/popups/popup-idea-new/PopupIdeaNew';
import PopupIdea from '../components/popups/popup-idea/PopupIdea';
import IdeaCard from '../components/card/IdeaCard';
import ArticleCard from '../components/card/ArticleCard';
import { useTabContext } from '@mui/material';

const Dashboard = () => {
    console.log('sup')

    const [popupNew, setPopupNew] = useState(false);
    const [popup, setPopup] = useState(false);
    const [ideaId, setIdeaId] = useState();
    const [cardIdeaTable, setCardIdeaTable] = useState([]);
    const [cardArticleTable, setCardArticleTable] = useState([]);
    const [cardObject, setCardObject] = useState();

    const today = new Date().toString().substring(4,15);
    console.log(today);
 

    return (
        <>
        <div className="dashboard">
            <h1>Dashboard Page</h1>
            {/* <Column data={data}/> */}
            <div className="card-components">
            <IdeaCard setPopup={setPopup} setIdeaId={setIdeaId} cardIdeaTable={cardIdeaTable} setCardIdeaTable={setCardIdeaTable} setCardObject={setCardObject}/>
            <ArticleCard today={today} setPopup={setPopup} cardArticleTable={cardArticleTable} setCardArticleTable={setCardArticleTable} setCardObject={setCardObject}/>
            </div>
            <PopupIdea popup={popup} setPopup={setPopup} ideaId={ideaId} cardObject={cardObject} />
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