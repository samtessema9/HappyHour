import { useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import primaryContext from './context/primaryContext'
import './App.css'
import Home from './pages/Home'
import Details from './pages/Details'
import Navbar from './components/Navbar'
import venues from './assets/testData'

function App() {
  const {currentVenue} = useContext(primaryContext);

  return (
    <>
      <h2>Happy Hour</h2>
      <Navbar />
      <hr />
      <Router>
        <Switch>
          <Route exact path="/" component={<Home />} />
          <Route path="/about" component={<Details bar={currentVenue} />} />
        </Switch>
      </Router>
    </>
        
  )
}

export default App
