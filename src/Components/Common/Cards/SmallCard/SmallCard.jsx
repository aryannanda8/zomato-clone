import React from 'react'
import { Link } from 'react-router-dom'
function SmallCard({ imgSrc, text, text2, link }) {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <div className='m-2.5 rounded-xl h-56 overflow-hidden hover:transform duration-300 ease transition-transform hover:scale-[1.04]'>
            <Link to={`/ncr/${link}`} onClick={scrollToTop}>
                <div className='flex flex-col h-full '>
                    <div className=' h-48 overflow-hidden w-96'>
                        <img src={imgSrc} alt="text" className='w-full h-full object-cover object-center' />
                    </div>
                    <div className='flex flex-col justify-center  border-[1px] border-bordColor border-t-0 rounded-xl rounded-t-none object-contain'>
                        <div className='m-3'>
                            <h3 className='text-xl'>{text}</h3>
                            <h3 className='text-desc'>{text2}</h3>

                        </div>
                    </div>
                </div>

            </Link>
        </div>


    )
}

export default SmallCard;