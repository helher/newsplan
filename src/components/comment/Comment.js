import React from "react";
import Parse from "parse";
import "./Comment.css";
import imgtest from "./LouiAvatar.jpg";

function Comment(props) {

  return (
    <div className="comment-container">
      <div className="comment">
        <img className="image-test" src={imgtest} alt="test" />
        <p className="comment-content">
          {" "}
          Comment content is displayed here, it might be longer than you want it
          to be{" "}
        </p>
      </div>
    </div>
  );
}

export default Comment;
