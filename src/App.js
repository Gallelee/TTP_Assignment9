import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Home from "./components/Home"
import UserProfile from './components/UserProfile';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

  const [balance, setBalance] = useState(1000)
  const [userName, setUserName] = useState("Jonny_Bravo")
  const [memberSince, setMemberSince] = useState("03/26/1995")
  const [debits, setDebits] = useState(null)
  const [credits, setCredits] = useState(null)

  
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home balance={balance}/>}/>
        <Route path="/UserProfile" element = {<UserProfile username={userName} memberSince={memberSince}/>}/>
      </Routes>
    </Router>
  )
 
}

export default App;
