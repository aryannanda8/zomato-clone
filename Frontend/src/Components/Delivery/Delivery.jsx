import React, { useEffect } from 'react'
import './delivery.css'
import Filters from '../Common/Filters'
import { PiSlidersHorizontalLight } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa";
import Inspiration from './Inspiration';
import TopBrands from './TopBrands';
import ExploreSection from '../Common/ExploreSection/ExploreSection';
import restaurants from '../../data/restaurants';
function Delivery({ setActiveTab, activeTab, setVisible }) {
  useEffect(() => {
    setVisible(true)

    setActiveTab('Delivery')


  }, [])
  const deliveryFilters = [
    {

      title: "Filters",
      icon: <PiSlidersHorizontalLight size={20} />,
      icls: ''
    },
    {
      title: "Rating: 4.0+",
      cls: 'four'
    },
    {
      title: "Pure Veg",
      cls: ''
    },
    {
      title: "Cuisines",
      icon: <FaAngleDown size={15} />,
      cls: ''
    },
  ]
  return (
    <div className='w-full'>

      <Filters filterList={deliveryFilters} />

      <Inspiration />
      <TopBrands />
      <ExploreSection list={restaurants} headingTitle={"Food Delivery Restaurants in Delhi NCR"} type={"delivery"} />
    </div>
  )
}

export default Delivery