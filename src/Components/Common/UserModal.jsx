import React from 'react'
import indianFlag from '/images/indiaflag.png';

function UserModal({ config }) {
    return (
        <div>
            <div className='fixed top-0  w-full h-full z-50 bg-[rgba(28,28,28,0.85)] flex justify-center items-center'>
                <div className='h-[90%] w-[30%] bg-white  z-50 rounded-lg'>

                    <div className='w-[90%] justify-center items-center mx-auto'>
                        <div className=''>
                            <h1 className='text-[rgb(79,79,79)] text-[30px] font-[500] my-[1.5rem]'>Login</h1>

                        </div>
                        <div className='border border-[rgb(207,207,207)] rounded-[6px] flex justify-between p-2'>
                            <div className='flex justify-between items-center gap-4 '>
                                <div className='flex justify-between w-full gap-2 items-center'>
                                    <img src={indianFlag} alt="India" className='h-[20px] rounded-md'/>
                                    <p className='font-[200] '>+91</p>
                                </div>
                                <div className=' location-search-seperator h-[22px]   border-[0.2px] border-greySep '></div>
                            </div>

                            <div className='w-[75%]'>
                                <input type="text" placeholder='Phone' className='w-full border-0 outline-none' />
                            </div>
                        </div>
                        <button></button>
                        <p>or</p>
                        <button></button>
                        <button></button>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default UserModal