import React from 'react';
import IdeaCard from './../components/kanban-cards/idea-card/IdeaCard';
import './Articles.css'

import Footer from '../components/footer/Footer';
import LoadButton from '../components/buttons/LoadButton/LoadButton';

const Articles = () => {
    return (
        <>
        <div className="article">
            {console.log("I am running")}
            <p>Articles Page</p>
            <IdeaCard />
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