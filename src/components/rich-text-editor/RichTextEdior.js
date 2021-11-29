import React, { useState } from 'react';

import './RichTextEditor.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function RichTextEditor({descriptionSeleted,setDescriptionSelected}) {


    return (
    <div className = "container"> 
        <div className = "text-editor">
            <CKEditor
            editor={ClassicEditor}
            config={{placeholder: "Describe your idea..."}} 
            data= {descriptionSeleted}
            onChange={(event, editor) => {
                    const data = editor.getData()
                    setDescriptionSelected(data)    
                }}
            
            />
        </div>

    </div>
    ) 
}

export default RichTextEditor;
