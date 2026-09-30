
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


    const handleOnChange =(event) => {
        //console.log("On change");
        setText(event.target.value);  //event.target.value is used to get the value of the text area and setText is used to update the value of the text variable
    }

    const [text, setText ] = useState("Enter text here");  //text is a state variable and setText is a function which is used to update the value of text variable and useState is a hook which is used to create a state variable and it takes initial value of the variable as an argument
    
    //text = "new text";  //wrong way to change the state variable
    //setText("new text");  //correct way to change the state variable 
   
    return (
    <>   
    <div className ="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
        {/*<label forHTML="myBox" className="form-label">Example textarea</label>*/}
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>  
        <button className="btn btn-primary mx-2" onClick={handleUppercaseClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowercaseClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    
    </div>

    <div className ="container my-3">
        <h2>Your Text Summary</h2>
        <p> {text.split(" ").length} words and  {text.length} characters</p>               {/*text.split(" ").length is used to count the number of words in the text area and text.length is used to count the number of characters in the text area */}
        <p> {0.008 * text.split(" ").length} Minutes to read</p>                           {/*0.008 is the average time taken to read a word and text.split(" ").length is used to count the number of words in the text area */}
        <h3>Preview</h3>
        <p>{text}</p>
    
    </div>   

    </>    
  )
}
