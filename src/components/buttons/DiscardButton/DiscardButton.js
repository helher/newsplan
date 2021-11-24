import React from 'react';
import './DiscardButton.css';
import { useNavigate } from 'react-router';

const DiscardButton = ({
    text,
    goto,
}) => {

    let navigate = useNavigate();

    function handleClick() {
        navigate(goto)
    }

    return (
        <div>
            <button className="discard-btn" onClick={handleClick}>
                <div class="button-text">{text}
                </div>
            </button>
        </div>
    
    )
}

export default DiscardButton;