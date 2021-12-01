import React from 'react';
import './DiscardButton.css';

const DiscardButton = ({
    text,
    discardAction
}) => {

    return (
        <div>
            <button className="discard-btn" onClick ={discardAction}>
                <div class="button-text">{text}
                </div>
            </button>
        </div>
    
    )
}

export default DiscardButton;