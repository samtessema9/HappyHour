import { useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrimaryContext from './context/PrimaryContext'
import './App.css'
import Home from './pages/Home'
import Details from './pages/Details'
import Navbar from './components/Navbar'
import venues from './assets/testData'

function App() {
  // const {currentVenue} = useContext(PrimaryContext);

  return (
    <>
      <Router>
        <h2>Happy Hour</h2>
        <Navbar />
        <hr />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/details" element={<Details bar={venues[0]} />} />
        </Routes>
      </Router>

    </>
        
  )
}

export default App

