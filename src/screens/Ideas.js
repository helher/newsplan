import React, { useState } from 'react';

import './Ideas.css'
import Footer from '../components/footer/Footer';
import PopupIdea from '../components/popups/popup-idea/PopupIdea';
import AddIdeaButton from '../components/buttons/AddIdeaButton/AddIdeaButton';
import { IoIosAddCircleOutline } from 'react-icons/io'

function Ideas(props) {
    const [showPopup, setShowpopup] = useState(false);
    const [ideaId, setIdeaId] = useState()

    return (
        <>
            <div className="idea">
                
            </div>
            <Footer trigger={setShowpopup} setIdeaId={setIdeaId}>
                <AddIdeaButton UserIcon={ IoIosAddCircleOutline } text="Add Idea" trigger={props.trigger} setIdeaId={props.setIdeaId}/>
            </Footer>
            <PopupIdea trigger={showPopup} setTrigger={setShowpopup} ideaId={ideaId}/>
        </>
    )
}

export default Ideas;