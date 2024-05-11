import React from 'react'
import './header.css'
import { FaLocationDot, FaCaretDown, FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import SearchBar from '../Common/SearchBar';
import {useNavigate} from 'react-router-dom'
function HeaderMain() {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate('/')
  }
  return (
    <div className='max-width header '>

      <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato-logo" className='header-logo cursor-pointer'  onClick={handleClick}/>

      <div className='header-right h-[72px] flex flex-1 justify-between items-center'>


        <SearchBar size={1} />

        <div className='profile-wrapper flex justify-evenly w-[20%] items-center text-sliderAngle text-[20px] font-[300]'>
          {/* <img src="https://b.zmtcdn.com/data/user_profile_pictures/8c0/a6b7213757758f5d031832af389b98c0.jpg?fit=around%7C100%3A100&amp;crop=100%3A100%3B%2A%2C%2A" alt="Profile image"
            className=' h-[40px] w-[40px] rounded-full' />

          <span className='text-[16px] font-[410]'>Aryan</span> */}

          {/* <FaAngleDown className='text-[15px]' /> */}
          <div className='cursor-pointer'>Login</div>
          <div className='cursor-pointer'>Sign up</div>
        </div>
      </div>
    </div>

  )
}

export default HeaderMain