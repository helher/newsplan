import React from "react";
import { GoX } from "react-icons/go";

// Styles
import "./DiscardButtonSmall.css";

const DiscardButtonSmall = ({ saveAction }) => {

  return (
      <div className="job-button-container">
        <button className="discard-job-btn" onClick={saveAction}>
          <GoX className="check-icon-discard" />
        </button>
      </div>
  );
};

export default DiscardButtonSmall;
