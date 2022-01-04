import React from "react";
import { List } from "antd";

// Styles
import "./CommentList.css";
import DiscardButtonSmall from "../buttons/DiscardButtonSmall/DiscardButtonSmall";

function CommentList(props) {

  return (
    <div>
      {props.commentResult !== null &&
        props.commentResult !== undefined &&
        props.commentResult.length > 0 && (
          <List
            dataSource={props.commentResult}
            renderItem={(item) => (
              <List.Item className="comment_list">
                <div className="comment-container">
                  <div className="comment">
                    <div className="comment-image-container">
                      <img
                        className="image-user-comment"
                        src={item.get("userImage").url()}
                        alt="comment author"
                      />
                    </div>
                    <div className="comment-text-container">
                      <p className="comment-author"> {item.get("author")}</p>
                      <p className="comment-date">
                        {" "}
                        {item.get("createdAt").toString().substring(4, 21)}
                      </p>
                      <h5>
                        {item.get("commentText")}
                      </h5>
                    </div>
                  </div>
                  <DiscardButtonSmall/>
                </div>
              </List.Item>
            )}
          />
        )}
    </div>
  );
}

export default CommentList;

