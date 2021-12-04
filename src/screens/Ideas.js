import React, { useState } from 'react';

import './Ideas.css'
import Footer from '../components/footer/Footer';
import PopupIdea from '../components/popups/popup-idea/PopupIdea';
import AddIdeaButton from '../components/buttons/AddIdeaButton/AddIdeaButton';
import { IoIosAddCircleOutline } from 'react-icons/io'

function Ideas() {
    const [popup, setPopup] = useState(false);
    const [ideaId, setIdeaId] = useState()

    return (
        <>
            <div className="idea">
                <PopupIdea popup={popup} setPopup={setPopup} ideaId={ideaId}/>
            </div>
             <div className="footer-container">
                <AddIdeaButton UserIcon={ IoIosAddCircleOutline } text="Add Idea" popup={popup} setPopup={setPopup} setIdeaId={setIdeaId}/>
                <Footer />
            </div>
        </>
    )
}

export default Ideas;