import React from 'react';
import './IconButton.css';
import  { IoIosAddCircleOutline } from 'react-icons/io'

function IconButton() {
    return (
        <div class="iconbtn">
            <button>
                <div class="button-text">
                <IoIosAddCircleOutline class="icon"/>Add idea
                </div>
            </button>
        </div>
    
    )
}

export default IconButton;