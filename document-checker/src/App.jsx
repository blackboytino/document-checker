import { Route , Routes } from 'react-router-dom'
import React from 'react' 
import './App.css'
import Home from './pages/Home'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' exact Component={Home} />
      </Routes>
       
    </>
  )
}

export default App
