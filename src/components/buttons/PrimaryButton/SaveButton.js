import React from 'react';
import './SaveButton.css';


const SaveButton= ({
    saveAction
}) => {

    return (
        <div>
            <button className="save-btn" onClick={saveAction}>
                <div class="button-text-white">Save
                </div>
            </button>
        </div>
    )
}

export default SaveButton;