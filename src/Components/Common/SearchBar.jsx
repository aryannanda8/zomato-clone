import React from 'react'
import { FaLocationDot, FaCaretDown, FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
function SearchBar({ size }) {
    const handleClick = () => {
        
    }
    return (
        <>
            <div className={`header-location-search-container  bg-none md:bg-primaryBg  md:h-[54px] ${size===1? 'w-[70%]': 'w-[100%]'}  flex flex-col gap-3 md:flex-row md:gap-0  items-center rounded-[10px] shadow-customShadow border-none md: border border-white text-black`}>
                <div className='location-wrapper  flex flex-1 py-2 md:py-0 px-[10px] justify-between items-center bg-primaryBg md:bg-none w-[90%] md:w-auto  rounded-md md:rounded-none'>
                    <div className='location-icon-name text-zomatoGray  bg-white flex  justify-center items-center'>
                        <FaLocationDot className=' text-zomatoRed text-[20px] mr-[8px]' />
                        <div>Delhi</div>
                    </div>
                    <FaCaretDown className='flex justify-center items-center ' onClick={handleClick}/>
                </div>

                <div className='hidden md:block location-search-seperator h-[20px]   border-[0.5px] border-greySep '></div>

                <div className='w-[90%] header-search-bar  flex flex-[2_2_0%] py-3 md:py-0 bg-white md:bg-none rounded-md md:rounded-none  h-[50px] md:h-auto'>
                    <CiSearch className='text-[20px] text-zomatoGray my-0 mx-[12px]' />
                    <input type="text" placeholder='Search for a restaurant, cuisine, or a dish'
                        className='border-0 outline-none w-full md:w-[60%] text-[14px] h-full' />
                </div>

            </div>
        </>
    )
}

export default SearchBar