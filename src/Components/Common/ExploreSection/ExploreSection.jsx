import React from 'react'
import ExploreCard from './ExploreCard'

function ExploreSection({ list, headingTitle, type }) {
    return (
        <div className='py-[10px]'>
            <div className='max-width'>
                <div className='collection-title font-[500]'>
                    {headingTitle}
                </div>

                <div className='grid grid-cols-3 gap-3 gap-y-8 '>
                    {list.map((item, index) => (
                        <ExploreCard restaurant={item} key={index} type={type} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExploreSection