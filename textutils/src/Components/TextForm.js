
import React, {useState} from 'react'

export default function Textform(props) {
    const handleUppercaseClick = () => {
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();               
        setText(newText);  //setText is used to update the value of the text variable and newText is a variable which is used to store the value of the text variable after converting it to uppercase
    }

    const handleOnChange =(event) => {
        //console.log("On change");
        setText(event.target.value);  //event.target.value is used to get the value of the text area and setText is used to update the value of the text variable
    }

    const [text, setText ] = useState("Enter text here");  //text is a state variable and setText is a function which is used to update the value of text variable and useState is a hook which is used to create a state variable and it takes initial value of the variable as an argument
    
    //text = "new text";  //wrong way to change the state variable
    //setText("new text");  //correct way to change the state variable 
   
    return (
    <div>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        {/*<label forHTML="myBox" className="form-label">Example textarea</label>*/}
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>  
        <button className="btn btn-primary" onClick={handleUppercaseClick}>Convert to Uppercase</button>

    </div>
  )
}
