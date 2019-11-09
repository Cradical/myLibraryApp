import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import MainContent from 'components/MainContent'
import NavBar from 'components/NavBar'
import SideBar from 'components/SideBar'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <SideBar />
        <MainContent />
      </Router>
    </div>
  )
}

export default App
