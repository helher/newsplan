import React, { useState } from 'react';
import IdeaCard from './../components/kanban-cards/idea-card/IdeaCard';
import './Articles.css'

import Footer from '../components/footer/Footer';
import LoadButton from '../components/buttons/LoadButton/LoadButton';
import PopupArticle from '../components/popups/popup-article/PopupArticle';
import StatusbarList from '../components/statusbar/StatusbarList'

const Articles = () => {

//this line is needed to test the popup on article page
const [length, setLength] = useState()
    
return (

        <>
        <div className="article">
            {console.log("I am running")}
            <p>Articles Page</p>
            {StatusbarList}
            <IdeaCard />
            <PopupArticle/>
        </div>
        <div className="footer-container">
            <div className="footerarticle-btns">
                <LoadButton text="Load more Articles" />
            </div>
            <Footer/>
        </div>

        </>
        
    )
}

export default Articles;