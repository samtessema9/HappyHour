import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Map from './components/Map'
import Details from './pages/Details'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Happy Hour</h2>
      <Navbar />
      <hr />
      {/* <Home /> */}
      <Details bar={{name: "Bar 6", hours: ["4:00", "6:00pm"], img: "https://infatuation.imgix.net/NYC_Bandits_PR.jpg", address: "3548 W Belfair Valley Rd, Bremerton, WA 98312"}} />
    </>
  )
}

export default App
