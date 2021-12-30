import React, {useState} from 'react';
import Parse from 'parse';

// Styles
import './CommentForm.css';

// components
import SaveComment from '../buttons/SaveComment/SaveComment';

function CommentForm (props) {

    const user = Parse.User.current(); 
    const author = (Parse.User.current()).get("username");
    const image = user.get("userimage");
    const [activeComment, setActiveComment] = useState(false);
    const [commentInput, setCommentInput] = useState();

    function newComment(e) {
        setCommentInput(e.target.value);
    }

   const updateCommentList = async function () {
        const query = new Parse.Query("IdeaComment");
    
        try {
          query.equalTo("ideaId", props.ideaId);
          query.descending("createdAt");
          const comments = await query.find();
          props.setCommentResult(comments);
    
          return true;
        } catch (error) {
          alert(`Error! Is this the error?`);
          return false;
        }
      };


    async function addCommentToDB() {
        const IdeaComment = Parse.Object.extend('IdeaComment');
        const newComment = new IdeaComment();
        newComment.set('ideaId', props.ideaId);
        newComment.set("user", user.id);
        newComment.set("author", author);
        newComment.set("userImage", image);
        newComment.set("commentText", commentInput);
        console.log("add comment to database has started");

        try{
            let result = await newComment.save();
            updateCommentList();
            alert('Comment created with ID: ' + result.id);
            console.log('Comment updated with objectId: ' + result.id);

        } catch(error) {
            alert('Failed to update comment, with error code: ' + error.message);
        }
    }


    return (
        <>
        <h3>Comment</h3>
        <div className ="comment-form-container">
            <div className="comment-form" onClick={() => setActiveComment(!activeComment)}> 
                <div className="form-image-container"> 
                    <img className="comment-form-image" src={user.get("userimage").url()}/>
                </div>
                <input 
                className = "comment-content"
                placeholder = "Write your comment here.."
                type="text"
                value={commentInput}
                onChange={newComment}
                />
            </div>
            <SaveComment className="save-comment-btn" saveAction={addCommentToDB}/>
        </div>
        </>
    );
}

export default CommentForm;