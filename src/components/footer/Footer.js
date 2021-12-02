import React from 'react';
import './footer.css'

import AddIdeaButton from '../buttons/AddIdeaButton/AddIdeaButton';
import  { IoIosAddCircleOutline } from 'react-icons/io'

function Footer(props) {
    
    return (
        <div className="footer-container">
            <AddIdeaButton UserIcon={ IoIosAddCircleOutline } text="Add Idea" trigger={props.trigger} setIdeaId={props.setIdeaId}/>
        </div>

    );
}

export default Footer;