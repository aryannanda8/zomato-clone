import React from 'react';

function SliderItem({ item }) {
    return (
        <div className='mr-[40px] w-[150px] flex flex-col justify-center items-center'>
            <div className='rounded-full h-[140px] w-[140px] bg-white shadow-sliderItemShadow flex justify-center items-center overflow-hidden'>
                <img 
                    src={item.cover} 
                    alt={item.title} 
                    className='object-contain h-[90%] w-[90%]' 
                />
            </div>
            <p className='text-xl'>{item.title}</p>
        </div>
    );
}

export default SliderItem;
