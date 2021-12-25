import React, { useState } from 'react';

// Styles
import './Dashboard.css';

// Components
import Footer from '../components/footer/Footer';
import AddIdeaButton from '../components/buttons/AddIdeaButton/AddIdeaButton';
import PopupIdeaNew from '../components/popups/popup-idea-new/PopupIdeaNew';
import PopupArticle from '../components/popups/popup-article/PopupArticle';
import PopupIdea from '../components/popups/popup-idea/PopupIdea';
import IdeaColumn from '../components/columns/IdeaColumn';
import ArticleColumn from '../components/columns/ArticleColumn';
import ColumnOnHold from '../components/columns/ColumnOnHold';


const Dashboard = () => {

    const [popupNew, setPopupNew] = useState(false);
    const [popup, setPopup] = useState(false);
    const [popupArticle, setPopupArticle] = useState(false);
    const [ideaId, setIdeaId] = useState();
    const [articleId, setArticleId] = useState()
    const [cardIdeaTable, setCardIdeaTable] = useState([]);
    const [columnToday, setColumnToday] = useState([]);
    const [columnTomorrow, setColumnTomorrow] = useState([]);
    const [columnDATomorrow, setColumnDATomorrow] = useState([]);
    const [columnOnHold, setColumnOnHold] = useState([]);
    const [ideaCardObject, setIdeaCardObject] = useState();
    const [articleCardObject, setArticleCardObject] = useState();

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1)
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2)

    console.log(today);
    console.log(tomorrow);
    console.log(dayAfterTomorrow);


    return (
        <>
        <div className="dashboard">
            <h1>Dashboard Page</h1>
            {/* <Column data={data}/> */}

            <div className="card-components">
            <IdeaColumn setPopup={setPopup} setIdeaId={setIdeaId} cardIdeaTable={cardIdeaTable} setCardIdeaTable={setCardIdeaTable} setIdeaCardObject={setIdeaCardObject}/>
            <ArticleColumn columnTitle="TODAY" date={today} setArticleId={setArticleId} setPopupArticle={setPopupArticle} column={columnToday} setColumn={setColumnToday} setArticleCardObject={setArticleCardObject}/>
            <ArticleColumn columnTitle="TOMORROW" date={tomorrow} setArticleId={setArticleId} setPopupArticle={setPopupArticle} column={columnDATomorrow} setColumn={setColumnDATomorrow} setArticleCardObject={setArticleCardObject}/>
            <ArticleColumn columnTitle="DAY AFTER TOMORROW" date={dayAfterTomorrow} setArticleId={setArticleId} setPopupArticle={setPopupArticle} column={columnTomorrow} setColumn={setColumnTomorrow} setArticleCardObject={setArticleCardObject}/>
            <ColumnOnHold ideaId="dCpw1gH0lk" setPopupArticle={setPopupArticle} setArticleId={setArticleId} columnOnHold={columnOnHold} setColumnOnHold={setColumnOnHold} setArticleCardObject={setArticleCardObject}/>
            
             </div>
            <PopupIdea popup={popup} setPopup={setPopup} ideaId={ideaId} ideaCardObject={ideaCardObject} setPopupArticle={setPopupArticle} setArticleId={setArticleId} articleId={articleId} date={today}/>
            <PopupIdeaNew popupNew={popupNew} setPopupNew={setPopupNew}/>
            <PopupArticle popupArticle={popupArticle} setPopupArticle={setPopupArticle} ideaId={ideaId} articleId={articleId} ideaCardObject={ideaCardObject} articleCardObject={articleCardObject}/>
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