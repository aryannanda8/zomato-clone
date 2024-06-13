import React from 'react'
import ExploreCard from './ExploreCard'

function ExploreSection({ list, headingTitle, type }) {
    return (
        <div className='py-[10px]'>
            <div className='sm:max-width-sm md:max-width lg:max-width max-width'>
                <div className='collection-title font-[500] sm:text-center md:text-left'>
                    {headingTitle}
                </div>

                <div className='  grid grid-cols-1 justify-items-center md:grid-cols-2 md:justify-items-center lg:grid-cols-3 gap-3 gap-y-8 mx-auto '>
                    {list.map((item, index) => (
                        <ExploreCard restaurant={item} key={index} type={type} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExploreSection