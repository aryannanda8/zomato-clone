import React from 'react'
import Collections from '../Common/Collections'
import Localities from '../Common/Localities'
import GetApp from '../Common/GetApp'
import ExploreOptions from '../Common/ExploreOptions'
import Footer from '../Common/Footer/Footer'

import orderOnlineImage from './../../../public/images/orderonline.jpg'
import diningoutImg from     './../../../public/images/diningout.jpg'
import nightlifeandclubsImg from     './../../../public/images/nightlifeandclubs.jpg'
import SmallCard from '../Common/Cards/SmallCard/SmallCard'

function Home() {
  return (
    <div className='max-width'>

      <div className='flex m-9'>
        <SmallCard imgSrc={orderOnlineImage} text="Order Online" text2="Stay home and order to your doorstep" link="google.com" />
        <SmallCard imgSrc={diningoutImg} text="Dining" text2="View the city's favourite dining venues" link="google.com" />
        <SmallCard imgSrc={nightlifeandclubsImg} text="Nightlife and Clubs" text2="Stay home and order to your doorstep" link="google.com" />

      </div>

      <Collections />
      <Localities />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <GetApp />
      <ExploreOptions />
      <Footer />
    </div>
  )
}



export default Home