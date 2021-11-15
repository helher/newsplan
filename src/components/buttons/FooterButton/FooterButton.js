import React from 'react';
import './FooterButton.css';
import { useNavigate } from 'react-router';

const FooterButton = ({
    text,
    UserIcon,
    goto
}) => {

    let navigate = useNavigate();

    function handleClick() {
        navigate(goto)
    }

    return (
        <div className="iconbtn">
            <button onClick={handleClick}>
                <div class="button-text">
                <UserIcon className="icon"/>{text}
                </div>
            </button>
        </div>
    
    )
}

export default FooterButton;