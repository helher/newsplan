import React from 'react';
import { FcCheckmark } from "react-icons/fc";
import './SaveJob.css';


const SaveJob = ({saveAction}) => {
    console.log('button clicked');

    return (
        <div >
            <div className="job-button-container">
            <button className="save-job-btn" onClick={saveAction}>
                <FcCheckmark className="check-icon" />
            </button>
            </div>
        </div>
    )
}

export default SaveJob;