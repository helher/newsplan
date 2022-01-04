import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

// Styles
import "./AddEmployeeButton.css";

const AddEmployeeButton = ({ text }) => {
  function handleClickPopup() {}

  return (
    <button className="addemployee-iconbtn" onClick={handleClickPopup}>
      <div class="button-text-white">
        <IoIosAddCircleOutline className="addemployee-icon" />
        {text}
      </div>
    </button>
  );
};

export default AddEmployeeButton;
