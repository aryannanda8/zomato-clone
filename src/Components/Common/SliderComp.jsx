import React, { useState } from 'react';
import SliderItem from './SliderItem';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function SliderComp({ arr }) {
    const [startIndex, setStartIndex] = useState(0);

    const [canRight, setCanRight] = useState(6 >= arr.length ? false : true);
    const [canLeft, setCanLeft] = useState(false);

    const handleRight = () => {
        if (startIndex + 7 >= arr.length)
            setCanRight(false);

        if (startIndex + 6 < arr.length) {
            setCanLeft(true);
            setStartIndex((startIndex) => startIndex + 1);
        }
    };

    const handleLeft = () => {
        setStartIndex((startIndex) => startIndex - 1);
        setCanRight(true);
    };

    return (
        <div className='w-[1110px] mx-auto relative'>
            <button onClick={handleLeft} className={`bg-primaryBg w-[35px] ${canLeft ? '' : 'hidden'}  h-[35px] rounded-full absolute left-[-10px] top-[35%] flex justify-center items-center  border-[4px] border-transparent shadow-sliderArrow text-sliderAngle z-10`}><FaAngleLeft /></button>
            <div className='relative max-width overflow-hidden'>
                <div className='w-[13200px] flex transition-transform duration-700 ease-in-out' style={{ transform: `translateX(-${startIndex * 190}px)` }}>
                    {arr.map((item, index) => {
                        return <SliderItem item={item} key={index} />;
                    })}
                </div>
            </div>
            <button onClick={handleRight} className={`bg-primaryBg ${canRight ? '' : 'hidden'}  w-[35px] h-[35px] rounded-full absolute right-[-10px] top-[35%] flex justify-center items-center  border-[4px] border-transparent shadow-sliderArrow text-sliderAngle`}><FaAngleRight /></button>
        </div>
    );
}

export default SliderComp;
