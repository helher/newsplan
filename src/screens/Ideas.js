import React, { useState } from 'react';

import './Ideas.css'
import Footer from '../components/footer/Footer';
import PopupIdea from '../components/popups/popup-idea/PopupIdea';
import AddIdeaButton from '../components/buttons/AddIdeaButton/AddIdeaButton';
import { IoIosAddCircleOutline } from 'react-icons/io'

function Ideas() {
    const [showPopup, setShowpopup] = useState(false);
    const [ideaId, setIdeaId] = useState()

    return (
        <>
            <div className="idea">
                <PopupIdea showPopup={showPopup} setShowPopup={setShowpopup} ideaId={ideaId}/>
            </div>
             <div className="footer-container">
                <AddIdeaButton UserIcon={ IoIosAddCircleOutline } text="Add Idea" setShowPopup={setShowpopup} setIdeaId={setIdeaId}/>
                <Footer />
            </div>
        </>
    )
}

export default Ideas;