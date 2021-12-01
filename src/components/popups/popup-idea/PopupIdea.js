import React, { useState } from 'react';
import './PopupIdea.css';
import Parse from 'parse';

//components
import TitleEdit from '../../title-edit/TitleEdit';
import SaveButton from '../../buttons/SaveButton/SaveButton';
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
    const [tags, selectedTags] = useState([])

    function setTrigger(props) {
        props.setTrigger(false)
    }

    async function handleDiscardAttempt(objectId) {
        console.log("delete started")
        
        const Idea = new Parse.Object('Idea');
        const id = Idea.set('objectId', objectId);
        
        console.log(id)

        try {
            let result = await Idea.destroy();
            alert('Success! Idea deleted with id: ' + result.id);
            setTrigger(props)
            return true;
        } catch (error) {
            alert(`Error ${error.message}`);
            return false;
        };
    }

    async function saveIdeaToDB(objectId) {
        console.log("save idea started")
        const Idea = new Parse.Object('Idea')

        const id = Idea.set('objectId', objectId)
        console.log(id)

        console.log("save idea id: " + id)
        Idea.set("user", Parse.User.current())
        Idea.set("title", titleSelected)
        Idea.set("description", descriptionSelected)
        Idea.set("expiration", expirationDateSelected)
        Idea.set("tags", tags)
        Idea.set("visibility", visibilitySelected)
        try{
            let result = await Idea.save()
            alert('Object updated with objectId: ' + result.id)
            setTrigger(props)
        } catch(error) {
            alert('Failed to update object, with error code: ' + error.message)
        }
    }

    return (props.trigger) ? (
        <div className="popup-page">
            <div className="popup">
                <section className="idea-container" >                
                    {/* LEFT-COLUMN */}
                    <div className="idea-flex-left">
                        <CreatedBy/>
                        <TitleEdit titleSelected = {titleSelected} setTitleSelected={setTitleSelected}/>
                        <RichTextEditor descriptionSelected = {descriptionSelected} setDescriptionSelected = {setDescriptionSelected} />

                        {/* Dropdowns */}
                        <DropdownCalendar expirationDateSelected={expirationDateSelected} setExpirationDateSelected={setExpirationDateSelected}/>
                        <InputTag tags = {tags} selectedTags = {selectedTags} />
                        <DropdownVisibility visibilitySelected={visibilitySelected} setVisibilitySelected={setVisibilitySelected} />

                        {/* Attached articles */}
                        <h5>Attached articles</h5>
                        <p>No articles attached yet</p>
                        <br/>
                        <br/>
                        <br/>

                        {/* Buttons */}
                        <div className="align-bottons">

                            <DiscardButton text="Discard" discardAction={handleDiscardAttempt}/>

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

export default PopupIdea
