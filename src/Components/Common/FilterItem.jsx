import React from 'react'

function FilterItem({ item }) {
  return (
    <div className='flex m-[10px] ml-0 border border-filterBorder bg-primaryBg shadow-filterShadow rounded-[8px] cursor-pointer justify-center items-center p-[8px] text-[14px] text-filterText hover:bg-[#fbfafa]'>
      {item.icon && <div className='mr-[5px]'>
        {item.icon && item.icon}
      </div>
      }
      {item.img && <img className='h-[17px] mr-[5px]' src={item.img} />}
      <div className=''>{item.title}</div>
    </div>
  )
}

export default FilterItem