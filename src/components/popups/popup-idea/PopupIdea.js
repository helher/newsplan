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
import InputTag from '../../input-tag/InputTag'
import RichTextEditor from '../../rich-text-editor/RichTextEdior';
import CreatedBy from '../../createdBy/CreatedBy';
import CommentForm from '../../comment-form/CommentForm';
import CommentList from '../../commentList/CommentList';

function PopupIdea(props) {

    console.log("ideaid", props.ideaId)
    console.log("popup", props.popup)

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [expirationDate, setExpirationDate] = useState({
        day: 1,
        month: 1,
        year: 2023
      })
    const [visibility, setVisibility] = useState()
    const [tags, setTags] = useState([])
    const [commentResult, setCommentResult] = useState();


    function clearPopup() {
        setTitle('')
        setDescription('')
        setExpirationDate(null)
        setVisibility('')
        setTags([])
    }

    async function handleDiscardAttempt() {
        const objectId = props.ideaId
        console.log("handlediscard id: ", objectId)
        console.log("delete started")
        
        const Idea = new Parse.Object('Idea');
        const id = Idea.set('objectId', objectId);
        
        console.log(id)

        try {
            let result = await Idea.destroy();
/*             alert('Success! Idea deleted with id: ' + result.id); */
            console.log('Success! Idea deleted with id: ' + result.id)
            props.setPopup(false)
            clearPopup()
            return true;
        } catch (error) {
            alert(`Error ${error.message}`);
            return false;
        };
    }

    async function saveIdeaToDB() {
        const objectId = props.ideaId
        console.log("save idea started")
        const Idea = new Parse.Object('Idea')

        const id = Idea.set('objectId', objectId)
        console.log(id)

        console.log("save idea id: " + id)
        Idea.set("user", Parse.User.current())
        Idea.set("author", (Parse.User.current()).get("username"))
        Idea.set("title", title)
        Idea.set("description", description)
        Idea.set("expiration", expirationDate)
        Idea.set("tags", tags)
        Idea.set("visibility", visibility)
        try{
            let result = await Idea.save()
            alert('Idea created with ID: ' + result.id)
            console.log('Object updated with objectId: ' + result.id)
            props.setPopup(false)
            clearPopup()
        } catch(error) {
            alert('Failed to update object, with error code: ' + error.message)
        }
    }


    return (props.popup) ? (
        <div className="popup-page">
            <div className="popup">
                <section className="idea-container" >
                    {/* LEFT-COLUMN */}
                    <div className="idea-flex-left">
                        <CreatedBy ideaId={props.ideaId}/>
                        <TitleEdit title = {title} setTitle={setTitle}/>
                        <RichTextEditor description = {description} setDescription = {setDescription} />

                        {/* Dropdowns */}
                        <DropdownCalendar expirationDate={expirationDate} setExpirationDate={setExpirationDate}/>
                        <InputTag tags = {tags} setTags = {setTags} />
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

                    {/* RIGHT-COLUMN */}
                    <div className="idea-flex-right">
                        <div className="top-right">
                            <CloseWindow closeAction={handleDiscardAttempt}/>
                        </div>
                            
                        <h3>Comments</h3>
                        <CommentForm ideaId={props.ideaId} setCommentResult={setCommentResult}/>
                        <CommentList commentResult={commentResult} />
                    </div>
                </section>
                { props.children }
            </div>
        </div>
    ) : ""
}

export default PopupIdea
