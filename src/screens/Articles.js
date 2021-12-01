import React from 'react';
import IdeaCard from './../components/kanban-cards/idea-card/IdeaCard';
import InputTag from './../components/input-tag/InputTag'; 
import RichTextEditor from '../components/rich-text-editor/RichTextEdior';

const Articles = () => {
    return (
        
        <div className="article-screen">
            {console.log("I am running")}
            <p>Articles Page</p>
            <IdeaCard />
        </div>
    );
};

export default Articles;