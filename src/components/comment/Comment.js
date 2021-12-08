import React from 'react';
import Parse from 'parse';
import './Comment.css';

function Comment() {
    const user = Parse.User.current(); 


    return (
        <div className="comment-container">
            <div className="comment">
                <div className="image-container">
                    <img className="image-test" scr={user.get("userimage").url()}/>
                    </div>
                    <p className="comment-content"> Comment content is displayed here, it might be longer than you want it to be </p>
            </div>
        </div>
    );
}

export default Comment;