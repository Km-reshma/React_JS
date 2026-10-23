import React, { useState } from 'react'
 


export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
        
    // })
    // const [btnText, setBtnText] = useState("Enable Dark Mode")


    // const toggleStyle = () => {
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
    //     } 
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }

    let myStyle = {
        color : props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor : props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
        // border : '2px solid',
        // borderColor : props.mode === 'dark' ? 'white' : '#042743'
    }

    return (

    <div className = "container my-3" style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>    {/*we use my-3 to give margin to the container from top and bottom and we use style={{color : props.mode === 'dark' ? 'white' : '#042743'}} to change the color of the text based on the value of props.mode */}
        <h1>About Us</h1>
        <div className ="accordion" id="accordionExample" style={myStyle}>

            {/* Analyze the text */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze the text</strong>
                </button>
                </h2>

                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle} >
                        TextUtils is a simple and useful text manipulation application that helps users analyze and modify their text quickly. It provides features such as converting text to uppercase or lowercase, removing extra spaces, copying text, and clearing text. Users can also view word count, character count, and estimated reading time.
                    </div>
                </div>
            </div>    
           
            {/* Free to use */} 
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
                </button>
                </h2>

                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    TextUtils is completely free to use. Users can access its text manipulation and analysis features without paying any subscription fees. It is designed to make everyday text-related tasks quick, easy, and convenient.
                    </div>
                </div>
            </div>


            {/* Browser Compatible */}    
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    TextUtils works with modern web browsers, including Google Chrome, Microsoft Edge, Mozilla Firefox, and Safari. Its responsive interface allows users to access the application on desktops, laptops, tablets, and mobile devices.
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
    </div> */}

        </div>
    </div>    
    
  )
}
