import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'

import { Home } from './pages/home'

import { Header } from './components/header'
import { Stacks } from './pages/stacks'
import { Bio } from './pages/bio'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="h-screen bg-grad snap-y snap-mandatory overflow-y-scroll flex flex-col">
      <Header />

      <Home />

      <Bio />

      <Stacks />
    </div>
  </React.StrictMode>
)
