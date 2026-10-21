import './App.css';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import About from './Components/About';
import Textform from './Components/TextForm';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

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
      document.body.style.backgroundColor = '#042733';   //to change the background color of the body when dark mode is enabled
      showAlert("Dark mode has been enabled", "success");  //to show alert message when dark mode is enabled
      document.title = 'TextUtils - Dark Mode;'            //to change the title of the page when dark mode is enabled
      
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';         use setInterval to change the title of the page after every 2 seconds
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils now';
      // }, 2000);
    
    }  
    
    if(mode === 'dark') {
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");  //to show alert message when light mode is enabled
      document.title = 'TextUtils - Light Mode;'  //to change the title of the page when light mode is enabled
    }
  };

  return(
    <>
      {/* <Navbar title="TextUtils" aboutText="About Textutils" />
      </Navbar> */}
      <Router> 
      <Navbar title="TextUtils" aboutText = "About" mode = {mode} toggleMode={toggleMode} />
      <Alert alert = {alert} />                {/*we use alert = {alert} to pass the value of the alert variable(which is written in const [alert]) to the Alert component and we use alert.typ and alert.msg to get the value of the typ and msg properties of the alert object in the Alert component */}
      <div className = "container my-3">                                       {/*my-3 is a bootstrap class which gives margin to the container from top and bottom */}
        <Routes>
          <Route path="/about" element={<About />} />   {/*we use element={<About />} to render the About component when the path is /about and we use <About /> to render the About component */}
          <Route path="/" element = {<Textform showAlert = {showAlert} heading ="Enter the text to analyze below " mode = {mode}/>} /> 
        </Routes>
      </div>    
      </Router>  
      {/*<About />*/}                      {/*we put textform component in div container so that it will be in center of the page and not on the left side of the page and container is a bootsrap class */}
               
    </>
  );
}

export default App;

