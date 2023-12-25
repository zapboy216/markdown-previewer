import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import marked from 'marked';

function App() {
  // State to hold the markdown text
  const [markdown, setMarkdown] = useState(initialMarkdown);

  // UseEffect to render the initial markdown
  useEffect(() => {
    const initialRender = document.getElementById('preview');
    initialRender.innerHTML = marked(initialMarkdown);
  }, []);

  // Function to handle change in textarea and convert markdown to HTML
  const handleChange = (event) => {
    setMarkdown(event.target.value);
    const renderedMarkdown = marked(event.target.value);
    document.getElementById('preview').innerHTML = renderedMarkdown;
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h2>Impressive Markdown Previewer</h2>
          <p>by zapboy216</p>
        </div>
      </div>

      
      <textarea 
        id="editor" 
        className="form-control" 
        rows="10"
        value={markdown}
        onChange={handleChange}
      />
      <div id="preview" className="border p-3"></div>
    </div>
  );
}

// Initial markdown text
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

![React Logo](https://reactjs.org/logo-og.png)

**This is bold text**
`;

export default App;
