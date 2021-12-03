import React from 'react';
import IdeaCard from './../components/kanban-cards/idea-card/IdeaCard';

import Footer from '../components/footer/Footer';

const Articles = () => {
    return (
        <>
        <div className="article-screen">
            {console.log("I am running")}
            <p>Articles Page</p>
            <IdeaCard />
        </div>
            <Footer/>
        </>
        
    )
}

export default Articles;