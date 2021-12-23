import React, { useEffect, useState } from "react";
import Parse from "parse";
import "./../Popup.css";

//components
import TitleEdit from "../../title-edit/TitleEdit";
import SaveButton from "../../buttons/SaveButton/SaveButton";
import ProceedButton from "../../buttons/ProceedButton/ProceedButton";
import DiscardButton from "../../buttons/DiscardButton/DiscardButton";
import CloseWindow from "../../buttons/CloseWindow/CloseWindow";
import DropdownVisibility from "../../dropdowns/DropdownVisibility/DropdownVisibility";
import DropdownCalendar from "../../dropdowns/DropdownCalendar/DropdownCalendar";
import Section from "../../dropdowns/Section/Section";
import RichTextEditor from "../../rich-text-editor/RichTextEdior";
import CreatedBy from "../../createdBy/CreatedBy";
import CommentForm from "../../comment-form/CommentForm";
import CommentList from "../../commentList/CommentList";

function PopupIdea(props) {
  const [author, setAuthor] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [visibility, setVisibility] = useState();
  const [section, setSection] = useState();
  const [commentResult, setCommentResult] = useState();

  useEffect(() => {
    props.ideaCardObject && setIdeaInfo();
  }, [props]);

  async function setIdeaInfo() {
    setTitle(props.ideaCardObject.title);
    setDescription(props.ideaCardObject.description);
    setSection(props.ideaCardObject.section);
    setVisibility(props.ideaCardObject.visibility);
    setAuthor(props.ideaCardObject.author);
    setDate(convertDateStringToObject(props.ideaCardObject.expiration))
  }


  function clearPopup() {
    setTitle("");
    setDescription("");
    setDate();
    setVisibility("");
    setSection();
  }

  // This code is from https://dev.to/sanchithasr/3-ways-to-convert-html-text-to-plain-text-52l8
  function convertToPlain(description) {
    var temporaryText = document.createElement("div");
    temporaryText.innerHTML = description;
    return temporaryText.textContent || temporaryText.innerText || "";
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

  async function handleDiscardAttempt() {
    const objectId = props.ideaId;
    const Idea = new Parse.Object("Idea");
    const id = Idea.set("objectId", objectId);


    try {
      let result = await Idea.destroy();
      console.log("Success! Idea deleted with id: " + result.id);
      props.setPopup(false);
      clearPopup();
      return true;
    } catch (error) {
      alert(`Error ${error.message}`);
      return false;
    }
  }


  function handlePopupIdea() {
    props.setPopup(false);
  }


  async function updateIdeaInDB() {
    const objectId = props.ideaId;
    const Idea = new Parse.Object("Idea");

    const id = Idea.set("objectId", objectId);
    console.log(id);

    console.log("save idea id: " + id);
    Idea.set("title", title);
    Idea.set("description", convertToPlain(description));
    Idea.set("expirationS", convertDateObjectToString(date));
    Idea.set("section", section);
    Idea.set("visibility", visibility);
    try {
      let result = await Idea.save();
      alert("Idea updated with objectId: " + result.id);
      console.log("Idea updated with objectId: " + result.id);
      props.setPopup(false);
      clearPopup();
    } catch (error) {
      alert("Failed to update object, with error code: " + error.message);
    }
  }

  async function convertToArticle() {
    props.setPopup(false)
    props.setPopupArticle(true)

    const Article = Parse.Object.extend("Article")
    const newArticle = new Article()

    try {
      await newArticle.save()
    }
    catch(error) {
       alert(error)
   }

    await newArticle.fetch().then((latestArticle) => {
    console.log("latest article id ", latestArticle.id)
    newArticle.set("title", title).save()
    newArticle.set("description", convertToPlain(description)).save()
    newArticle.set("section", section).save()
    props.setArticleId(latestArticle.id)

    }, error => {
    alert(error)
    })
  }


  return props.popup ? (
    <div className="popup-page">
      <div className="popup">
        <section className="idea-container">
          {/* LEFT-COLUMN */}
          <div className="idea-flex-left">
            <CreatedBy ideaId={props.ideaId} author={author}/>
            <TitleEdit title={title} setTitle={setTitle} />
            <RichTextEditor
              description={description}
              setDescription={setDescription}
            />

            {/* Dropdowns */}
            <h5>Expiration Date</h5>
            <DropdownCalendar
              date={date}
              setDate={setDate}
            />
            <Section
              section={section}
              setSection={setSection}
            />
            <DropdownVisibility
              visibility={visibility}
              setVisibility={setVisibility}
            />

            {/* Attached articles */}
            <h5>Attached articles</h5>
            <p>No articles attached yet</p>
            <br />
            <br />
            <br />

            {/* Buttons */}
            <div className="align-bottons">
              <DiscardButton
                text="Discard"
                discardAction={handleDiscardAttempt}
              />
              <div className="right-buttons">
                <div className="convert-button">
                  <ProceedButton text="Convert to Article" proceedAction={convertToArticle}/>
                </div>
                <SaveButton saveAction={updateIdeaInDB} />
              </div>
            </div>
          </div>

          {/* RIGHT-COLUMN */}
          <div className="idea-flex-right">
            <div className="top-right">
              <CloseWindow closeAction={handlePopupIdea} />
            </div>

            <h3>Comments</h3>
            <CommentForm
              ideaId={props.ideaId}
              setCommentResult={setCommentResult}
            />
            <CommentList commentResult={commentResult} />
          </div>
        </section>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopupIdea;
