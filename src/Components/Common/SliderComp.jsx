import React, { useState } from 'react';
import SliderItem from './SliderItem';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import SliderItem2 from './SliderItem2';
import SliderItem3 from './SliderItem3';

function SliderComp({ arr, config, itemsToShow }) {
    const [startIndex, setStartIndex] = useState(0);

    const [canRight, setCanRight] = useState(itemsToShow >= arr.length ? false : true);
    const [canLeft, setCanLeft] = useState(false);

    const handleRight = () => {
        if (startIndex + itemsToShow >= arr.length-1)
            setCanRight(false);

        if (startIndex + itemsToShow < arr.length) {
            setCanLeft(true);
            setStartIndex((startIndex) => startIndex + 1);
        }
    };

    const handleLeft = () => {
        if(startIndex === 1) setCanLeft(false)
        setStartIndex((startIndex) => startIndex - 1);
        setCanRight(true);
    };
    const itemWidth = config === 3 ? 280 : 190; 

    return (
        <div className='w-[1110px] mx-auto relative'>
            
            <button onClick={handleLeft} className={`bg-primaryBg w-[35px] ${canLeft ? '' : 'hidden'}  h-[35px] rounded-full absolute left-[-10px] ${config===3? "top-[45%]" : "top-[33%]"} flex justify-center items-center  border-[4px] border-transparent shadow-sliderArrow text-sliderAngle z-10`}><FaAngleLeft /></button>

            <div className='relative max-width overflow-hidden'>
                <div className='w-[13200px] flex transition-transform duration-700 ease-in-out' style={{ transform: `translateX(-${startIndex * itemWidth}px)` }}>
                    {/* <div className='h-[80%] '> */}
                    {arr.map((item, index) => {
                        return config === 1 ? <SliderItem item={item} key={index} /> : config === 2 ? <SliderItem2 item={item} key={index} /> : <SliderItem3 item={item} key={index}/>;
                    })}
                        {/* </div> */}
                </div>
            </div>

            <button onClick={handleRight} className={`bg-primaryBg ${canRight ? '' : 'hidden'}  w-[35px] h-[35px] rounded-full absolute right-[-10px] ${config===3? "top-[45%]" : "top-[37%]"} flex justify-center items-center  border-[4px] border-transparent shadow-sliderArrow text-sliderAngle`}><FaAngleRight /></button>
        </div>
    );
}

export default SliderComp;
