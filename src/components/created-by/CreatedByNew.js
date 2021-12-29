import React from 'react';
import Parse from 'parse';
import { BiBrain } from 'react-icons/bi';

// Styles
import './CreatedBy.css'

function CreatedBy() {

    const username = (Parse.User.current()).get("username")

    return (
        <div className="logo-and-id">
            <BiBrain className="idea-icon"/>
            <p className="createdby-text"><b>Idea</b> created by {username}</p>
        </div>
    )
    
}

export default CreatedBy