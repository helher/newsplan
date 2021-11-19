import React from 'react';
import './FooterButton.css';
import { useState } from 'react';

const FooterButton = ({
    text,
    UserIcon,
}) => {

    const [buttonPopup, setButtonPopup] = useState(false)

    function handleClickPopup() {
        console.log("anita clicked the button!")
        setButtonPopup(true)
    }

    return (
        <div>
            <button className="footer-iconbtn" onClick={handleClickPopup} trigger={buttonPopup}>
                <div class="button-text-white">
                <UserIcon className="footer-icon"/>{text}
                </div>
            </button>
        </div>
    
    )
}

export default FooterButton;