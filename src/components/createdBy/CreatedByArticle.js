import React from 'react';
import './CreatedBy.css'
import { BiBrain } from 'react-icons/bi';

function CreatedByArticle(props) {

    return (
        <div className="logo-and-id">
            <BiBrain className="idea-icon"/>
            <p className="createdby-text"><b>Article</b>  from idea #{props.ideaId} created by {props.ideaAuthor}</p>
            <div className="id-label">{props.articleId}</div>
        </div>
    )
    
}

export default CreatedByArticle