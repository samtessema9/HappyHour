import { useState } from 'react'
import './App.css'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Happy Hour</h2>
      <Home />
    </>
  )
}

export default App
