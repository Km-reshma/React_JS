import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />
      <div className = "container my-3">                                       {/*my-3 is a bootstrap class which gives margin to the container from top and bottom */}
         <Textform heading ="Enter the text to analyze below "/>                             {/*we put textform component in div container so that it will be in center of the page and not on the left side of the page and container is a bootsrap class */}
      </div>
              
    </>
  );
}

export default App;

