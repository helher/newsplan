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
import { propTypes } from "react-bootstrap/esm/Image";

function PopupIdea(props) {
  /*     console.log("ideaid", props.ideaId) */
  /*     console.log("popup", props.popup) */
const [author, setAuthor] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [visibility, setVisibility] = useState();
  const [section, setSection] = useState();
  const [commentResult, setCommentResult] = useState();

  useEffect(() => {
    props.cardObject && setIdeaInfo();
  }, [props]);

  /*       useEffect(() => {
        console.log("from useEffect in popup: ", props.cardObject);
      }, [props.cardObject]) */

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

  async function handleDiscardAttempt() {
    const objectId = props.ideaId;
    console.log("handlediscard id: ", objectId);
    console.log("delete started");

    const Idea = new Parse.Object("Idea");
    const id = Idea.set("objectId", objectId);

    console.log(id);

    try {
      let result = await Idea.destroy();
      /* alert('Success! Idea deleted with id: ' + result.id); */
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

  function convertDateToObjectDate(newDate) {
    const objectDate = {
      year: newDate.getFullYear(),
      month: newDate.getMonth(),
      day: newDate.getDate(),
    };

    return objectDate;
  }

  async function setIdeaInfo() {
    setTitle(props.cardObject.title);
    setDescription(props.cardObject.description);
    setSection(props.cardObject.section);
    setVisibility(props.cardObject.visibility);
    setDate(convertDateToObjectDate(props.cardObject.expirationDate));
    setAuthor(props.cardObject.author);
  }

  async function updateIdeaInDB() {
    const objectId = props.ideaId;
    console.log("save idea started");
    const Idea = new Parse.Object("Idea");

    const newDate = new Date(
      date.year,
      date.month,
      date.day
    );

    const id = Idea.set("objectId", objectId);
    console.log(id);

    console.log("save idea id: " + id);
    Idea.set("title", title);
    Idea.set("description", convertToPlain(description));
    Idea.set("expiration", newDate);
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

  async function createArticleInDB() {
      props.setPopup(false)
      props.setPopupArticle(true)

    const Article = Parse.Object.extend("Article")
    const newArticle = new Article()

    try {
        let result = await newArticle.save()
        let idArticle = result.id
        props.setArticleId(idArticle)
        console.log("id article from popupidea", idArticle)
    }
    catch(error) {
        alert(error.message)
    }
        await newArticle.fetch().then((newArticle) => {
        const id = newArticle.id
        }, error => {
        alert(error.message)
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
                  <ProceedButton text="Convert to Article" proceedAction={createArticleInDB}/>
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
