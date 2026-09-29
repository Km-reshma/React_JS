import './App.css';
import Navbar from './Components/Navbar';  /*navbar component is imported here in the App.js file*/

function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About TextUtils"/>                         {/* comments: navbar component is used here in the App.js file  and title is passed as a prop as we changed it according to our needs*/}
    </>
  );
}

export default App;
