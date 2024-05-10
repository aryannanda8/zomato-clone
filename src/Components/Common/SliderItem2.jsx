import React from 'react';

function SliderItem2({ item }) {
    return (
        <div className='mr-[40px] w-[150px] flex flex-col justify-center items-center cursor-pointer'>
            <div className='rounded-full h-[150px] w-[150px] bg-white shadow-sliderItemShadow flex justify-center items-center overflow-hidden'>
                <img
                    src={item.cover}
                    alt={item.title}
                    className='object-contain w-[85%] h-[85%]'
                    
                />
            </div>
            <p className='text-xl pt-2'>{item.title}</p>
        </div>
    );
}

export default SliderItem2;
