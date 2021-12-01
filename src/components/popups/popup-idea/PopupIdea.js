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
import { queryAllByAltText } from '@testing-library/dom';

function PopupIdea(props) {
    const [titleSelected, setTitleSelected] = useState()
    const [descriptionSelected, setDescriptionSelected] = useState()
    const [expirationDateSelected, setExpirationDateSelected] = useState()
    const [visibilitySelected, setVisibilitySelected] = useState()
    const [tags, selectedTags] = useState([])


    function handleDiscardAttempt(objectId){
        // Create a new Todo parse object instance and set todo id
        const Idea = new Parse.Object('Idea');
        Idea.set('objectId', objectId);


        // .destroy should be called to delete a parse object
        try {
            Idea.destroy();
            alert('Success! To-do deleted!');
          // Refresh to-dos list to remove this one
            return true;
        } catch (error) {
          // Error can be caused by lack of Internet connection
            alert('Errr error');
            return false;
        };

    }



    async function saveIdeaToDB(e) {
        e.preventDefault()
        console.log("prevented default")

        const Idea = Parse.Object.extend("Idea")
        const newIdea = new Idea()
        newIdea.set("user", Parse.User.current())
        newIdea.set("title", titleSelected)
        newIdea.set("description", descriptionSelected)
        newIdea.set("expiration", expirationDateSelected)
        newIdea.set("tags", tags)
        newIdea.set("visibility", visibilitySelected)
        
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
                            <DiscardButton text="Discard" goto="Dashboard" />

                            <DiscardButton text="Discard" onClick = {handleDiscardAttempt}/>

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
