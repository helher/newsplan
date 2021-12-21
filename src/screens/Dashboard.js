import React, { useState } from 'react';

// Styles
import './Dashboard.css';

// Components
import Footer from '../components/footer/Footer';
import AddIdeaButton from '../components/buttons/AddIdeaButton/AddIdeaButton';
import PopupIdeaNew from '../components/popups/popup-idea-new/PopupIdeaNew';
import PopupIdea from '../components/popups/popup-idea/PopupIdea';
import IdeaColumn from '../components/columns/IdeaColumn';
import ArticleColumn from '../components/columns/ArticleColumn';
import ColumnOnHold from '../components/columns/ColumnOnHold';


const Dashboard = () => {

    const [popupNew, setPopupNew] = useState(false);
    const [popup, setPopup] = useState(false);
    const [popupArticle, setPopupArticle] = useState(false);
    const [ideaId, setIdeaId] = useState();
    const [cardIdeaTable, setCardIdeaTable] = useState([]);
    const [columnToday, setColumnToday] = useState([]);
    const [columnTomorrow, setColumnTomorrow] = useState([]);
    const [columnDATomorrow, setColumnDATomorrow] = useState([]);
    const [columnOnHold, setColumnOnHold] = useState([]);
    const [cardObject, setCardObject] = useState();

   
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1)
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2)
   

    return (
        <>
        <div className="dashboard">
            <h1>Dashboard Page</h1>
            {/* <Column data={data}/> */}

            <div className="card-components">
            <IdeaColumn setPopup={setPopup} setIdeaId={setIdeaId} cardIdeaTable={cardIdeaTable} setCardIdeaTable={setCardIdeaTable} setCardObject={setCardObject}/>
            <ArticleColumn columnTitle="TODAY" date={today} setPopup={setPopup} column={columnToday} setColumn={setColumnToday} setCardObject={setCardObject}/>
            <ArticleColumn columnTitle="TOMORROW" date={tomorrow} setPopup={setPopup} column={columnDATomorrow} setColumn={setColumnDATomorrow} setCardObject={setCardObject}/>
            <ArticleColumn columnTitle="DAY AFTER TOMORROW" date={dayAfterTomorrow} setPopup={setPopup} column={columnTomorrow} setColumn={setColumnTomorrow} setCardObject={setCardObject}/>
            <ColumnOnHold ideaId="dCpw1gH0lk" setPopup={setPopup} columnOnHold={columnOnHold} setColumnOnHold={setColumnOnHold} setCardObject={setCardObject}/>
            </div>
            <PopupIdea popup={popup} setPopup={setPopup} ideaId={ideaId} cardObject={cardObject} />
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