import React from 'react';
import './PopupIdea.css';

function PopupIdea() {
    return (
        <section className="idea-container">
            <div className="test">
                <div className="idea-content-column">
                    <h1>Title of Idea</h1>
                    <div className="rich-text-editor">
                        <div className="rich-text-toolbar">
                            <form>
                                <input type="text" placeholder="Insert text here"></input>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="comments-column">
                    <h3>Comments</h3>
                    
                </div>
            </div>
        </section>
    )
}

export default PopupIdea;
