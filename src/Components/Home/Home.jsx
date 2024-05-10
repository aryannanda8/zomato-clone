import React from 'react'
import Collections from '../Common/Collections'
import Localities from '../Common/Localities'
import GetApp from '../Common/GetApp'
import ExploreOptions from '../Common/ExploreOptions'
import Footer from '../Common/Footer/Footer'

import orderOnlineImage from '/images/orderonline.jpg'
import diningoutImg from '/images/diningout.jpg'
import nightlifeandclubsImg from '/images/nightlifeandclubs.jpg'
import SmallCard from '../Common/Cards/SmallCard/SmallCard'
import HomeMain from './HomeMain'
import { Link, Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'

function Home() {
  return (
    <div>
      <nav>


        <Header />

        <div className='max-width'>
          {/* <Link to='/ncr' > 
            dog
          </Link> */}
          <div className='flex m-9'>
            
              <SmallCard imgSrc={orderOnlineImage} text="Order Online" text2="Stay home and order to your doorstep" link={'delivery'} />
            
            {/* <Link> */}
              <SmallCard imgSrc={diningoutImg} text="Dining" text2="View the city's favourite dining venues" link={'dining'}/>

            {/* </Link>
            <Link> */}
              <SmallCard imgSrc={nightlifeandclubsImg} text="Nightlife and Clubs" text2="Stay home and order to your doorstep" link={'drinks-and-nightlife'}/>

            {/* </Link> */}

          </div>

        </div>


        <Collections />
       

        {/* <Routes>
        <Route path="/ncr" element={<HomeMain />} />
      </Routes> */}
      </nav>

    </div>
  )
}



export default Home