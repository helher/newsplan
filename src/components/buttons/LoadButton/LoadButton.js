import React from 'react';
import './LoadButton.css';
import { IoReloadOutline } from 'react-icons/io5'

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

