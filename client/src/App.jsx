import { useState, useContext, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PrimaryContext } from './context/PrimaryContext';
import { useQuery } from '@tanstack/react-query';
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
import EditUser from './components/EditUser';
import FavoriteVenues from './pages/FavoriteVenues';


const App = () => {
  const {isLoggedIn, loggedInUser, setLoggedInUser, setIsLoggedIn} = useContext(PrimaryContext);

  const fetchUser = async (token) => {
    const url = 'https://happyhour-api.onrender.com/users'
    const response = await axios({
      method: 'GET',
      url: url,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    setIsLoggedIn(true)
    setLoggedInUser(response.data)
    return response.data
  }

  const token = localStorage.getItem('token')

  const getUser = useQuery({
    queryKey: ['user'],
    enabled: token ? true : false,
    queryFn: () => fetchUser(token)
  })

  return (
    <>
      <Router>
        {isLoggedIn ? <h2>Hey, {loggedInUser.name}</h2> : <h2>Happy Hour</h2>}
        <Navbar />
        <hr />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/details" element={<Details bar={venues[0]} />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/user" element={<User />} />
          <Route path="/editUser" element={<EditUser />} />
          <Route path="/addVenue" element={<AddVenue />} />
          <Route path="/favoriteVenues" element={<FavoriteVenues />} />
        </Routes>
      </Router>

    </>
        
  )
}

export default App

