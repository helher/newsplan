import React from 'react';
import './DiscardButton.css';

const DiscardButton = ({
    text
}) => {

    return (
        <div>
            <button className="discard-btn" >
                <div class="button-text">{text}
                </div>
            </button>
        </div>
    
    )
}

export default DiscardButton;