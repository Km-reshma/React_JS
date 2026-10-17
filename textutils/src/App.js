import './App.css';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
//import About from './Components/About';
import Textform from './Components/TextForm';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');      // to check  Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);        // to show alert message

  const showAlert = (message, type) => {                          //function to show alert message
    setAlert({                                                   //setAlert is a  object which is used to set the value of the alert variable and it takes an object as an argument which has two properties msg and typ and we use message and type as values of these properties
      msg : message,
      typ : type

    });
    setTimeout(() => {
      setAlert(null);  //to remove the alert message after 1.5 seconds
    }, 1500);

  }

  const toggleMode = () => {                          //function to toggle between light and dark mode
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#042733';  //to change the background color of the body when dark mode is enabled
      showAlert("Dark mode has been enabled", "success");  //to show alert message when dark mode is enabled
    }  
    if(mode === 'dark') {
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");  //to show alert message when light mode is enabled
    }
  };

  return(
    <>
      {/*<Navbar title="TextUtils" aboutText="About Textutils" />
      </Navbar> */}
      <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode} />
      <Alert alert = {alert} />                {/*we use alert = {alert} to pass the value of the alert variable(which is written in const [alert]) to the Alert component and we use alert.typ and alert.msg to get the value of the typ and msg properties of the alert object in the Alert component */}
      <div className = "container my-3">                                       {/*my-3 is a bootstrap class which gives margin to the container from top and bottom */}
      <Textform showAlert = {showAlert} heading ="Enter the text to analyze below " mode = {mode}/>
      {/*<About />*/}                       {/*we put textform component in div container so that it will be in center of the page and not on the left side of the page and container is a bootsrap class */}
      </div>
              
    </>
  );
}

export default App;

