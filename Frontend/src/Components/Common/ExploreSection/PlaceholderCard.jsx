import React from 'react';
import './explore.css';

const PlaceholderCard = () => (
    <div className='w-full lg:max-w-[340px] h-fit rounded-[17px] cursor-pointer overflow-hidden border border-transparent hover:border-gray-300 hover:shadow-customShadow transition duration-400 ease-in-out relative'>
        <div className='p-[10px] w-full'>
            <div className='relative w-full h-[250px] bg-gray-200 animate-pulse'></div>
            <div className='flex justify-between items-center py-[5px]'>
                <div className='w-3/4 h-6 bg-gray-200 animate-pulse rounded'></div>
                <div className='w-1/4 h-6 bg-gray-200 animate-pulse rounded'></div>
            </div>
            <div className='flex justify-between text-inactiveText text-sm'>
                <div className='w-1/2 h-4 bg-gray-200 animate-pulse rounded'></div>
                <div className='w-1/4 h-4 bg-gray-200 animate-pulse rounded'></div>
            </div>
            <div className='w-1/4 h-4 bg-gray-200 animate-pulse  rounded mt-2'></div>
        </div>
    </div>
);

export default PlaceholderCard;
