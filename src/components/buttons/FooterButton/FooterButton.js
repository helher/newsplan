import React from 'react';
import './FooterButton.css';

const FooterButton = ({
    text,
    UserIcon,
    trigger
}) => {

    function handleClickPopup() {
        trigger(true)
    }

    return (
        <div>
            <button className="footer-iconbtn" onClick={handleClickPopup}  >
                <div class="button-text-white">
                <UserIcon className="footer-icon"/>{text}
                </div>
            </button>
        </div>
    
    )
}

export default FooterButton;