import React, { useState } from 'react';
import DragList from './../components/board/DragList'


import Column from '../components/column/Column';
import './Dashboard.css';
import Footer from '../components/footer/Footer';
import AddIdeaButton from '../components/buttons/AddIdeaButton/AddIdeaButton';
import PopupIdeaNew from '../components/popups/popup-idea-new/PopupIdeaNew';
import PopupIdea from '../components/popups/popup-idea/PopupIdea'
import IdeaCard from '../components/card/IdeaCard';
import PopupArticle from '../components/popups/popup-article/PopupArticle'


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
    const [popup, setPopup] = useState(false);
    const [popupArticle, setPopupArticle] = useState(false);
    const [ideaId, setIdeaId] = useState();
    const [cardIdeaTable, setCardIdeaTable] = useState([]);
    const [cardObject, setCardObject] = useState();
    const [articleId, setArticleId] = useState()

    return (
        <>
        <div className="dashboard">
            <h1>Dashboard Page</h1>
            {/* <Column data={data}/> */}
            <IdeaCard setPopup={setPopup} setIdeaId={setIdeaId} cardIdeaTable={cardIdeaTable} setCardIdeaTable={setCardIdeaTable} setCardObject={setCardObject}/>
            <PopupIdea popup={popup} setPopup={setPopup} ideaId={ideaId} cardObject={cardObject} setPopupArticle={setPopupArticle} setArticleId={setArticleId}/>
            <PopupIdeaNew popupNew={popupNew} setPopupNew={setPopupNew}/>
            <PopupArticle popupArticle={popupArticle} setPopupArticle={setPopupArticle} ideaId={ideaId} articleId={articleId} cardObject={cardObject}/>
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