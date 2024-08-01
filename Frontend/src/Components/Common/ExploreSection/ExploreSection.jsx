import React, { useEffect, useState } from 'react'
import ExploreCard from './ExploreCard'
import GetRestaurants from './GetRestaurants'

function ExploreSection({ list, headingTitle, type }) {
    const [filter, setFilter] = useState({
        rating: { },
        cuisine: '',
        cost: { }
    });

    useEffect(() => {
        // Find the element with the class name 'four'
        const element = document.querySelector('.four');

        if (element) {
            // Define the click handler
            const handleClick = () => {
                setFilter(4.0);
            };

            // Attach the click event listener
            element.addEventListener('click', handleClick);
        }
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    return (
        <div className='py-[10px]'>
            <div className='sm:max-width-sm md:max-width lg:max-width max-width'>
                <div className='collection-title font-[500] sm:text-center md:text-left'>
                    {headingTitle}
                </div>

                <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 md:justify-items-center lg:grid-cols-3 gap-3 gap-y-8 mx-auto'>
                    <GetRestaurants list={list} type={type} filter={filter} setFilter={setFilter} />
                </div>
            </div>
        </div>
    );
}



export default ExploreSection