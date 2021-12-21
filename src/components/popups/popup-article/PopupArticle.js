import React , { useState, useEffect } from 'react'
import './PopupArticle.css'
import Parse from 'parse';


//components
import TitleEdit from '../../title-edit/TitleEdit';
import RichTextEditor from '../../rich-text-editor/RichTextEdior';
import DropdownCalendar  from '../../dropdowns/DropdownCalendar/DropdownCalendar';
import DropdownLength from './../../dropdowns/DropdownLength/DropdownLength';
import CreatedByArticle from './../../createdBy/CreatedByArticle';
import InputTag from '../../input-tag/InputTag'; // DON'T REMOVE INCLUDE SOME CSS (WE SHOULD CHANGE THIS!)
import Section from '../../dropdowns/Section/Section';

//buttons
import ProceedButton from '../../buttons/ProceedButton/ProceedButton';
import SaveButton from '../../buttons/SaveButton/SaveButton';
import DiscardButton from '../../buttons/DiscardButton/DiscardButton';
import CloseWindow from '../../buttons/CloseWindow/CloseWindow';



function PopupArticle(props) {

    console.log("popup article renders!!!")

    const [author, setAuthor] = useState()
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [deadline, setDeadline] = useState({
        day: 1,
        month: 1,
        year: 2023,
      });
    const [section, setSection] = useState()
    const [length, setLength] = useState()

    useEffect(() => {
        props.cardObject && setArticleInfoFromIdea();
      }, [props]);

    async function setArticleInfoFromIdea() {
        console.log("setArticleInfoFromIdea started")
        setAuthor(props.cardObject.author);
        setTitle(props.cardObject.title);
        setDescription(props.cardObject.description);
        setSection(props.cardObject.section);
        console.log("article card!!!!: ", props.cardObject);
        console.log("section !!!", section)
      }


    async function handleDiscardAttempt() {
        const objectId = props.articleId
        console.log("handlediscard id: ", objectId)
        console.log("delete started")
        
        const Article = new Parse.Object('Article');
        const id = Article.set('objectId', objectId);
        
        console.log(id)

        try {
            let result = await Article.destroy();
            /* alert('Success! Article deleted with id: ' + result.id); */
            console.log('Success! Article deleted with id: ' + result.id)
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

    function handlePopupArticle() {
        props.setPopupArticle(false)
    }

      // This code is from https://dev.to/sanchithasr/3-ways-to-convert-html-text-to-plain-text-52l8
  function convertToPlain(description) {
    var temporaryText = document.createElement("div");
    temporaryText.innerHTML = description;
    return temporaryText.textContent || temporaryText.innerText || "";
  }

    async function createArticleInDB() {
        const Article = Parse.Object.extend("Article");
        const newArticle = new Article();
    
        const newDate = new Date(
          deadline.year,
          deadline.month,
          deadline.day
        );
    
        newArticle.set("title", title);
        newArticle.set("description", convertToPlain(description));
        newArticle.set("deadline", newDate);
        newArticle.set("section", section);
/*         newArticle.set("length", length); */
    
        try {
          let result = await newArticle.save();
          alert("Article created with ID: " + result.id);
          console.log("Article created with ID: " + result.id);
          props.setPopupNew(false);
/*           clearPopup(); */
        } catch (error) {
          alert("Failed to update object, with error code: " + error.message);
        }
      }


    return (props.popupArticle) ? (
        <div className="popup-page">
            <div className="popup">
                <section className="idea-container" >
                    {/* LEFT-COLUMN */}
                    <div className="idea-flex-left">
                        <CreatedByArticle articleId={props.articleId} ideaId={props.ideaId} author={author}/>
                        <TitleEdit title = {title} setTitle={setTitle}/>
                        <RichTextEditor description = {description} setDescription = {setDescription} />

                        {/* Dropdowns */}
                        <h5>Deadline</h5>
                        <DropdownCalendar deadline={deadline} setDeadline={setDeadline}/>
                        <Section section={section} setSection={setSection}/>
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
                                    <SaveButton saveAction={createArticleInDB} />
                                </div>
                        </div>
                    </div>

                    {/* RIGHT-COLUMN */}
                    <div className="idea-flex-right">
                        <div className="top-right">
                            <CloseWindow closeAction={handlePopupArticle}/>
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
