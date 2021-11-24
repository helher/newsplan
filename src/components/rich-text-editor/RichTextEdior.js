import React from 'react';
import './RichTextEditor.css';

function RichTextEditor() {
    return (
        <div>
            <p>Toolbox</p>
            <form>
                <input className="text-input" type="text" placeholder="Insert text here"></input>
            </form>
        </div>
    ) 
}

export default RichTextEditor;