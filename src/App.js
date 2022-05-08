import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textfrom from './components/Textfrom';
// import About from './components/About';
import Alert from './components/Alert';
// import {
//   BrowserRouter as  Router, Route, Routes
// } from "react-router-dom";

function App() {
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      setSwitchText('Enable Light Mode');
      document.body.style.backgroundColor = '#06113C';
      showAlert('Dark Mode Has Been Enabled','success');
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      setSwitchText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode Has Been Enabled','success');
      document.title = 'TextUtils - Light Mode';
    }
  }

  const [mode, setMode] = useState('light');
  const [switchText, setSwitchText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);
  // state of 3 color changing
  // const [darkModeTory, setDarkModeTory] = useState('dark');
  // const [darkModeMarron, setDarkModeMarron] = useState('dark');
  // const [darkModeBlue, setDarkModeBlue] = useState('dark');

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      typ: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      {/* <Navbar /> */}
      {/* <Router> */}
      <Navbar title = 'TextUtils' mode = {mode} toggleMode = {toggleMode} switchText = {switchText}/>
      <Alert alert = {alert}/>
        <div className="container">
          {/* <Routes> */}
            {/* <Route exact path="/about" element = {<About />} /> */}
            {/* <Route exact path="/" element = { */}
            <Textfrom heading = 'Enter The Text To analysis' mode = {mode} showAlert = {showAlert}/>
             {/* }/> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
