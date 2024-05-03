import React from 'react'
import { Link } from 'react-router-dom'
function SmallCard({ imgSrc, text, text2, link }) {
    return (
        <Link to={link} className='mx-2.5 rounded-xl h-56 overflow-hidden '>
            <div className='flex flex-col h-full'>
                <div className=' h-48 overflow-hidden w-96'>
                    <img src={imgSrc} alt="text" className='w-full h-full object-cover object-center' />
                </div>
                <div className='flex flex-col justify-center  border-2 border-light-grey border-t-0 rounded-xl rounded-t-none object-contain'>
                    <div className='m-3'>
                        <h3 className='text-xl'>{text}</h3>
                        <h3 className='text-desc'>{text2}</h3>

                    </div>
                </div>
            </div>
        </Link>


    )
}

export default SmallCard;