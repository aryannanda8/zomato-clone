import React, { useState } from 'react'
import HomeMain from '../Components/Home/HomeMain'
import Delivery from '../Components/Delivery/Delivery'
import DiningOut from '../Components/DiningOut/DiningOut'
import Nightlife from '../Components/NightLife/Nightlife'
import { Link, Routes, Route } from 'react-router-dom'
import LoadingBar from '../Components/Common/LoadingBar'

import IndividualRestaurant from '../Components/IndividualRestaurant'
function NcrRoutes({ setActiveTab , activeTab}) {
    let[visible, setVisible] = useState(true)
    return (
        <div>
            {/* <LoadingBar/> */}
            
            <HomeMain activeTab={activeTab} visible={visible} />
            <Routes>
                <Route path='/' element={<Delivery setActiveTab={setActiveTab}  activeTab={activeTab} setVisible={setVisible}/>} />
                <Route path='/delivery' element={<Delivery setActiveTab={setActiveTab}  activeTab={activeTab} setVisible={setVisible}/>} />
                <Route path='/dining' element={<DiningOut setActiveTab={setActiveTab}  activeTab={activeTab} setVisible={setVisible}/>} />
                <Route path='/drinks-and-nightlife' element={<Nightlife setActiveTab={setActiveTab}  activeTab={activeTab} setVisible={setVisible}/>} />
                <Route path='/*' element={<IndividualRestaurant setVisible={setVisible} />} />
            </Routes>
        </div>
    )
}

export default NcrRoutes