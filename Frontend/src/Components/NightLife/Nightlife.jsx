import React, { useEffect } from 'react'
import './nightlife.css'
import Collections from '../Common/Collections'
import { PiSlidersHorizontalLight } from "react-icons/pi";
import Filters from '../Common/Filters'
import GoldDiscount from '../Common/GoldDiscount';
import ExploreSection from '../Common/ExploreSection/ExploreSection';
import nightLifeRestaurants from '../../data/nightLifeRestaurants';
const nightLifeFilters = [
  {

    title: "Filters",
    icon: <PiSlidersHorizontalLight size={20} />,
    filterType: null,
  },
  {
    img: "https://b.zmtcdn.com/data/o2_assets/577bf55ff265ae45e11cfe6911d176941687789024.png",
    title: "Gold",
    filterType: 'gold'
  },
  {
    title: "Rating: 4.0+",
    filterType: 'rating', 
    minRating: 4.0,
  },

  {
    title: "Pubs & Bars",
    filterType: 'pubs'
  },
]
function Nightlife({ setActiveTab, activeTab, setVisible }) {
  useEffect(() => {
    
    setVisible(true)
    setActiveTab('Nightlife')

  }, [])
  return (
    <div>
      <Collections />
      <Filters filterList={nightLifeFilters} />
      <GoldDiscount />
      <ExploreSection list={nightLifeRestaurants} headingTitle={"Nightlife: Night clubs, pubs & bar in Delhi NCR"} />
    </div>
  )
}

export default Nightlife