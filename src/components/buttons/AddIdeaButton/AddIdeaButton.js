import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

// Styles
import "./AddIdeaButton.css";

const AddIdeaButton = ({ text, setPopupNew }) => {
  function handleClickPopup() {
    console.log("bt clicked!");
    setPopupNew(true);
  }

  return (
    <button className="addidea-iconbtn" onClick={handleClickPopup}>
      <div className="button-text-white">
        <IoIosAddCircleOutline className="addidea-icon" />
        {text}
      </div>
    </button>
  );
};

export default AddIdeaButton;
