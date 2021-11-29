import React, { useState } from 'react';

import './RichTextEditor.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function RichTextEditor() {
    const [text, setText] = useState('')

    return (
    <div className = "container">
        <div className = "text-editor">
            <CKEditor
            editor={ClassicEditor}
            config={{placeholder: "Describe your idea..."}} 
            data= {text}
            onChange={(event, editor) => {
                    const data = editor.getData()
                    setText(data)    
                }}
            
            />
        </div>
    </div>
    ) 
}

export default RichTextEditor;
