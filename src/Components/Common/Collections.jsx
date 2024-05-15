import React from 'react'
import { FaDove } from 'react-icons/fa'
import SliderComp from './SliderComp'

const collectionList = [
  {
    title: "Top Trending Spots",
    cover: "https://b.zmtcdn.com/data/collections/684397cd092de6a98862220e8cc40aca_1709810183.png?output-format=webp",
    places: "36 places",
  },
  {
    title: "Best of live screenings",
    cover: "https://b.zmtcdn.com/data/collections/908aad87392ba1f9526e7b483b94d124_1711107868.jpg?output-format=webp",
    places: "42 places",
  },
  {
    title: "Newly Opened Places",
    cover: "https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1705557723.png?output-format=webp",
    places: "15 places",
  },
  {
    title: "Best Insta-worthy Places",
    cover: "https://b.zmtcdn.com/data/collections/fbd237478a5d3b6ea08de83c30230cdd_1705558245.png?output-format=webp",
    places: "23 places",
  },
  {
    title: "Unique Dining Places",
    cover: "https://b.zmtcdn.com/data/collections/f25923193488d2884f8689f185d418ef_1705558811.png?output-format=webp",
    places: "19 places",
  },
  {
    title: "Best Rooftop Places",
    cover: "https://b.zmtcdn.com/data/collections/2b9361aa328a43b08986f77bbec280bd_1709810570.png?output-format=webp",
    places: "31 places",
  },
  {
    title: "Celebrity Owned Places",
    cover: "https://b.zmtcdn.com/data/collections/24bfe934630bd441699f2d59990cd92b_1709810917.png?output-format=webp",
    places: "10 places",
  },
  // {
  //   title:"",
  //   cover: "",
  //   places: "36 places",
  // },

]

function Collections() {
  return (
    <div className='py-[14px] bg-grayBg'>
      <div className='max-width'>
        <div className='collection-title font-[500]'>
          Collections
        </div>
        <div className='pb-[10px]'>
          <p className='text-desc font-[400]'>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</p>
        </div>
      </div>
      <SliderComp arr={collectionList} config={3} itemsToShow={4} />
    </div>
  )
}

export default Collections