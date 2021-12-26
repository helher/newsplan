import React, { useEffect } from "react";
import "./CommentList.css";
import { List } from "antd";

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
                        alt="test"
                      />
                    </div>
                    <div className="comment-text-container">
                      <p className="comment-author"> {item.get("author")}</p>
                      <p className="comment-date">
                        {" "}
                        {item.get("createdAt").toString().substring(4, 21)}
                      </p>
                      <h5 className="comment-text">
                        {item.get("commentText")}
                      </h5>
                    </div>
                  </div>
                </div>
              </List.Item>
            )}
          />
        )}
    </div>
  );
}

export default CommentList;

