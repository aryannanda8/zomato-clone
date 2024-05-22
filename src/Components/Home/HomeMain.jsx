import React, { useState } from 'react'
import HeaderMain from '../Header/HeaderMain'
import TabOptions from '../Common/TabOptions/TabOptions'
import Delivery from '../Delivery/Delivery'
import DiningOut from '../DiningOut/DiningOut'
import Nightlife from '../NightLife/Nightlife'
import { Routes, Route } from 'react-router-dom'

function HomeMain({activeTab, visible }) {
    
    return (

        <div className=''>
            
            <HeaderMain />
            {
                visible &&   <TabOptions activeTab={activeTab} />
            }

        </div>
    )
}



export default HomeMain