import React from 'react'
import FilterItem from './FilterItem'

function Filters({filterList}) {
  
  return (
    <div className='sticky top-[0px] z-10 bg-white' >
      <div className='max-width'>
        <div className='flex py-4 px-2'>
          {filterList && filterList.map((filter, index) => {
            return <FilterItem item={filter} key={index}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Filters