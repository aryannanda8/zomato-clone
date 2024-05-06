import React from 'react'
import './delivery.css'
import Filters from '../Common/Filters'
import { PiSlidersHorizontalLight } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa";
import Inspiration from './Inspiration';
import TopBrands from './TopBrands';

function Delivery() {
  const deliveryFilters = [
    {

      title: "Filters",
      icon: <PiSlidersHorizontalLight size={20} />,
    },
    {
      title: "Rating: 4.0+",
    },
    {
      title: "Pure Veg",
    },
    {
      title: "Cuisines",
      icon: <FaAngleDown size={15} />,
    },
  ]
  return (
    <div className=''>
      <div className='max-width ' >
        <Filters filterList={deliveryFilters} />
      </div>

      <Inspiration />
      <TopBrands/>
    </div>
  )
}

export default Delivery