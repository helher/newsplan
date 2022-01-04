import React from "react";

// Styles
import "./DiscardButton.css";

const DiscardButton = ({ text, discardAction }) => {
  return (
    <div>
      <button className="discard-btn" onClick={discardAction}>
        <div class="discardbutton-text">{text}</div>
      </button>
    </div>
  );
};

export default DiscardButton;
