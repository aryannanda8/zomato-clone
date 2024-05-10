import React from 'react'
import HomeMain from '../Components/Home/HomeMain'
import Delivery from '../Components/Delivery/Delivery'
import DiningOut from '../Components/DiningOut/DiningOut'
import Nightlife from '../Components/NightLife/Nightlife'
import { Link, Routes, Route } from 'react-router-dom'
import LoadingBar from '../Components/Common/LoadingBar'
function NcrRoutes() {
    return (
        <div>
            <LoadingBar/>
            
            <HomeMain />
            <Routes>
                <Route path='/' element={<Delivery />} />
                <Route path='/delivery' element={<Delivery />} />
                <Route path='/dining' element={<DiningOut />} />
                <Route path='/drinks-and-nightlife' element={<Nightlife />} />
                
            </Routes>
        </div>
    )
}

export default NcrRoutes