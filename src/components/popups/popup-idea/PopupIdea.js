import React, { useState } from 'react';
import './PopupIdea.css';
import Parse from 'parse';

//components
import TitleEdit from '../../title-edit/TitleEdit';
import SaveButton from '../../buttons/PrimaryButton/SaveButton';
import ProceedButton from '../../buttons/ProceedButton/ProceedButton';
import DiscardButton from '../../buttons/DiscardButton/DiscardButton';
import CloseWindow from '../../buttons/CloseWindow/CloseWindow';
import DropdownVisibility from '../../dropdowns/DropdownVisibility/DropdownVisibility';
import DropdownCalendar from '../../dropdowns/DropdownCalendar/DropdownCalendar';
import InputTag from '../../input-tag/InputTag'
import RichTextEditor from '../../rich-text-editor/RichTextEdior';
import CreatedBy from '../../createdBy/CreatedBy';

function PopupIdea(props) {
    const [titleSelected, setTitleSelected] = useState()
    const [descriptionSelected, setDescriptionSelected] = useState()
    const [expirationDateSelected, setExpirationDateSelected] = useState()
    const [visibilitySelected, setVisibilitySelected] = useState()

    async function saveIdeaToDB(e) {
        console.log("anita clicked the button")
        e.preventDefault()
        console.log("prevented default")

        console.log(titleSelected)

        const Idea = Parse.Object.extend("Idea")
        const newIdea = new Idea()
        newIdea.set("title", titleSelected)
        newIdea.set("description", descriptionSelected)
        newIdea.set("visibility", visibilitySelected)
        newIdea.set("user", Parse.User.current()) //how uploaded the idea.. */
        
        try {
            await newIdea.save()
            alert("Idea is creted - HURRRA!")
        }
        catch(error) {
           alert(error)
       }
    }
    

    return (props.trigger) ? (
        <div className="popup-page">
            <div className="popup">
                <section className="idea-container">
                    {/* LEFT-COLUMN */}
                    <div className="idea-flex-left">
                        <CreatedBy />
                        <TitleEdit titleSelected = {titleSelected} setTitleSelected={setTitleSelected}/>
                        <RichTextEditor descriptionSelected = {descriptionSelected} setDescriptionSelected = {setDescriptionSelected} />

                        {/* Dropdowns */}

                        <DropdownCalendar expirationDateSelected={expirationDateSelected} setExpirationDateSelected={setExpirationDateSelected}/>
                        <InputTag />
                        <DropdownVisibility visibilitySelected={visibilitySelected} setVisibilitySelected={setVisibilitySelected} />

                        {/* Attached articles */}
                        <h5>Attached articles</h5>
                        <p>No articles attached yet</p>
                        <br/>
                        <br/>
                        <br/>

                        {/* Buttons */}
                        <div className="align-bottons">
                            <DiscardButton text="Discard" goto="Dashboard" />
                                <div className="right-buttons">
                                    <div className="convert-button">
                                        <ProceedButton text="Convert to Article" goto="/Dashboard" />
                                    </div>
                                    <SaveButton saveAction={saveIdeaToDB}/>
                                </div>
                        </div>
                    </div>

                    {/* RIGHT-COLUMN */}
                    <div className="idea-flex-right">
                        <div className="top-right">
                            <CloseWindow setTrigger={props.setTrigger}/>
                        </div>
                            
                        <h3>Comments</h3>
                    </div>
                </section>
                { props.children }
            </div>
        </div>
    ) : ""
}

export default PopupIdea;
