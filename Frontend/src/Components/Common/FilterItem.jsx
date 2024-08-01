import React from 'react';
import { IoClose } from "react-icons/io5";

function FilterItem({ item, onFilterChange, isSelected }) {
    return (
       
        <div
            onClick={() => onFilterChange(item.cuisineVal)}
            className={`flex m-[10px] ml-0 border  shadow-filterShadow rounded-[8px] cursor-pointer justify-center items-center  p-[8px] text-[14px] text-filterText  ${isSelected ? 'bg-filterRed border-filterRed hover:bg-filterHoverRed hover:border-filterHoverRed  text-white ' : ' bg-primaryBg hover:bg-[#fbfafa] border-filterBorder'}`}
        >
            
            {item.icon && <div className='mr-[5px]'>{item.icon}</div>}
            {item.img && <img className='h-[17px] mr-[5px]' src={item.img} />}


            <div className=''>{item.title}</div>
            {isSelected && <div className='mt-[1px] ml-[1px]'><IoClose size={18} /></div>}
        </div>
    );
}

export default FilterItem;


// import React from 'react';

// function FilterItem({ item, onFilterChange, isSelected }) {
//     const handleDropdownClick = (cuisine) => {
//         console.log(cuisine, 'ye hai bhai cuisine');
//         onFilterChange(cuisine);
//     };

//     return (
//         <div className={`relative ${isSelected ? 'bg-blue-500 text-white border-blue-700' : ''}`}>
//             <div
//                 onClick={() => item.filterType !== 'cuisines' && onFilterChange(item)}
//                 className={`flex m-[10px] ml-0 border border-filterBorder bg-primaryBg shadow-filterShadow rounded-[8px] cursor-pointer justify-center items-center p-[8px] text-[14px] text-filterText hover:bg-[#fbfafa] ${item.cls}`}
//             >
//                 {item.icon && <div className='mr-[5px]'>{item.icon}</div>}
//                 {item.img && <img className='h-[17px] mr-[5px]' src={item.img} />}
//                 <div className=''>{item.title}</div>
//             </div>

//             {item.filterType === 'cuisines' && (
//                 <div className='absolute top-full left-0 bg-white border border-gray-200 mt-2 rounded-md shadow-lg'>
//                     {['Pizza', 'Burger', 'Pasta', 'Sushi'].map((cuisine) => (
//                         <div
//                             key={cuisine}
//                             onClick={() => handleDropdownClick(cuisine)}
//                             className='p-2 cursor-pointer hover:bg-gray-100'
//                         >
//                             {cuisine}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default FilterItem;
