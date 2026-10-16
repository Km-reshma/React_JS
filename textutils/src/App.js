import './App.css';
import Navbar from './Components/Navbar';
//import About from './Components/About';
import Textform from './Components/TextForm';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');      // to check  Whether dark mode is enabled or not

  const toggleMode = () => {
    if(mode === 'light'){
      setMode ('dark');
    }  
    if(mode === 'dark') {
      setMode ('light');
    }
  };

  return(
    <>
      {/*<Navbar title="TextUtils" aboutText="About Textutils" />
      </Navbar> */}
      <Navbar title="TextUtils" mode ={mode} toggleMode={toggleMode} />
      <div className = "container my-3">                                       {/*my-3 is a bootstrap class which gives margin to the container from top and bottom */}
      <Textform heading ="Enter the text to analyze below "/>
      {/*<About />*/}                       {/*we put textform component in div container so that it will be in center of the page and not on the left side of the page and container is a bootsrap class */}
      </div>
              
    </>
  );
}

export default App;

