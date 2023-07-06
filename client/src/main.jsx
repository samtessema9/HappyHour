import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import PrimaryContextProvider from './context/PrimaryContext.jsx';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <PrimaryContextProvider>
        <App />
      </PrimaryContextProvider>
  </React.StrictMode>
)


