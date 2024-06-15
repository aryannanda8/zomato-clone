import React from 'react'
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function ExploreCard({ restaurant, type }) {
    let navigate = useNavigate();
    
    const name = restaurant?.name ?? "";
    const coverImg = restaurant?.image ?? "";
    const deliveryTime = restaurant?.type === 'dining' ? null : restaurant?.deliveryTime;
    const avgRating = restaurant?.avgRating ;
    const approxPrize = restaurant?.approxPrice ?? "";
    const cuisines = restaurant?.cuisines?.map(item => item.name) ?? [];
    const bottomContainers = restaurant?.bottomContainers ?? [];
    const goldOff = restaurant?.goldOff ?? null;
    const locality = restaurant?.type === 'dining' ? restaurant?.locality ?? null : null;
    const distance = restaurant?.type === 'dining' ? restaurant?.distance ?? null : null;
    const cardAction = restaurant?.cardAction ?? "";
    const ratingColor = restaurant?.rating?.rating_color ?? "green";
    

    const handleClick = () => {
        scrollTo({ top: 0, })
        navigate(cardAction, { state: { restaurantId: restaurant._id } })
    }
    return (
        <div className='w-full lg:max-w-[340px] h-fit  rounded-[17px] cursor-pointer overflow-hidden border border-transparent hover:border-gray-300 hover:shadow-customShadow transition duration-400 ease-in-out relative' onClick={handleClick}>

            <div className='p-[10px] w-full '>

                <div className='relative w-full h-[250px]'>
                    <img
                        src={coverImg}
                        alt={name}
                        className='absolute inset-0 w-full h-full object-cover rounded-lg'
                    />
                    {goldOff && (<div className='absolute top bottom-[10px]'>
                        <div style={{
                            background: 'linear-gradient(90deg, rgb(12, 14, 17) 0%, rgb(12, 14, 17) 25%, rgb(12, 14, 17) 50%, rgba(12, 14, 17, 0.8) 80%, rgba(12, 14, 17, 0) 100%)',
                            backgroundImage: 'linear-gradient(90deg, rgb(12, 14, 17) 0%, rgb(12, 14, 17) 25%, rgb(12, 14, 17) 50%, rgba(12, 14, 17, 0.8) 80%, rgba(12, 14, 17, 0) 100%)',
                            backgroundPositionX: 'initial',
                            backgroundPositionY: 'initial',
                            backgroundSize: 'initial',
                            backgroundRepeat: 'initial',
                            backgroundAttachment: 'initial',
                            backgroundOrigin: 'initial',
                            backgroundClip: 'initial',
                            backgroundColor: 'initial',
                            padding: '2px 50px 2px 14px'
                        }} className='text-goldColor text-[15px] font-[500] '>

                            <div className='flex items-center justify-between gap-2'>
                                <img src="https://b.zmtcdn.com/data/o2_assets/9b1ff9e19b7fadea6c6a57e081a1f5ac1687776279.png" alt="" className='h-[19px]' />
                                <div>
                                    <span className="text-goldColor font-normal">
                                        Flat
                                    </span> {goldOff}

                                </div>
                            </div>

                        </div>

                    </div>
                    )}
                </div>

                <div className='food-item flex justify-between items-center py-[5px]'>
                    <div className='text-lg font-[500]' style={{ maxWidth: '250px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {name}
                    </div>

                    <div className="flex items-center py-[1px] text-white px-[5px] rounded-[5px] text-center content " style={{ backgroundColor: 'green' }}>

                        <p className='mr-[2px] mb-[0.5px]  text-[12px] font-[700] flex items-center text-center'>{avgRating}</p>
                        <div>
                            <FaStar size={10} />

                        </div>
                    </div>
                </div>
                <div className='food-desc flex justify-between text-inactiveText text-sm'>
                    <div className='' style={{ maxWidth: '180px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>

                        {/* {restaurant.info.cuisine[0].name}{restaurant.info.cuisine[1] ? "," : ""} {restaurant.info.cuisine[1] ? restaurant.info.cuisine[1].name : ""} */}
                        {cuisines && cuisines.length && cuisines.map((item, index) => {
                            return <span key={index} >{item}{index !== cuisines.length - 1 && ", "}</span>
                        })}

                    </div>
                    <div >
                        <p className=''>
                            {approxPrize && approxPrize}

                        </p>

                    </div>
                </div>
                {deliveryTime && <div className='time flex justify-end text-[13.5px] font-[400] pt-1'>
                    {deliveryTime}
                </div>
                }
                {
                    locality && <div className='flex justify-between text-[13.5px] time font-[400] pt-[2px]'>
                        <div className='text-filterColor'>
                            {locality}
                        </div>
                        <div>
                            {distance}
                        </div>
                    </div>
                }

                {
                    bottomContainers.length > 0 && <div>
                        <div className='border border-text-inactive mt-[10px]'></div>
                        <div className='flex pt-[4px] justify-start items-center'>
                            <div className='mr-[8px]'>
                                <img src={bottomContainers[0]?.image.url} alt={bottomContainers[0]?.text} className={`aspect-[${bottomContainers[0]?.image.aspect_ratio}] h-[21px]`} />

                            </div>
                            <p className='text-[13px] text-safeColor'>{bottomContainers[0]?.text}</p>
                        </div>

                    </div>
                }


            </div>


            {/*  <div key={index}>
                          <img src={item.info.image.url} alt={item.info.name} />
                          {item.info.name}
                          
        
                          {item.info.rating.rating_text}
                          {item.info.rating.rating_color}
                          {item.info.costText.text}
                          {item.order.deleverTime}
                      </div> */}
        </div>
    )
}

export default ExploreCard