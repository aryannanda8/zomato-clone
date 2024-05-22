import React from 'react'
import HeaderMain from './Header/HeaderMain'
import { useLocation } from 'react-router-dom';

function IndividualRestaurant({setVisible}) {
    setVisible(false)
    const location = useLocation();
    const restaurant = location.state?.restaurant;
  return (
      <div>
          <h1>{restaurant?.info?.name}</h1>
            <p>{restaurant?.info?.cuisine?.map(c => c.name).join(', ')}</p>
            <p>{restaurant?.info?.rating?.rating_text}</p>
            <img src={restaurant?.info?.image?.url} alt={restaurant?.info?.name} />
    </div>
  )
}

export default IndividualRestaurant