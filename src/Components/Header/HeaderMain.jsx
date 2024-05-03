import React from 'react'
import './header.css'
import { FaLocationDot, FaCaretDown, FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
function HeaderMain() {
  return (
    <div className='max-width header '>

      <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato-logo" className='header-logo' />

      <div className='header-right h-[72px] flex flex-1 justify-between items-center'>
        <div className='header-location-search-container bg-primaryBg h-[54px] w-[70%] flex items-center rounded shadow-customShadow border border-white'>
          <div className='location-wrapper  flex flex-1 py-0 px-[10px] justify-between items-center'>
            <div className='location-icon-name text-zomatoGray  bg-white flex  justify-center items-center'>
              <FaLocationDot className=' text-zomatoRed text-[20px] mr-[8px]' />
              <div>Bangalore</div>
            </div>
            <FaCaretDown className='flex justify-center items-center ' />
          </div>

          <div className='location-search-seperator h-[20px]  border-[0.5px] border-greySep '></div>

          <div className='header-search-bar flex flex-[2_2_0%]'>
            <CiSearch className='text-[20px] text-zomatoGray my-0 mx-[12px]'/>
            <input type="text" placeholder='Search for a restaurant, cuisine, or a dish'
              className='border-0 outline-none w-[60%] text-[14px]' />
          </div>

        </div>
        <div className='profile-wrapper flex justify-evenly w-[15%] items-center'>
          <img src="https://b.zmtcdn.com/data/user_profile_pictures/8c0/a6b7213757758f5d031832af389b98c0.jpg?fit=around%7C100%3A100&amp;crop=100%3A100%3B%2A%2C%2A" alt="Profile image"
            className=' h-[40px] w-[40px] rounded-full' />

          <span className='text-[16px] font-[410]'>Aryan</span>
          <FaAngleDown className='text-[15px]' />
        </div>
      </div>
    </div>

  )
}

export default HeaderMain