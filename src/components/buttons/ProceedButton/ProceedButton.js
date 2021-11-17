import React from 'react';
import './ProceedButton.css';
import { useNavigate } from 'react-router';
import { IoArrowForward } from 'react-icons/io5';

const ProceedButton = ({
    text,
    goto
}) => {

    let navigate = useNavigate();

    function handleClick() {
        navigate(goto)
    }

    return (
        <div>
            <button className="proceed-btn" onClick={handleClick}>
                <div class="button-text">{text}
                    <div className="circle">
                        <IoArrowForward className="proceed-icon"/>
                    </div>
  
                </div>
            </button>
        </div>
    
    )
}

export default ProceedButton;