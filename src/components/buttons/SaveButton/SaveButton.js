import React from "react";

// Styles
import "./SaveButton.css";

const SaveButton = ({ saveAction }) => {
  return (
    <div>
      <button className="save-btn" onClick={saveAction}>
        <div class="button-text-white">Save</div>
      </button>
    </div>
  );
};

export default SaveButton;
