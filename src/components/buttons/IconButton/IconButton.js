import React from 'react';
import './IconButton.css';
import { useNavigate } from 'react-router';

const IconButton = ({
    text,
    type,
    goto,
    UserIcon
}) => {

    let navigate = useNavigate();

    function handleClick() {
        navigate({goto})
    }
    
    return (
        <div class="iconbtn">
            <button onClick={handleClick} type={type} navigate={navigate}>
                <div class="button-text">
                <UserIcon class="icon"/>{text}
                </div>
            </button>
        </div>
    
    )
}

export default IconButton;