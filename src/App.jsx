import React from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import { Router, Route } from 'react-router-dom'
import HomeMain from './Components/Home/HomeMain'

function App() {
  return (
    <div  style={{ font: "Nunito" } }>
      {/* <Header /> */}
      {/* <Home /> */}
      
      <HomeMain/>
    </div>
  )
}

export default App