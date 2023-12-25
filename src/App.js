import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2>Editor</h2>
          <textarea id="editor" className="form-control" rows="10">
            # Welcome to my React Markdown Previewer!

## This is a sub-heading...

[Visit GitHub](https://github.com)

`<div>some inline code</div>`


          </textarea>
        </div>
        <div className="col-md-6">
          <h2>Preview</h2>
          <div id="preview" className="border p-3">
            {/* Rendered HTML from markdown will go here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
