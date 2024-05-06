import React from 'react'

function FilterItem({item}) {
  return (
      <div className='flex m-[10px] ml-0 border border-filterBorder bg-primaryBg shadow-filterShadow rounded-[8px] cursor-pointer justify-center items-center p-[8px] text-[14px] text-filterText'>
          {item.icon && item.icon}
        <div className='ml-[5px]'>{item.title}</div>
    </div>
  )
}

export default FilterItem