//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Link, Route,Routes } from 'react-router-dom'

/*
install this packages one by one before run app


npx create-react-app inotebook
npm start
npm install react-router-dom 
 npm install react-infinite-scroll-component 
 npm i react-top-loading-bar



*/

function App() {

  const[mode,setMode]=useState("light");//whether dark mode is enable or not
 
  const[alert,setAlert]=useState(null);


  const showAlert=(message,type)=>{

    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {

      setAlert(null)
      
    }, 1500);


  }



  const toggleMode=()=>{
    if(mode==='light'){

      setMode('dark');

      document.body.style.backgroundColor='#042743';

      showAlert("Dark mode has been Enabled","success");

      document.title="Textutils - Dark Mode";
    }
    else{
      setMode('light');

      document.body.style.backgroundColor='white';

      showAlert("Light mode has been Enabled","success");

      document.title="Textutils - Light Mode";

    }


  }


  return (
    <>

  {/*<Navbar title="TextUtils" aboutText="About Textutils" />*/}

  <Router>


  <Navbar title='TextUtils'aboutText='About us' mode={mode} toggleMode={toggleMode}/>

    <Alert alert={alert} />
    <Link></Link>

  <div className="container my-3">

  
    <Routes>
      <Route exact path="/about" element={<About/>}>
      

       

      </Route>

      <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
  }>

      

      </Route>
      
    </Routes>


  {/**/}

  

  </div>

  </Router>
  
    
     
    
    </>
    
  );
}

export default App;

