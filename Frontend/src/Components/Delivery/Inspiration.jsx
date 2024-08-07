import React from 'react';
import SliderComp from '../Common/SliderComp';
import useMediaQuery from './UseMediaQuery';  // Import the hook
import { useSelector } from 'react-redux';
import useFilters from '../../hooks/useFilters';


const inspirationList = [
    { title: "Pizza", cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png", filterType: 'cuisines', },
    { title: "Thali", cover: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png", filterType: 'cuisines', },
    { title: "Burger", cover: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png", filterType: 'cuisines', },
    { title: "Chicken", cover: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png", filterType: 'cuisines', },
    { title: "Cake", cover: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png", filterType: 'cuisines', },
    { title: "Chole Bhature", cover: "https://b.zmtcdn.com/data/dish_images/c953e5ca07150e9a51f8b21102e20f7e1634805157.png", filterType: 'cuisines', },
    { title: "North Indian", cover: "https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg", filterType: 'cuisines', },
    { title: "Rolls", cover: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png", filterType: 'cuisines', },
    { title: "Dosa", cover: "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png", filterType: 'cuisines', },
    // { title: "Pizza", cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png" }
];

function Inspiration() {

    const { appliedFilters, handleFilterChange } = useFilters();
    const isMediumScreen = useMediaQuery('(max-width: 768px)');
    const isSmallScreen = useMediaQuery('(max-width: 480px)');
    const isExtraSmallScreen = useMediaQuery('(max-width: 640px)');
    const isMdScreen = useMediaQuery('(max-width: 950px)');
    const isLgScreen = useMediaQuery('(max-width: 1150px)');

    let itemsToShow = 6;

    if (isSmallScreen || isExtraSmallScreen) {
        itemsToShow = 2;
    } else if (isMediumScreen) {
        itemsToShow = 3;
    } else if (isMdScreen) {
        itemsToShow = 4;
    } else if (isLgScreen) {
        itemsToShow = 5;
    }



    return (
        <>
            {appliedFilters.length ? <></> :
                <div className='bg-grayBg py-[40px] w-full'>
                    <div className="max-width">
                        <div className="collection-title">
                            Inspiration for your first order
                        </div>
                    </div>

                    <div>
                        <SliderComp handleFilterChange={handleFilterChange} arr={inspirationList} config={1} itemsToShow={itemsToShow} />
                    </div>

                    {/* <div className="mt-4">
                {inspirationList.map(item => (
                    <div
                        key={item.title}
                        className={`cursor-pointer p-2 border m-2 `}
                        onClick={() => handleFilterChange({ filterType: 'cuisines', title: item.title })}
                    >
                        {item.title}
                    </div>
                ))}
            </div> */}
                </div>
            }
        </>
    );
}

export default Inspiration;