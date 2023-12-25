import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { marked } from 'marked'; // Import the marked library

function App() {
  // State to store the current markdown text
  const [markdown, setMarkdown] = useState(initialMarkdown);

  // Function to handle changes in the textarea
  const handleChange = (event) => {
    const newMarkdown = event.target.value;
    setMarkdown(newMarkdown);
  };

  // Function to convert markdown text to HTML
  const createMarkup = () => {
    return { __html: marked(markdown) };
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h2>Impressive Markdown Previewer</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h2>Editor</h2>
          <textarea 
            id="editor" 
            className="form-control" 
            rows="10"
            value={markdown}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <h2>Preview</h2>
          <div 
            id="preview" 
            className="border p-3"
            dangerouslySetInnerHTML={createMarkup()}
          />
        </div>
      </div>
    </div>
  );
}

// Initial markdown to display in the editor
const initialMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...

[Visit GitHub](https://github.com)

\`<div>some inline code</div>\`

\`\`\`
// this is a code block
function helloWorld() {
  console.log("Hello, world!");
}
\`\`\`

- This is a list item

> Blockquote


**This is bold text**
`;

export default App;
