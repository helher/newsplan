import React, { useEffect, useState } from 'react';
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

    // When the pop-up renders, the first thing is to create an idea object - and reads the id of the idea
/*     useEffect(() => {
        createIdeaInDB()
        readIdeaIDFromDB()
    }, []) */

    const [ideaID, setIdeaID] = useState()
    const [titleSelected, setTitleSelected] = useState()
    const [descriptionSelected, setDescriptionSelected] = useState()
    const [expirationDateSelected, setExpirationDateSelected] = useState()
    const [visibilitySelected, setVisibilitySelected] = useState()
    const [tags, selectedTags] = useState([])


    async function handleDiscardAttempt(objectId){
        const Idea = new Parse.Object('Idea');
        Idea.set('objectId', objectId);

        try {
            await Idea.destroy();
            alert('Success! To-do deleted!');
            return true;
        } catch (error) {
            alert('Errr error');
            return false;
        };

    }



/*     function createIdeaInDB(e) {
        console.log("createIdeaInDB function is called")
        
        const Idea = Parse.Object.extend("Idea")
        const newIdea = new Idea()
        newIdea.set("user", Parse.User.current())
        newIdea.set("title", titleSelected)
        newIdea.set("description", descriptionSelected)
        newIdea.set("expiration", expirationDateSelected)
        newIdea.set("tags", tags)
        newIdea.set("visibility", visibilitySelected)

        console.log("createIdeaInDB function is ended")
    } */


/*      async function readIdeaIDFromDB(objectId) {
        console.log("readIdeaIDFromDB is called")
        const query = new Parse.Query("Idea");
         const id = newIdea.get("objectId"); 

        try {
            const id = await query.get(objectId);
            console.log(id)
            return id
        }

        catch (error) {
        alert(`FAILED to retrieve idea-id with error: ${error.message}`);
  
        console.log("readIdeaIDFromDB is ended")
        } */

   

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

export default PopupIdea;
