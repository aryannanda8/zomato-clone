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
      filterType: null,
    },
    {
      title: "Rating 4.0+",
      filterType: 'rating',
      minRating: 4.0,
    },
    {
      title: "Pure Veg",
      filterType: 'pure_veg'
    },
    {
      title: "Pizza",
      // icon: <FaAngleDown size={15} />,
      filterType: 'cuisines',
      cuisineVal: 'Pizza'
    },
    {
      title: "Burger",
      // icon: <FaAngleDown size={15} />,
      filterType: 'cuisines',
      cuisineVal: 'Burger'
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