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
<p>
<div className="h-100 p-4 bg-light border rounded-3">
          <h2>Preview you text here</h2>
          {textEntered ? textEntered : 'Your text will appear here'}
          </div>
</p>
<div className="row align-items-md-stretch">
      <div className="col-md-6">
        <div className="h-100 p-5 text-white bg-dark rounded-3">
          <h2>About Project</h2>
          <p>The React Native project you have created is a simple text converter application that allows users to enter text and convert it into either lowercase or uppercase. The project includes a button that clears all the text entered by the user, making it easy to start over if needed.
The user interface of the project features a preview area where the converted text is displayed, making it easy for users to view the output of their text conversion.</p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="h-100 p-5 bg-light border rounded-3">
          <h2>Feature</h2>
          <p>React Native is a framework that allows developers to build mobile applications using React, a popular JavaScript library for building user interfaces. This project demonstrates how React Native can be used to create a simple, yet functional application that can be used on mobile devices.</p>
<p>Overall, this project is a great example of how React Native can be used to create simple, user-friendly applications that provide value to users. With its focus on simplicity and ease of use, this project is sure to be a hit with users looking for a quick and easy way to convert text on their mobile devices.
</p>
        </div>
      </div>
    </div>
    
</div>
  )
}

export default TextForm ;