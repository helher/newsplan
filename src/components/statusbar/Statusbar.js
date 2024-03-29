import React from "react";

// Styles
import "./Statusbar.css";

const Statusbar = ({ status }) => {
  function ColorWidth(color, width) {
    return (
      <div
        className="cw"
        style={{ backgroundColor: color, width: width }}
      ></div>
    );
  }

  switch (status) {
    case "noassigned":
      return (
        <div className="bar">
          {ColorWidth("var(--statusbar-neutral)", "0px")}
        </div>
      );
    case "planned":
      return (
        <div className="bar">
          {ColorWidth("var(--statusbar-neutral)", "50px")}
        </div>
      );
    case "approved":
      return (
        <div className="bar">
          {ColorWidth("var(--statusbar-approved)", "190px")}
        </div>
      );
    case "accepted":
      return (
        <div className="bar">
          {ColorWidth("var(--statusbar-neutral)", "100px")}
        </div>
      );
    case "onhold":
      return (
        <div className="bar">
          {ColorWidth("var(--statusbar-onhold)", "100px")}
        </div>
      );
    case "finished":
      return (
        <div className="bar">
          {ColorWidth("var(--statusbar-neutral)", "150px")}
        </div>
      );
    case "warning":
      return (
        <div className="bar">
          {ColorWidth("var(--statusbar-warning)", "190px")}
        </div>
      );
    default:
      return null;
  }
};

export default Statusbar;
