// src/main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
// we import the default export from App.jsx
// we can name the function whatever we want here, so we'll call it App
import App from './App.jsx'
import './index.css'

// we then use the component below. Note that the tag is self-closing
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
