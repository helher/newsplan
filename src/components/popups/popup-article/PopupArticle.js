import React , { useState, useEffect } from 'react'
import './PopupArticle.css'
import Parse from 'parse';


//components
import TitleEdit from '../../title-edit/TitleEdit';
import RichTextEditor from '../../rich-text-editor/RichTextEdior';
import DropdownCalendar  from '../../dropdowns/DropdownCalendar/DropdownCalendar';
import DropdownLength from './../../dropdowns/DropdownLength/DropdownLength';
import CreatedByArticle from './../../createdBy/CreatedByArticle';
import Section from '../../dropdowns/Section/Section';
import AssignEmployee from '../../dropdowns/assign-employee/AssignEmployee';

//buttons
import ProceedButton from '../../buttons/ProceedButton/ProceedButton';
import SaveButton from '../../buttons/SaveButton/SaveButton';
import DiscardButton from '../../buttons/DiscardButton/DiscardButton';
import CloseWindow from '../../buttons/CloseWindow/CloseWindow';



function PopupArticle(props) {

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [date, setDate] = useState();
    const [section, setSection] = useState()
    const [length, setLength] = useState()
    const [workload, setWorkload] = useState()
    const [selectedEmployee, setSelectedEmployee] = useState()
    const [ideaId, setIdeaId] = useState()
    const [ideaAuthor, setIdeaAuthor] = useState()

    useEffect(() => {
        props.ideaCardObject && setArticleStateInfoFromIdea();
      }, [props.articleId]);

      useEffect(() => {
        props.articleCardObject && setArticleState();
      }, [props.articleCardObject]);

    async function setArticleStateInfoFromIdea() {
        console.log("setArticleInfoFromIdea started..", props.ideaCardObject)
        setTitle(props.ideaCardObject.title);
        setDescription(props.ideaCardObject.description);
        setSection(props.ideaCardObject.section);
        setIdeaId(props.ideaCardObject.id);
        setIdeaAuthor(props.ideaCardObject.author);
      }

      async function setArticleState() {
        setIdeaAuthor(props.articleCardObject.author);
        setTitle(props.articleCardObject.title);
        setDescription(props.articleCardObject.description);
        setDate(convertDateStringToObject(props.articleCardObject.deadline))
        setSection(props.articleCardObject.section);
        setLength(props.articleCardObject.length)
        setIdeaId(props.articleCardObject.ideaId)
        setIdeaAuthor(props.articleCardObject.ideaAuthor)
      }


      function convertDateObjectToString(date) {
        let month = `${date.month}`
        const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        let newMonth = months[month]
    
        const newDateString = JSON.stringify(`${newMonth} ${date.day} ${date.year}`)
        const completeNewDateString = newDateString.substring(1, newDateString.length - 1);
    
        return completeNewDateString
      }

      function convertDateStringToObject(date) {
        const stringArr = date.split(" ");
    
        const dateObject = {
          day: stringArr[1],
          month: stringArr[0],
          year: stringArr[2]
        }
    
        let month = `${dateObject.month}`
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        let newMonth = months.indexOf(month)
    
        const newDateObject = {
          day: parseInt(stringArr[1]),
          month: newMonth+1,
          year: parseInt(stringArr[2])
        }
    
        return newDateObject
      }


      async function updateArticleInDB() {
          console.log("updateArticleInDB with article id: ", props.articleId)
          const objectId = props.articleId;
          const Article = new Parse.Object("Article");
  
          Article.set("objectId", objectId);
          Article.set("title", title);
          Article.set("description", convertToPlain(description));
          Article.set("deadline", convertDateObjectToString(date))
          Article.set("section", section);
          Article.set("length", length); 

          try {
            let result = await Article.save();
            console.log("Article updated with objectId: " + result.id);
            props.setPopupArticle(false)
          } catch (error) {
            alert("Failed to update article object from PopupArticle, with error code: " + error.message);
          }
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

    return (props.popupArticle) ? (
        <div className="popup-page">
            <div className="popup">
                <section className="idea-container" >
                    {/* LEFT-COLUMN */}
                    <div className="idea-flex-left">
                        <CreatedByArticle articleId={props.articleId} ideaId={ideaId} ideaAuthor={ideaAuthor}/>
                        <TitleEdit title = {title} setTitle={setTitle}/>
                        <RichTextEditor description = {description} setDescription = {setDescription} />

                        {/* Dropdowns */}
                        <h5>Deadline</h5>
                        <DropdownCalendar date={date} setDate={setDate}/>
                        <Section section={section} setSection={setSection}/>
                        <DropdownLength length={length} setLength={setLength}/>
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
                                    <SaveButton saveAction={updateArticleInDB} />
                                </div>
                        </div>
                    </div>

                    {/* RIGHT-COLUMN */}
                    <div className="idea-flex-right">
                        <div className="top-right">
                            <CloseWindow closeAction={handlePopupArticle}/>
                        </div>    
                        <h3>Job</h3>
                        <AssignEmployee selectedEmployee={selectedEmployee} setSelectedEmployee={setSelectedEmployee}/>
                    </div>
                </section>
                { props.children }
            </div>
        </div>
    ) : ""
}

export default PopupArticle
