

import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('Enter Text here');

  const handleUpClick = () => {
    if (typeof text !== 'string') {
      console.error("Text is undefined or not a string");
      return;
    }
    const newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnchange = (e) => {
    setText(e.target.value); 
  };

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnchange} id="myBox"rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}> Convert to Uppercase </button>
    </div>
  );
}



