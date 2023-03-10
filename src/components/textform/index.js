import React, { useState } from 'react'

const TextForm = () => {
    const [textEntered, setTextEntered] = useState('');
    const onChangeText = (event) => {
        setTextEntered(event.target.value);
    }
    const onsubmitText = () => {
        setTextEntered(textEntered.toUpperCase());
    }
  return (
<div>
<div className="mb-3">
  <label htmlFor="myBox" className="form-label"> Add text here</label>
  <textarea className="form-control" id="myBox" rows="3" value={textEntered}  onChange={onChangeText}></textarea>
</div>
<button className='btn btn-primary' onClick={onsubmitText} >Convert to Uppercase</button>
</div>
  )
}

export default TextForm ;