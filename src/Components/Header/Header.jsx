import React from 'react'
import SearchBar from '../Common/SearchBar'
import {useNavigate} from 'react-router-dom'
function Header() {
    
    return (
        < div className="bg-custom-image bg-cover bg-center  h-custom flex flex-col gap-y-16  flex-nowrap  items-center  text-white" >

            <nav className=' p-5 text-lg max-width font-light' style={{ width: "100%"}}>
                <ul className="flex w-full justify-between items-center">
                    <li className='mr-96 text-sm' >Get the app</li>
                    <li>Investor Relations</li>
                    <li>Add restaurant</li>
                    <li>Log in</li>
                    <li>Sign up</li>
                </ul>
            </nav>
            <div className='relative flex flex-col h-1/2 gap-10'>
                <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="Zomato"
                    className='object-contain h-14 w-full ' />
                <h2 className='text-4xl font-light'>Discover the best food & drinks in <b>Delhi NCR</b></h2>
                {/* <div type="text" style={{ background: "white", border: "", height: "48px", width: "45rem", borderRadius: "10px" }} /> */}
              
                <SearchBar size={2} />
               
                
            </div>

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