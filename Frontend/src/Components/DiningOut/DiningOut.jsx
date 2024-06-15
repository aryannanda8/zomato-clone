import React, { useDebugValue, useEffect } from 'react'
import './diningOut.css'
import Collections from '../Common/Collections'
import Filters from '../Common/Filters'
import { PiSlidersHorizontalLight } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa";
import GoldDiscount from '../Common/GoldDiscount';
import ExploreSection from '../Common/ExploreSection/ExploreSection';
import diningOutRestaurants from '../../data/diningOutRestaurants';

const diningFilters = [
  {

    title: "Filters",
    icon: <PiSlidersHorizontalLight size={20} />,
    cls:''
  },
  {
    img: "https://b.zmtcdn.com/data/o2_assets/577bf55ff265ae45e11cfe6911d176941687789024.png",
    title: "Gold",
        cls:''

  },
  {
    title: "Rating: 4.0+",
    cls:'four'

  },
  {
    title: "Outdoor Seating",
    cls:''

  },
  {
    title: "Serves Alcohol",    cls:''


  },
  {
    title: "Open Now",
    cls:''

  },
]
function DiningOut({ setActiveTab, activeTab, setVisible }) {
  useEffect(() => {

    setVisible(true)
    setActiveTab('Dining Out')

  }, [])

  return (
    <div>

      <Collections />
      <Filters filterList={diningFilters} />
      <GoldDiscount />
      <ExploreSection list={diningOutRestaurants} headingTitle={'Trending dining out restaurants in Delhi NCR'} type={"dining"} />
    </div>
  )
}

export default DiningOut