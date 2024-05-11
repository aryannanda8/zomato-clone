import React from 'react'
import { FaCaretRight } from "react-icons/fa";

function SliderItem3({ item }) {
    return (
        <div className='relative w-[260px] mr-[20px] h-[320px] cursor-pointer '>
            <div className='h-full rounded-lg'>
                <img src={item.cover} alt={item.title} className='h-full rounded-lg' />

            </div>
            <section className=' rounded-lg absolute top-0 left-0 w-full h-full text-white' style={{
                background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)',
                backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)',
                backgroundPositionX: 'initial',
                backgroundPositionY: 'initial',
                backgroundSize: 'initial',
                backgroundRepeat: 'initial',
                backgroundAttachment: 'initial',
                backgroundOrigin: 'initial',
                backgroundClip: 'initial',
                backgroundColor: 'initial'
            }}>
                <section className='absolute bottom-0 w-full pl-[15px] pb-[10px]'>
                    <p className='text-lg'>{item.title}</p>
                    <div className='flex items-center gap-1'>
                        <p className='text-md '>{item.places} </p>
                        <FaCaretRight size={15} className='mt-[3px]' />

                    </div>

                </section>
            </section>
        </div>
    )
}

export default SliderItem3