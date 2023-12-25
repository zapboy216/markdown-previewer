import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h2>Impressive Markdown Previewer</h2>
          <p>by zapboy216</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h2>Editor</h2>
          <textarea id="editor" className="form-control" rows="10">
            {/* Default markdown text will go here */}
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
