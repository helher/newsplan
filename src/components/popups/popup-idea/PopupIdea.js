import React from 'react';
import './PopupIdea.css';
import { BiBrain } from 'react-icons/bi';

function PopupIdea() {
    return (
        <section className="idea-container">
            <div className="idea-flex-left">
                <div className="logo-and-id">
                    <BiBrain className="idea-icon"/>
                    <p className="createdby-text"><b>Idea</b> created by HH</p>
                </div>
                
                <h1>Title of idea</h1>
                <div className="rich-text-editor">
                    <div className="rich-text-toolbar">
                        <p>Toolbox</p>
                        <form>
                            <input className="text-input" type="text" placeholder="Insert text here"></input>
                        </form>
                    </div>
                </div>
            </div>

                <div className="idea-flex-right">
                    <h3>Comments</h3>
                    
                </div>
        </section>
    )
}

export default PopupIdea;
