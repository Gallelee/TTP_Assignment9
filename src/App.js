import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Home from "./components/Home"
import UserProfile from './components/UserProfile';
import Debits from './components/Debits';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

  const [balance, setBalance] = useState(1000)
  const [userName, setUserName] = useState("Jonny_Bravo")
  const [memberSince, setMemberSince] = useState("03/26/1995")
  const [debits, setDebits] = useState(null)
  const [credits, setCredits] = useState(null)

  const debitsLookup = "https://moj-api.herokuapp.com/debits"
  const creditsLookup = "https://moj-api.herokuapp.com/credits"

  useEffect(()=> {
    fetch(debitsLookup)
    .then(res => res.json())
    .then(obj => setDebits(obj))
  },[debitsLookup])

  useEffect(() => {
    fetch(creditsLookup)
    .then(res => res.json())
    .then(obj => setCredits(obj))
  },[creditsLookup])

  console.log(debits)
  console.log(credits)
  
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home balance={balance}/>}/>
        <Route path="/UserProfile" element = {<UserProfile username={userName} memberSince={memberSince}/>}/>
        <Route path="/Debits" element = {<Debits debitInfo={debits}/>}/>
        <Route path="/Credits" element = {<Credits creditInfo={credits}/>}/>
      </Routes>
    </Router>
  )
 
}

export default App;

