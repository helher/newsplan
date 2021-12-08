import React from 'react';
import { FcCheckmark } from "react-icons/fc";
import Parse from 'parse';
import './SaveComment.css';


const SaveComment = ({saveAction}) => {
    console.log('button clicked');

    return (
        <div >
            <button className="save-comment-btn" onClick={saveAction}>
                <FcCheckmark className="check-icon" />
            </button>
        </div>
    )
}

export default SaveComment;