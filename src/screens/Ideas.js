import React, { useState } from 'react';

import './Ideas.css'
import Footer from '../components/footer/Footer';
import PopupIdea from '../components/popups/popup-idea/PopupIdea';
import AddIdeaButton from '../components/buttons/AddIdeaButton/AddIdeaButton';
import LoadButton from '../components/buttons/LoadButton/LoadButton';


function Ideas() {
    const [popup, setPopup] = useState(false);
    const [ideaId, setIdeaId] = useState()

    return (
        <>
            <div className="idea">
                <p>Idea page</p>
                <PopupIdea popup={popup} setPopup={setPopup} ideaId={ideaId}/>
            </div>
             <div className="footer-container">
                <div className="footeridea-btns">
                <AddIdeaButton text="Add Idea" popup={popup} setPopup={setPopup} setIdeaId={setIdeaId}/>
                <LoadButton text="Load more Ideas" />
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Ideas;