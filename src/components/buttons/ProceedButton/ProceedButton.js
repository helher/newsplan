import React from 'react';
import './ProceedButton.css';
import { useNavigate } from 'react-router';
import { IoArrowForward } from 'react-icons/io5';

const ProceedButton = ({
    text,
    proceedAction
}) => {


    return (
        <button className="proceed-btn" onClick={proceedAction}>
            <div class="button-text">{text}
                <div className="circle">
                    <IoArrowForward className="proceed-icon"/>
                </div>
            </div>
        </button>
    )
}

export default ProceedButton;