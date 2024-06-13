import React, { useEffect, useState } from 'react'
import './header.css'
import { FaLocationDot, FaCaretDown, FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import SearchBar from '../Common/SearchBar';
import { useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import UserModal from '../Common/UserModal';

function HeaderMain() {
  let navigate = useNavigate();
  let [expanded, setExpanded] = useState(false);
  let [login, setLogin] = useState(false);
  let [register, setRegister] = useState(false);
  const handleClick = () => {
    navigate('/')
  }
  const expandMenu = () => {
    setExpanded(!expanded)
  }

  const handleLogin = () => {
    setLogin(!login);
  }
  const handleRegister = () => {
    setRegister(!register);
  }

  return (
    <div className=' '>

      <div className='hidden md:flex max-width header flex-nowrap'>

        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato-logo" className='header-logo cursor-pointer pl-[15px]' onClick={handleClick} />

        <div className='header-right h-[72px] flex flex-1 justify-between items-center'>


          <SearchBar size={1} />

          <div className='profile-wrapper flex justify-evenly w-[20%] items-center text-sliderAngle text-[20px] font-[300]'>
            {/* <img src="https://b.zmtcdn.com/data/user_profile_pictures/8c0/a6b7213757758f5d031832af389b98c0.jpg?fit=around%7C100%3A100&amp;crop=100%3A100%3B%2A%2C%2A" alt="Profile image"
            className=' h-[40px] w-[40px] rounded-full' />

          <span className='text-[16px] font-[410]'>Aryan</span> */}

            {/* <FaAngleDown className='text-[15px]' /> */}
            <div className='cursor-pointer pr-[5px]' onClick={handleLogin}>Login</div>
            <div className='cursor-pointer text-nowrap' onClick={handleRegister}>Sign up</div>
          </div>
        </div>
      </div>
      <div className='flex md:hidden mt-[20px] pb-2'>
        <div className='flex justify-between max-width-phone'>
          <div onClick={expandMenu} style={{ transition: 'opacity 0.5s ease-in' }}>
            {expanded ? <IoClose size={22} className='cursor-pointer' style={{ opacity: expanded ? 1 : 0 }} /> : <GiHamburgerMenu size={22} style={{ opacity: expanded ? 0 : 1 }} className='cursor-pointer' />}
          </div>

          <img className='h-[27px]' src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato-logo" onClick={handleClick} />
        </div>
      </div>

      <div className={expanded ? 'fixed  left-0 top-[60px] w-[100vw] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 z-[48]' : 'ease-in h-full duration-500 w-full fixed left-[-100%]'}>
        <ul className='flex flex-col p-[30px]'>
          <li onClick={handleLogin} className='hover-underline-animation cursor-pointer'>Login</li>
          <br />

          <li onClick={handleRegister} className='hd  hover-underline-animation cursor-pointer'>Sign Up</li>

        </ul>


      </div>

      {(login || register) && <div>
        {login &&
          <div >
            <UserModal setOne={setRegister} config={1} close={handleLogin} />
          </div>
        }
        {register &&
          <div >
            <UserModal setOne={setLogin} config={2} close={handleRegister} />
          </div>
        }
      </div>}
    </div>

  )
}

export default HeaderMain