import React, { useEffect } from "react";
import "./CommentList.css";
import { List } from "antd";

function CommentList(props) {
  // En useEffect er en function, der altid bliver kaldt top-level i en component.
  // En useEffect tager en anonym function. Den kan have 3 syntakser.
  // useEffect(()=>{
  //do something
  // },[]) den tager et dependency array
  /*  
        1) useEffect(()=>{}) uden dependency array, kører på hver render
        2) useEffect(()=>{},[]) med tomt dependency array, kører på initial render
        3) useEffect(()=>{},[x,y]) tager et depency array, denpendencys er et state, vil køre når de ændrer sig. 
  */

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
                    <img className="image-test" src={item.get("userImage").url()} alt="test" />
                    <div className="comment-text-container">
                      <p className="comment-author"> {item.get("author")}</p>
                      <p className="comment-content">
                        {item.get("commentText")}
                      </p>
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

/* // const [author, setAuthor] = useState();
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
} */
