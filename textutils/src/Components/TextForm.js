
import React, {useState} from 'react'

export default function Textform(props) {
    const handleUppercaseClick = () => {
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();               
        setText(newText);  //setText is used to update the value of the text variable and newText is a variable which is used to store the value of the text variable after converting it to uppercase
    }


    const handleLowercaseClick = () => {
        //console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();               
        setText(newText);  //setText is used to update the value of the text variable and newText is a variable which is used to store the value of the text variable after converting it to lowercase
    }


    const handleClearClick = () => {
        //console.log("Clear was clicked" + text);
        let newText = '';               
        setText(newText);  //setText is used to update the value of the text variable and newText is a variable which is used to store the value of the text variable after clearing it
    }


    const handleCopy = () => {
        //console.log("Copy was clicked");
        var text = document.getElementById("myBox"); 
        text.select();
        navigator.clipboard.writeText(text.value); 
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/); {/*split the text by one or more spaces and store it in an array and /[ ]+/ is a regular expression */}
        newText = newText.join(" ");  //join the array elements with a single space
        setText(newText);  //setText is used to update the value of the text variable and newText is a variable which is used to store the value of the text variable after removing extra spaces
    }

    const handleOnChange =(event) => {
        //console.log("On change");
        setText(event.target.value);  //event.target.value is used to get the value of the text area and setText is used to update the value of the text variable
    }

    const [text, setText ] = useState("Enter text here");  //text is a state variable and setText is a function which is used to update the value of text variable and useState is a hook which is used to create a state variable and it takes initial value of the variable as an argument
    
    //text = "new text";  //wrong way to change the state variable
    //setText("new text");  //correct way to change the state variable 
    
    return (
    <>   
    <div className ="container" style = {{color : props.mode === 'dark' ? ' white' : '#042733'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        {/*<label forHTML="myBox" className="form-label">Example textarea</label>*/}
        <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor : props.mode === 'dark' ? 'gray' : 'white', color : props.mode === 'dark' ? ' white' : '#042733'}} id="myBox" rows="8"></textarea>   {/*we use value={text} to set the value of the text area to the value of the text variable and we use onChange={handleOnChange} to call the handleOnChange function when the value of the text area changes and and in style we use {{}} first for js and second for object we use style = {{backgroundColor : {props.mode === 'light' ? 'dark' : 'light'}}} to change the background color of the text area based on the value of props.mode */}
        </div>  
        <button className="btn btn-primary mx-2" onClick={handleUppercaseClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowercaseClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>

    <div className ="container my-3" style = {{color : props.mode === 'dark' ? ' white' : '#042733'}}>
        <h2>Your Text Summary</h2>
        <p> {text.split(" ").length} words and  {text.length} characters</p>               {/*text.split(" ").length is used to count the number of words in the text area and text.length is used to count the number of characters in the text area */}
        <p> {0.008 * text.split(" ").length} Minutes to read</p>                           {/*0.008 is the average time taken to read a word and text.split(" ").length is used to count the number of words in the text area */}
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter some text in the textbox above to preview it here."}</p>
    
    </div>   

    </>    
  )
}
