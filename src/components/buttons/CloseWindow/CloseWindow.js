import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

// Styles
import "./CloseWindow.css";

const CloseWindow = ({ closeAction }) => {
  return (
    <button className="close-button">
      <IoIosCloseCircleOutline className="closing-tag" onClick={closeAction} />
    </button>
  );
};

export default CloseWindow;
