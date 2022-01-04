import React from 'react';
import { IoReloadOutline } from 'react-icons/io5';

// Styles
import './LoadButton.css';

const LoadButton = ({
    text
}) => {

    function handleClickLoading() {
        console.log("load button clicked!")
    }


    return (
        <button className="load-iconbtn" onClick={handleClickLoading}  >
            <div class="button-text-white">
                <IoReloadOutline className="load-icon"/>{text}
            </div>
        </button>
    )
}

export default LoadButton;

