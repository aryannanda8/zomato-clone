import React, { useState, useEffect } from 'react';
import SliderItem from './SliderItem';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import SliderItem2 from './SliderItem2';
import SliderItem3 from './SliderItem3';
import useFilters from '../../hooks/useFilters';

function SliderComp({ handleFilterChange='', arr, config, itemsToShow }) {
    // const { appliedFilters, handleFilterChange } = useFilters();
    const [startIndex, setStartIndex] = useState(0);
    const [canRight, setCanRight] = useState(arr.length > itemsToShow);
    const [canLeft, setCanLeft] = useState(false);

    const itemWidth = config === 3 ? 280 : 190;

    useEffect(() => {
        setCanRight(startIndex + itemsToShow < arr.length);
        setCanLeft(startIndex > 0);
    }, [itemsToShow, arr.length, startIndex]);

    const handleRight = () => {
        if (startIndex + itemsToShow < arr.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const handleLeft = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const containerWidth = itemWidth * itemsToShow - (config===3? 22:30);

    return (
        <div className='w-full ' style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
            <div className='mx-auto relative' style={{ width: `${containerWidth}px` }}>
                <button onClick={handleLeft} className={`bg-primaryBg w-[35px] ${canLeft ? '' : 'hidden'} h-[35px] rounded-full absolute left-[-10px] ${config === 3 ? "top-[45%]" : "top-[33%]"} flex justify-center items-center border-[4px] border-transparent shadow-sliderArrow text-sliderAngle z-10`}>
                    <FaAngleLeft />
                </button>
                <div className='relative mx-auto overflow-hidden'>
                    <div className='flex transition-transform duration-700 ease-in-out' style={{ width: `${arr.length * itemWidth}px`, transform: `translateX(-${startIndex * itemWidth}px)` }}>
                        {arr.map((item, index) => (
                            config === 1 ? <div onClick={()=>handleFilterChange({ filterType: 'cuisines', title: item.title, cuisineVal: item.title })} key={index}><SliderItem item={item} key={index} /></div> :
                            // config === 1 ? <SliderItem item={item} key={index} /> :
                            config === 2 ? <SliderItem2 item={item} key={index} /> :
                            <SliderItem3 item={item} key={index} />
                        ))}
                    </div>
                </div>
                <button onClick={handleRight} className={`bg-primaryBg ${canRight ? '' : 'hidden'} w-[35px] h-[35px] rounded-full absolute right-[-10px] ${config === 3 ? "top-[45%]" : "top-[33%]"} flex justify-center items-center border-[4px] border-transparent shadow-sliderArrow text-sliderAngle`}>
                    <FaAngleRight />
                </button>
            </div>
        </div>
    );
}

export default SliderComp;
