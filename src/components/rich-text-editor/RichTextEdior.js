import React, { useState } from 'react';

import './RichTextEditor.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function RichTextEditor() {

    const [value, setValue] = useState("")

    const handleOnChange = (e,editor) => {
        const data = editor.getData()
        setValue(data)
    }

    return (
        <div className = "container">
            <h1>"Hello world"</h1>
            <CKEditor
                editor = {ClassicEditor}
                onChange = {handleOnChange}
            />
            <div>
                {value}
            </div>
        </div>
    ) 
}

export default RichTextEditor;
