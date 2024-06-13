import React from 'react'
import indianFlag from '/images/indiaflag.png';
import { IoClose } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";



function UserModal({ config, close, setOne }) {
    const handleClose = () => {
        close();
    }
    const handleBackgroundClick = (e) => {

        handleClose();

    }
    return (
        <div>
            <div className={`fixed top-0 w-full h-full z-50 bg-[rgba(28,28,28,0.97)] flex justify-center items-center transition-opacity duration-300 ${config === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div onClick={handleBackgroundClick} className='fixed top-0  w-full h-full z-50'></div>
                <div className='h-full md:h-[75%] w-full md:w-[35%] bg-white  z-50 rounded-lg transition-transform duration-300 transform'>
                    <div className='w-[90%] justify-center items-center mx-auto h-full'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-[rgb(79,79,79)] text-[30px] font-[500] my-[1.5rem]'>Login</h1>
                            <IoClose size={30} onClick={handleClose} className='cursor-pointer' />
                        </div>
                        <div className='border border-[rgb(207,207,207)] rounded-[6px] flex justify-between p-2'>
                            <div className='flex justify-between items-center gap-4'>
                                <div className='flex justify-between w-full gap-2 items-center'>
                                    <img src={indianFlag} alt="India" className='h-[22px] rounded-[8px]' />
                                    <p className='font-[200]'>+91</p>
                                </div>
                                <div className='location-search-seperator h-[22px] border-[0.2px] border-greySep'></div>
                            </div>
                            <div className='w-[75%]'>
                                <input type="text" placeholder='Phone' className='w-full border-0 outline-none' />
                            </div>
                        </div>
                        <button className='w-full bg-[rgb(239,79,95)] my-6 rounded-md text-white font-[400] py-2.5'>
                            Send One Time Password
                        </button>
                        <div className='location-search-seperator h-[1] relative  border-[0.1px] border-greySep w-full'>
                            <span className='absolute top-[-16px] text-[rgb(105,105,105)] left-[46%] text-lg  bg-white px-[7px]'>or</span>
                        </div>

                        <button className='flex justify-center items-center mx-auto my-5 gap-2 border w-full rounded-md py-2'>
                            <CiMail fill='red' color='red' size={20} />
                            <p className='text-[rgb(60,64,67)]'>Continue with email</p>
                        </button>

                        <button className='flex justify-center items-center mx-auto my-5 mb-[30px] gap-2 border w-full rounded-md py-2'>
                            <FcGoogle size={20} />
                            <p className='text-[rgb(60,64,67)] font-[400]'>Sign in with Google</p>
                        </button>

                        <div className='my-[20px] location-search-seperator h-[0]   border-[0.01px] border-greySep w-full'>
                        </div>

                        <p className='font-[400]'>New to Zomato? <span onClick={() => { setOne(true); handleClose()}} className='text-[rgb(239,79,95)] cursor-pointer'>Create account</span></p>

                        <button></button>
                        <button></button>
                    </div>
                </div>
            </div>

            {
                config === 2 &&
                <div onClick={handleBackgroundClick} className='fixed top-0  w-full h-full z-50 bg-[rgba(28,28,28,0.97)] flex justify-center items-center'>
                    <div onClick={(e) => e.stopPropagation()} className='h-full w-full md:h-[80%] md:w-[35%] bg-white  z-50 rounded-lg'>

                        <div className='w-[90%] justify-center items-center mx-auto h-full'>
                            <div className='flex justify-between items-center'>
                                <h1 className='text-[rgb(79,79,79)] text-[30px] font-[500] my-[1.5rem]'>Signup</h1>
                                <IoClose size={30} onClick={handleClose} className='cursor-pointer' />
                            </div>
                            <div className='border border-[rgb(207,207,207)] rounded-[6px] flex justify-between p-2 mb-6'>

                                <div className='w-[75%]'>
                                    <input type="text" placeholder='Full Name' className='w-full border-0 outline-none pl-2' />
                                </div>
                            </div>
                            <div className='border border-[rgb(207,207,207)] rounded-[6px] flex justify-between p-2 mb-4'>
                                <div className='w-[75%]'>
                                    <input type="text" placeholder='Email' className='w-full border-0 outline-none pl-2' />
                                </div>
                            </div>
                            <div className='flex flex-nowrap gap-3 text-[rgb(105,105,105)]'>

                                <input type="checkbox" className='cursor-pointer' />
                                <p className='text-xs'>I agree to Zomato's Terms of Service, Privacy Policy and Content Policies</p>
                            </div>

                            <button className={`w-full bg-[rgb(239,79,95)] my-6 mt-4 rounded-md text-white font-[400] py-2.5`}>
                                Create Account
                            </button>
                            <div className='location-search-seperator h-[1] relative  border-[0.1px] border-greySep w-full mb-6'>
                                <span className='absolute top-[-16px] text-[rgb(105,105,105)] left-[46%] text-lg  bg-white px-[7px]'>or</span>
                            </div>



                            <button className='flex justify-center items-center mx-auto my-5 mb-[30px] gap-2 border w-full rounded-md py-2'>
                                <FcGoogle size={20} />
                                <p className='text-[rgb(60,64,67)] font-[400]'>Sign in with Google</p>
                            </button>

                            <div className='my-[20px] location-search-seperator h-[0]   border-[0.01px] border-greySep w-full'>
                            </div>

                                <p className='font-[400] text-md'>Already have an account? <span onClick={() => { setOne(true); handleClose() }} className='text-[rgb(239,79,95)] cursor-pointer'>Log in</span></p>

                            <button></button>
                            <button></button>
                        </div>

                    </div>
                </div>
            }

        </div>
    )
}

export default UserModal