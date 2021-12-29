import React from "react";

// Styles
import "./RichTextEditor.css";

// Third Party Editors
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function RichTextEditor({ description, setDescription }) {
  return (
    <div className="text-editor">
      <CKEditor
        editor={ClassicEditor}
        config={{ placeholder: "Describe your idea..." }}
        data={description}
        onChange={(event, editor) => {
          const data = editor.getData();
          setDescription(data);
        }}
      />
    </div>
  );
}

export default RichTextEditor;
