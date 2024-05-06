import React from 'react'
import FilterItem from './FilterItem'

function Filters({filterList}) {
  
  return (
    
    <div className='flex  top-0 z-10 flex-wrap py-[16px] px-[0]'>
      {filterList && filterList.map((filter, index) => {
        return <FilterItem item={filter} key={index}/>
      })}
    </div>
  )
}

export default Filters