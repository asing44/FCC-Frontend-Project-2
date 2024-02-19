import React from 'react'
import ReactDOM from 'react-dom/client'
import Paste from './Paste.jsx'
import Preview from './Preview.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Paste />
    <Preview />
  </React.StrictMode>,
)