import React , { useState } from 'react'
import './PopupArticle.css'
import Parse from 'parse';


//components
import TitleEdit from '../../title-edit/TitleEdit';
import RichTextEditor from '../../rich-text-editor/RichTextEdior';
import DropdownCalendar  from '../../dropdowns/DropdownCalendar/DropdownCalendar';
import DropdownLength from './../../dropdowns/DropdownLength/DropdownLength';
import CreatedByArticle from './../../createdBy/CreatedByArticle';
import InputTag from '../../input-tag/InputTag'; // DON'T REMOVE INCLUDE SOME CSS (WE SHOULD CHANGE THIS!)

//buttons
import ProceedButton from '../../buttons/ProceedButton/ProceedButton';
import SaveButton from '../../buttons/SaveButton/SaveButton';
import DiscardButton from '../../buttons/DiscardButton/DiscardButton';
import CloseWindow from '../../buttons/CloseWindow/CloseWindow';



function PopupArticle(props) {

    console.log("articleid", props.articleId)
    console.log("popup", props.popupArticle)

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [expirationDate, setExpirationDate] = useState()
    const [tags, setTags] = useState([])
    const [length, setLength] = useState()


    async function handleDiscardAttempt() {
        const objectId = props.articleId
        console.log("handlediscard id: ", objectId)
        console.log("delete started")
        
        const Article = new Parse.Object('Article');
        const id = Article.set('objectId', objectId);
        
        console.log(id)

        try {
            let result = await Article.destroy();
/*             alert('Success! Idea deleted with id: ' + result.id); */
            console.log('Success! Idea deleted with id: ' + result.id)
            props.setPopup(false)
            return true;
        } catch (error) {
            alert(`Error ${error.message}`);
            return false;
        };
    }

    function approveArticle() {
        return true
    }


    return (props.popupArticle) ? (
        <div className="popup-page">
            <div className="popup">
                <section className="idea-container" >
                    {/* LEFT-COLUMN */}
                    <div className="idea-flex-left">
                        <CreatedByArticle articleId={props.articleId} ideaId={props.ideaId}/>
                        <TitleEdit title = {title} setTitle={setTitle}/>
                        <RichTextEditor description = {description} setDescription = {setDescription} />

                        {/* Dropdowns */}
                        <h5>Deadline</h5>
                        <DropdownCalendar expirationDate={expirationDate} setExpirationDate={setExpirationDate}/>
{/*                         <InputTag tags = {tags} setTags = {setTags} /> */}
                        <DropdownLength length={length} setLength={setLength}/>

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
                                        <ProceedButton text="Approve Article" proceedAction={approveArticle} />
                                    </div>
                                    <SaveButton />
                                </div>
                        </div>
                    </div>

                    {/* RIGHT-COLUMN */}
                    <div className="idea-flex-right">
                        <div className="top-right">
                            <CloseWindow closeAction={handleDiscardAttempt}/>
                        </div>
                            
                        <h3>Comments</h3>
                    </div>
                </section>
                { props.children }
            </div>
        </div>
    ) : ""
}

export default PopupArticle
