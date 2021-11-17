import React from 'react';
import './footer.css'

import FooterButton from '../buttons/FooterButton/FooterButton';
import  { IoIosAddCircleOutline } from 'react-icons/io'

function Footer() {
    return (
        <div className="footer-container">
            <FooterButton UserIcon={ IoIosAddCircleOutline } text="Add Idea" goto="/Articles"/>
        </div>

    );
}

export default Footer;