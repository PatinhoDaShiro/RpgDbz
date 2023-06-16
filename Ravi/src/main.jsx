import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './components/inicio/inicio'
import Notfound from './components/notfound/notfound.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="*" element={<Notfound/>}/>

    </Routes>
   </BrowserRouter>
  </React.StrictMode>,
)
