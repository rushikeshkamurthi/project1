import React, { useState } from 'react'

const TextForm = () => {
    const [textEntered, setTextEntered] = useState('');
    const onChangeText = (event) => {
        setTextEntered(event.target.value);
    }
    const toUppercase = () => {
        setTextEntered(textEntered.toUpperCase());
    }
    const toLowercase = () => {
      setTextEntered(textEntered.toLowerCase());
  }
  const clearText = () => {
    setTextEntered("");
}
  return (
<div>
<div className="mb-3">
  <h1>Add text here</h1>
  <textarea className="form-control" id="myBox" rows="3" value={textEntered}  onChange={onChangeText}></textarea>
</div>
<button className='btn btn-primary mx-2'  onClick={toUppercase} >Convert to Uppercase</button>
<button className='btn btn-primary mx-2' onClick={toLowercase} >Convert to Lowercase</button>
<button className='btn btn-danger mx-2' onClick={clearText} >Clear text</button>

<h4>Total word and character count</h4>
<p>{textEntered.split(" ").length} words and {textEntered.length} characters
</p>
<h4>Preview Your Text here</h4>
<p>{textEntered}
</p>
</div>
  )
}

export default TextForm ;