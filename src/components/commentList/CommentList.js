import React, {useState} from "react";
import Parse from 'parse';
import "./CommentList.css";

function CommentList(props) {

  // const [author, setAuthor] = useState();
  // const [image, setImage] = useState();
  // const [date, setDate] = useState();
  // const [commentText, setCommentText] = useState();

  async function retrieveComments() {
    const comment = Parse.Object.extend("IdeaComment");
    const query = new Parse.Query(comment);
    query.equalTo("ideaId", props.ideaId);
    const results = await query.find();
    alert("Successfully retrieved " + results.length + " comments.");

    // Do something with the returned Parse.Object values
    for (let i = 0; i < results.length; i++) {
      const object = results[i];
      console.log('author:' + object.get('author') + 'commentText' + object.get('commentText'));
      // setAuthor(object.get('author'));
      // setImage(object.get('userImage'));
      // setDate(object.get('createdAt'));
      // setCommentText(object.get('commentTect'));
    }
}


  return (
    <div className="comment-container">
      <div> {retrieveComments} </div>
    </div>
  );
}

export default CommentList;
