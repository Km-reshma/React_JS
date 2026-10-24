import React from 'react'

function Alert(props) {

    const capitalize = (word) => {                               //function to capitalize the first letter of the word like sucess to <Success></Success>
        const lower = word.toLowerCase();                        //to convert the word to lowercase
        return lower.charAt(0).toUpperCase() + lower.slice(1);   //to convert the first letter of the word to uppercase and concatenate it with the rest of the word and return the new word
    }


    return (
      
     
    <div style ={{height : '50px'}}>                   {/* we set  the height of div to 50 px because to remove the overlap between the alert message and about.js containers, called CLI.*/}   
        {props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">       {/*props.alert.typ is used for specifying the alert type like success with green color */}
            <strong>{capitalize(props.alert.typ)}</strong> : {props.alert.msg}   {/*props.alert.type is used to get the value of the type property of the alert object and props.alert.msg is used to get the value of the msg property of the alert object */}
            {/*<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>*/} {/*we use button to close the alert message and we use data-bs-dismiss="alert" to dismiss the alert message when the button is clicked and we use aria-label="Close" to provide an accessible label for the button */}    
        </div>}

    </div>
      
  )
}

export default Alert
