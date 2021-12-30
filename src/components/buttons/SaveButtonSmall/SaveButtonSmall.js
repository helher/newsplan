import React from "react";
import { GoCheck } from "react-icons/go";

// Styles
import "./SaveButtonSmall.css";

const SaveButtonSmall = ({ saveAction }) => {
  console.log("button clicked");

  return (
      <div className="job-button-container">
        <button className="save-job-btn" onClick={saveAction}>
          <GoCheck className="check-icon" />
        </button>
      </div>
  );
};

export default SaveButtonSmall;
