import React, { useState } from 'react';

export default function Textfrom(props) {

  const handleUpClick = ()=>{
    // console.log('Convert to Uppercase has clicked');
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase','success');
  }
  
  const handleLoClick = ()=>{
    // console.log('Convert to Lowercase has clicked');
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase','success');
  }

  const handleCopy = ()=>{
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copied to clipboard','success');
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert('Extraspaces Removed','success');
  }

  // const handleBoldClick = ()=>{
  //   if(boldStyle.fontWeight === 'normal'){
  //     let newText = text.fontWeight('bold');
  //     setText(newText);
  //   }
  //   else{
  //     let newText = `<b>text</b>`;
  //     setText(newText);
  //   }
  //   let newText = ;
  //   setText(newText);
  // }

  const handleClearClick = ()=>{
    // console.log('Convert to Lowercase has clicked');
    let newText = '';
    setText(newText);
    props.showAlert('Text has been cleared','success');
  }

  const handleOnChange = (event)=>{
    // console.log('On change has clicked');
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  // const [boldStyle, setBlodStyle] = useState(fontWeight = 'bold');
  // text = new_text; //this the wrong way to set state
  // setTexr(new_text); //this the right way to set state

  return (
    <>
      <div className="container" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
        <div className="mb-3 my-4">
        <h1>{props.heading}</h1>
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6" style={{backgroundColor: props.mode === 'dark'? 'gray' : 'white', color:props.mode === 'dark'? 'white' : 'black'}} ></textarea>
          <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} my-2`} onClick={handleUpClick} >Convert to Uppercase</button>
          <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} my-2 mx-2`} onClick={handleLoClick}>Convert to Lowercase</button>
          {/* <button className="btn btn-primary my-2 mx-2" onClick={handleBoldClick} >Bold the Text</button> */}
          <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} my-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} my-2 mx-2`} onClick={handleCopy}>Copy the Text</button>
          <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} my-2`} onClick={handleClearClick} >Clear the Text</button>
        </div>
      </div>

      <div className="container" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words {text.length} charcter</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length === 0 ? 'Enter text to to preview here...' : text}</p>
      </div>
    </>
  )
}
