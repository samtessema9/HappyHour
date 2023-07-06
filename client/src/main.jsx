// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter as Router } from 'react-router-dom';
// import PrimaryContextProvider from './context/primaryContext.jsx';
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Router>
//       <PrimaryContextProvider>
//         <App />
//       </PrimaryContextProvider>
//     </Router>
//   </React.StrictMode>
// )

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import PrimaryContextProvider from './context/primaryContext';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <Router> */}
      <PrimaryContextProvider>
        <App />
      </PrimaryContextProvider>
    {/* </Router> */}
  </React.StrictMode>,
  document.getElementById('root')
);

