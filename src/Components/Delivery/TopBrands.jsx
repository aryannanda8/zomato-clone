import React from 'react'
import SliderComp from '../Common/SliderComp'

const brandList = [
    {
        title: "McDonald's",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png?output-format=webp",
        time: '25 min',
    },
    {
        title: "Haldiram's",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png?output-format=webp",
        time: '25 min',
    },
    {
        title: "KFC",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png?output-format=webp",
        time: '25 min',
    },
    {
        title: "Burger King",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp",
        time: '25 min',
    },
    {
        title: "Subway",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471786.png?output-format=webp",
    },
    {
        title: "Bikkgane Biryani",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/4bf3cd23b591c0292aba5fe476fadbef_1625160389.png?output-format=webp",
        time: '25 min',
    },
    {
        title: "Chaayos",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/ed9718e64b3307ae4aaee0bc81c1ea15_1625155060.png?output-format=webp",
        time: '25 min',
    },
    // {
    //     title: "Rolls",
    //     cover: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
    // time: '25 min',
    // },
    // {
    //     title: "Dosa",
    //     cover: "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
    // time: '25 min',
    // },
    // {
    //     title: "Pizza",
    //     cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    // time: '25 min',
    // },



]


function TopBrands() {
    return (
        <div className=' py-[40px]'>
            <div className='max-width '>
                <div className='collection-title'>
                    Top brands for you
                    

                </div>

            </div>
            <div className='w-full  '>
                <SliderComp arr={brandList} />
            </div>
        </div>
    )
}

export default TopBrands