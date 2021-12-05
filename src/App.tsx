import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

import "./App.css";

function App() {
  const editorRef = useRef<any>(null);

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <div className="wrapper">
      <header className="header">
        <h1>Text Editor</h1>
        <span> Free app editor text</span>
      </header>
      <main className="main">
        <Editor
          apiKey={process.env.REACT_APP_TINYMCE_API_KEY}
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>Digite aqui um novo texto...</p>"
          init={{
            height: 500,
            menubar: false,
            language: "pt_BR",
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste help wordcount",
            ],
            toolbar:
              "undo redo | image | formatselect | " +
              "bold italic backcolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat",
            image_title: true,
            file_picker_types: "image",
            automatic_uploads: true,
            content_style:
              "body { font-family:Roboto,Arial,sans-serif; font-size:14px }",
          }}
        />

        <button onClick={log}>Salvar</button>
      </main>
    </div>
  );
}

export default App;
