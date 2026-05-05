import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<App/>} />
      <Route path='/chat' element = {<h1>hello world</h1>} />
    </Routes>
  </BrowserRouter>
  </StrictMode>
);
