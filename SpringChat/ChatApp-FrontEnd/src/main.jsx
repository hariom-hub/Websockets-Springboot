import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import AppRoutes from './config/routes.jsx'
import { BrowserRouter } from 'react-router'
import { Toaster } from 'react-hot-toast'
import { ChatProvider } from './Context/ChatContext.jsx'

createRoot(document.getElementById('root')).render(

  
    <BrowserRouter>
      <Toaster />
      <ChatProvider>
        <AppRoutes />
      </ChatProvider>
    </BrowserRouter>

);
