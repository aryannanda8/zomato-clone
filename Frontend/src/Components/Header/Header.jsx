import React, { useState } from 'react'
import SearchBar from '../Common/SearchBar'
import { useNavigate } from 'react-router-dom'
import UserModal from '../Common/UserModal'
import './header.css'
function Header() {
    let [login, setLogin] = useState(false);
    let [register, setRegister] = useState(false);
    const handleLogin = () => {
        setLogin(!login);
    }
    const handleRegister = () => {
        setRegister(!register);
    }
   

    const scrollToGetApp = () => {
        const element = document.getElementById('getApp');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return (
        <div>
            < div className="bg-custom-image bg-cover bg-center  h-custom flex flex-col gap-y-16  flex-nowrap  items-center  text-white" >

                <nav className=' p-5 text-lg max-width font-light' style={{ width: "100%" }}>
                    <ul className="flex w-full justify-between items-center">
                        <div>
                            {/* <li className=' text-sm font-[500] cursor-pointer' onClick={() => { window.scrollTo({ top: 1310, behavior: "smooth" }); console.log('hello');  }} >Get the app</li> */}
                            <li className=' text-sm font-[500] cursor-pointer' onClick={scrollToGetApp} >Get the app</li>

                        </div>
                        <div className='flex justify-between gap-4 md:gap-10 font-[300]'>

                            {/* <li className='hidden md:block cursor-pointer'>Investor Relations</li> */}
                            {/* <li className='hidden md:block cursor-pointer'>Add restaurant</li> */}
                            <li className='cursor-pointer ' onClick={handleLogin}>Log in</li>
                            <li className='cursor-pointer' onClick={handleRegister}>Sign up</li>
                        </div>
                    </ul>
                </nav>
                <div className='relative flex flex-col h-1/2 gap-10'>
                    <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="Zomato"
                        className='object-contain h-14 w-full ' />
                    <h2 className='text-xl md:text-4xl font-[400] md:font-light px-[15px] md:px-0 text-center'>Discover the best food & drinks in <b>Delhi NCR</b></h2>
                    {/* <div type="text" style={{ background: "white", border: "", height: "48px", width: "45rem", borderRadius: "10px" }} /> */}

                    <SearchBar size={2} />




                </div>
            </div>
            {(login || register) && <div>
                {login &&
                    <div >
                        <UserModal setOne={setRegister}  config={1} close={handleLogin} />
                    </div>
                }
                {register &&
                    <div >
                        <UserModal setOne={setLogin} config={2} close={handleRegister} />
                    </div>
                }
            </div>}
        </div>

        //     <div className="bg-custom-image bg-cover bg-center h-custom flex flex-col gap-y-16 flex-nowrap items-center text-white">

        //     <nav className='p-5 text-lg font-light' style={{ background: "pink", width: "100%" }}>
        //       <ul className="flex w-full justify-between">
        //         <li className='mr-96 text-sm'>Get the app</li>
        //         <li>Investor Relations</li>
        //         <li>Add restaurant</li>
        //         <li>Log in</li>
        //         <li>Sign up</li>
        //       </ul>
        //     </nav>

        //     <div className='relative flex flex-col h-1/2 gap-10'>
        //       <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="Zomato" className='object-contain h-14 w-full' />
        //       <h2 className='text-4xl font-light'>Discover the best food & drinks in <b>Delhi NCR</b></h2>
        //       <div type="text" style={{ background: "white", border: "", height: "48px", width: "45rem", borderRadius: "10px" }} />
        //     </div>

        //   </div>




    )
}

export default Header