import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textfrom from './components/Textfrom';
import About from './components/About';
import Alert from './components/Alert';
// import {
//   BrowserRouter as  Router, Route, Routes
// } from "react-router-dom";

// color platters code
// const removeClassList = ()=> {
//   document.body.classList.remove('bg-primary');
//   document.body.classList.remove('bg-danger');
//   document.body.classList.remove('bg-warning');
//   document.body.classList.remove('bg-success');
//   document.body.classList.remove('bg-light');
//   document.body.classList.remove('bg-dark');
// }

function App() {
  const toggleMode = (cls)=>{

    
    if(mode === 'light'){
      setMode('dark');
      setSwitchText('Enable Light Mode');
      document.body.style.backgroundColor = '#06113C';
      showAlert('Dark Mode Has Been Enabled','success');
      // document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      setSwitchText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode Has Been Enabled','success');
      // document.title = 'TextUtils - Light Mode';
    }

    //Tayef's extra code for color platters

    // removeClassList();

    // console.log(cls);
    // document.body.classList.add('bg-' + cls);

    
    // if(cls === 'primary'){
    //   document.body.style.color = '#2d3436';
    //   showAlert('Blue Mode Has Been Enabled','success');
    // }
    // else if(cls === 'danger'){
    //   showAlert('Red Mode Has Been Enabled','success');
    // }
    // else if(cls === 'warning'){
    //   showAlert('Yellow Mode Has Been Enabled','success');
    // }
    // else if(cls === 'success'){
    //   showAlert('Green Mode Has Been Enabled','success');
    // }
    // else if(cls === 'light'){
    //   setMode('light');
    //   showAlert('Light Mode Has Been Enabled','success');
    // }

    
  }

  const [mode, setMode] = useState('light');
  const [switchText, setSwitchText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

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
            <Textfrom heading = 'Try TextUtils - Word counter ,  Character counter , Uppercase to Lowercse , Lowercase to Uppercase , Remove extra spaces' mode = {mode} showAlert = {showAlert}/>
            {/* <About mode = {mode}/> */}
             {/* }/> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;