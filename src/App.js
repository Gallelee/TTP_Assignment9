import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Home from "./Home"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

  const[balance, setBalance] = useState(1000)
  
  
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home balance={balance}/>}/>
      </Routes>
    </Router>
  )
 
}

export default App;
