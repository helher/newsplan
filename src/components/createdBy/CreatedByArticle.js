import React from 'react';
import './CreatedBy.css'
import { BiBrain } from 'react-icons/bi';
import Parse from 'parse';

function CreatedByArticle(props) {

    const username = (Parse.User.current()).get("username")

    return (
        <div className="logo-and-id">
            <BiBrain className="idea-icon"/>
            <p className="createdby-text"><b>Article</b>  from idea #{props.ideaId} created by {username}</p>
            <div className="id-label">{props.articleId}</div>
        </div>
    )
    
}

export default CreatedByArticle