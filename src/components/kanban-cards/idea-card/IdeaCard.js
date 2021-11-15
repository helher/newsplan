import React from 'react';
import './IdeaCard.css'; 
import { AiOutlineCalendar } from 'react-icons/ai';


function IdeaCard() {
    return (
        <div className = "idea-card">
            <div className = "card-body">
                <div className = "card-title" >Card Title</div>

                <div className = "id-and-date">
                    <div className = "card-identification">#ID000000</div>
                    <div className = "card-date"><AiOutlineCalendar className = "iconCalendar" />Nov 12, 2021</div>
                </div>

                <p className = "ideacard-text" >I'm baby disrupt vexillologist neutra bicycle rights. Single-origin coffee pour-over selvage</p>
                <p className = "tags">Tag1 Tag2</p>
                <p className = "contributor-img">Contributor-img</p>
            </div>
        </div>
    );
}

export default IdeaCard;