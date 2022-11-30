import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'

import { Home } from './pages/home'

import { Header } from './components/header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="h-screen bg-grad">
      <Header />
      <Home />
    </div>
  </React.StrictMode>
)
