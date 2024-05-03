import React, { useState } from 'react'
import HeaderMain from '../Header/HeaderMain'
import TabOptions from '../Common/TabOptions/TabOptions'
import Delivery from '../Delivery/Delivery'
import DiningOut from '../DiningOut/DiningOut'
import Nightlife from '../NightLife/Nightlife'

function HomeMain() {

    const [activeTab, setActiveTab] = useState("Delivery")
    return (

        <div>
            <HeaderMain />
            <TabOptions activeTab={activeTab} setActiveTab={ setActiveTab} />
            {getCorrectScreen(activeTab)}
            This is HomeMain
        </div>
    )
}

const getCorrectScreen = (tab) => {
    switch (tab) {
        case "Delivery":
            return <Delivery/>
        case "Dining Out":
            return <DiningOut/>
        case "Nightlife":
            return <Nightlife/>
        default:
            return <div>Delivery</div>
      }
}

export default HomeMain