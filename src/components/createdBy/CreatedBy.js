import React, { useEffect, useState } from 'react';
import './CreatedBy.css'
import { BiBrain } from 'react-icons/bi';
import Parse from 'parse';

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