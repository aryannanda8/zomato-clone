import React from 'react'
import { FaLocationDot, FaCaretDown, FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
function SearchBar({size}) {
    return (
        <>
            <div className={`header-location-search-container bg-primaryBg h-[54px] ${size===1? 'w-[70%]': 'w-[100%]'} flex items-center rounded shadow-customShadow border border-white text-black`}>
                <div className='location-wrapper  flex flex-1 py-0 px-[10px] justify-between items-center'>
                    <div className='location-icon-name text-zomatoGray  bg-white flex  justify-center items-center'>
                        <FaLocationDot className=' text-zomatoRed text-[20px] mr-[8px]' />
                        <div>Bangalore</div>
                    </div>
                    <FaCaretDown className='flex justify-center items-center ' />
                </div>

                <div className='location-search-seperator h-[20px]  border-[0.5px] border-greySep '></div>

                <div className='header-search-bar flex flex-[2_2_0%]'>
                    <CiSearch className='text-[20px] text-zomatoGray my-0 mx-[12px]' />
                    <input type="text" placeholder='Search for a restaurant, cuisine, or a dish'
                        className='border-0 outline-none w-[60%] text-[14px]' />
                </div>

            </div>
        </>
    )
}

export default SearchBar