import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import { Home } from './pages/home'

import { Header } from './components/header'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-zinc-700'>
      <Header />
      <Home />
    </div>
  </React.StrictMode>
)
