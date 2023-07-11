import { useState, useContext, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PrimaryContext } from './context/primaryContext';
import axios from 'axios';
import './App.css'
import Home from './pages/Home'
import Details from './pages/Details'
import Navbar from './components/Navbar'
import venues from './assets/testData'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import User from './components/User';
import AddVenue from './pages/AddVenue';


function App() {
  const {setLoggedInUser} = useContext(PrimaryContext);

  useEffect(() => {
    const getUser = async (token) => {
      const url = 'http://localhost:3001/users'
      const response = await axios({
        method: 'GET',
        url: url,
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const user = response.data
      setLoggedInUser(user)
    }

    const token = localStorage.getItem('token')

    if (token) {
      getUser(token)
    }

  }, [])

  return (
    <>
      <Router>
        <h2>Happy Hour</h2>
        <Navbar />
        <hr />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/details" element={<Details bar={venues[0]} />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/user" element={<User />} />
          <Route path="/addVenue" element={<AddVenue />} />
        </Routes>
      </Router>

    </>
        
  )
}

export default App

