import React from 'react';
import './CreatedBy.css'
import { BiBrain } from 'react-icons/bi';

function CreatedBy(props) {

    return (
        <div className="logo-and-id">
            <BiBrain className="idea-icon"/>
            <p className="createdby-text"><b>Idea</b> created by {props.author}</p>
            <div className="id-label">{props.ideaId}</div>
        </div>
    )
    
}

export default CreatedBy