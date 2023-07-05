import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Map from './components/Map'
import Details from './pages/Details'
import Navbar from './components/Navbar'
import venues from './assets/testData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Happy Hour</h2>
      <Navbar />
      <hr />
      {/* <Home /> */}
      <Details bar={venues[5]} />
    </>
  )
}

export default App
