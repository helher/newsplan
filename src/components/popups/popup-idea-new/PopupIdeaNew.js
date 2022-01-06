import React, { useState } from "react";
import Parse from "parse";

// Styles
import "./../Popup.css";

// functions
import { convertDateObjectToString } from "../popupConversions";
import { convertToPlain } from "../popupConversions";
import { createIdea } from "../../../database/REST";

//components
import TitleEdit from "../../title-edit/TitleEdit";
import SaveButton from "../../buttons/SaveButton/SaveButton";
import DiscardButton from "../../buttons/DiscardButton/DiscardButton";
import CloseWindow from "../../buttons/CloseWindow/CloseWindow";
import DropdownVisibility from "../../dropdowns/dropdown-visibility/DropdownVisibility";
import DropdownCalendar from "../../dropdowns/dropdown-calendar/DropdownCalendar";
import RichTextEditor from "../../rich-text-editor/RichTextEdior";
import CreatedByNew from "../../created-by/CreatedByNew";
import Section from "../../dropdowns/section/Section";

function PopupIdeaNew(props) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState({
    day: 1,
    month: 1,
    year: 2023,
  });
  const [visibility, setVisibility] = useState();
  const [section, setSection] = useState();

  function clearPopup() {
    setTitle("");
    setDescription("");
    setDate({
      day: 1,
      month: 1,
      year: 2023
    });
    setVisibility("");
    setSection();
  }

  function handlePopupIdeaNew() {
    props.setPopupNew(false);
    clearPopup();
  }

  async function createIdeaInDB() {
    const Idea = Parse.Object.extend("Idea");
    const newIdea = new Idea();

    newIdea.set("user", Parse.User.current());
    newIdea.set("userimage", Parse.User.current().get("userimage"));
    newIdea.set("author", Parse.User.current().get("username"));
    newIdea.set("title", title);
    newIdea.set("description", convertToPlain(description));
    newIdea.set("expiration", convertDateObjectToString(date));
    newIdea.set("section", section);
    newIdea.set("visibility", visibility);

    try {
      let result = await newIdea.save();
      alert("Idea created with ID: " + result.id);
      console.log("Idea created with ID: " + result.id);
      props.setPopupNew(false);
      clearPopup();
    } catch (error) {
      alert("Failed to update object, with error code: " + error.message);
    }
  }

  return props.popupNew ? (
    <div className="popup-page">
      <div className="popup">
        <section className="idea-container-new">
          {/* LEFT-COLUMN */}
          <div className="idea-flex-left">
            <div className="idea-top-left">
              <CreatedByNew />
              <CloseWindow closeAction={handlePopupIdeaNew} />
            </div>
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
            />{" "}
            <DropdownVisibility
              visibility={visibility}
              setVisibility={setVisibility}
            />
            {/* Attached articles */}
            <br />
            <br />
            {/* Buttons */}
            <div className="align-bottons">
              <DiscardButton
                text="Discard"
                discardAction={handlePopupIdeaNew}
              />

              <div className="right-buttons">
                <SaveButton saveAction={createIdeaInDB} />
              </div>
            </div>
          </div>
        </section>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopupIdeaNew;
