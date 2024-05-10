import React from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import { Link, Routes, Route } from 'react-router-dom'
import HomeMain from './Components/Home/HomeMain'
import Delivery from './Components/Delivery/Delivery'
import Collections from './Components/Common/Collections'
import DiningOut from './Components/DiningOut/DiningOut'
import Nightlife from './Components/NightLife/Nightlife'
import NcrRoutes from './Routes/NcrRoutes'
import HeaderMain from './Components/Header/HeaderMain'
import LoadingBar from './Components/Common/LoadingBar'
import ScrollToTop from './Components/Common/Scroll/ScrollToTop'

function App() {
  return (
    <div style={{ font: "Nunito" }}>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ncr/*' element={<NcrRoutes />} />
      </Routes>
    </div>
  );
}

export default App