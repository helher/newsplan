import React from 'react';
import './CreatedBy.css'
import { BiBrain } from 'react-icons/bi';
import Parse from 'parse';

function CreatedBy(props) {

    const username = (Parse.User.current()).get("username")

    return (
        <div className="logo-and-id">
            <BiBrain className="idea-icon"/>
            <p className="createdby-text"><b>Idea</b> created by {username}</p>
            <div className="id-label">{props.ideaId}</div>
        </div>
    )
    
}

export default CreatedBy