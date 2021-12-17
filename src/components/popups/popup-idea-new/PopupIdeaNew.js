import React, { useState } from 'react';
import Parse from 'parse';
import './../Popup.css';

//components
import TitleEdit from '../../title-edit/TitleEdit';
import SaveButton from '../../buttons/SaveButton/SaveButton';
import ProceedButton from '../../buttons/ProceedButton/ProceedButton';
import DiscardButton from '../../buttons/DiscardButton/DiscardButton';
import CloseWindow from '../../buttons/CloseWindow/CloseWindow';
import DropdownVisibility from '../../dropdowns/DropdownVisibility/DropdownVisibility';
import DropdownCalendar from '../../dropdowns/DropdownCalendar/DropdownCalendar';
import RichTextEditor from '../../rich-text-editor/RichTextEdior';
import CreatedBy from '../../createdBy/CreatedBy';

function PopupIdeaNew(props) {

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [expirationDate, setExpirationDate] = useState(
        {
            day: 1,
            month: 1,
            year: 2023
        }
    )
    const [visibility, setVisibility] = useState()
    const [tags, setTags] = useState([])

    function clearPopup() {
        setTitle('')
        setDescription('')
        setExpirationDate(        {
            day: 1,
            month: 1,
            year: 2023
        })
        setVisibility('')
        setTags([])
    }

    // This code is from https://dev.to/sanchithasr/3-ways-to-convert-html-text-to-plain-text-52l8
    function convertToPlain(description) {
        var temporaryText = document.createElement("div");
        temporaryText.innerHTML = description;
        return temporaryText.textContent || temporaryText.innerText || "";
    }

    function handleDiscardAttempt() {
        props.setPopupNew(false)
        clearPopup()
    }

    async function saveIdeaToDB() {
        const Idea = Parse.Object.extend("Idea")
        const newIdea = new Idea()
        
        const newDate = new Date(expirationDate.year, expirationDate.month -1, expirationDate.day +1)

        newIdea.set("user", Parse.User.current())
        newIdea.set("userimage", (Parse.User.current()).get("userimage"))
        newIdea.set("author", (Parse.User.current()).get("username"))
        newIdea.set("title", title)
        newIdea.set("description", convertToPlain(description))
        newIdea.set("expiration", newDate)
        newIdea.set("tags", tags)
        newIdea.set("visibility", visibility)

        try{
            let result = await newIdea.save()
            alert('Idea created with ID: ' + result.id)
            console.log('Object updated with objectId: ' + result.id)
            props.setPopupNew(false)
            clearPopup()
        } catch(error) {
            alert('Failed to update object, with error code: ' + error.message)
        }
    }

    return (props.popupNew) ? (
        <div className="popup-page">
            <div className="popup">
                <section className="idea-container-new" >
                    {/* LEFT-COLUMN */}
                    <div className="idea-flex-left">
                        <div className="idea-top-left">
                            <CreatedBy ideaId={props.ideaId}/>
                            <CloseWindow closeAction={handleDiscardAttempt}/>
                        </div>
                        <TitleEdit title = {title} setTitle={setTitle}/>
                        <RichTextEditor description = {description} setDescription = {setDescription} />

                        {/* Dropdowns */}
                        <DropdownCalendar expirationDate={expirationDate} setExpirationDate={setExpirationDate}/>
{/*                         <InputTag tags = {tags} setTags = {setTags} /> */}
                        <DropdownVisibility visibility={visibility} setVisibility={setVisibility} />

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
                </section>
                { props.children }
            </div>
        </div>
    ) : ""
}

export default PopupIdeaNew
