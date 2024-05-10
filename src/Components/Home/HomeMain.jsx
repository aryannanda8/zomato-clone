import React, { useState } from 'react'
import HeaderMain from '../Header/HeaderMain'
import TabOptions from '../Common/TabOptions/TabOptions'
import Delivery from '../Delivery/Delivery'
import DiningOut from '../DiningOut/DiningOut'
import Nightlife from '../NightLife/Nightlife'
import { Routes, Route } from 'react-router-dom'

function HomeMain() {

    const [activeTab, setActiveTab] = useState("Delivery")
    return (

        <div>
            <HeaderMain />
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
        

        </div>
    )
}



export default HomeMain