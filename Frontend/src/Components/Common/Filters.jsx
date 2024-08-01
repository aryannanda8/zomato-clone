import React from 'react';
import FilterItem from './FilterItem';
import useFilters from '../../hooks/useFilters';

function Filters({ filterList }) {
    const { appliedFilters, handleFilterChange } = useFilters();
    
    return (
        <div className='sticky top-[0px] z-10 bg-white'>
            <div className='max-width'>
                <div className='flex py-4 px-2 flex-wrap'>
                    {/* {filterList && filterList.map((filter, index) => (
                        <FilterItem item={filter} key={index} onFilterChange={() => handleFilterChange(filter)} />
                    ))} */}
                    {filterList && filterList.map((filter, index) => {
                        
                        const isSelected = appliedFilters.some(
                            appliedFilter => appliedFilter.filterType === filter.filterType && (filter.filterType === "cuisines" && appliedFilter.value === filter.cuisineVal || filter.filterType !== "cuisines")
                        );
                        console.log(filter, 'ye hai bhai filter');
                        console.log(appliedFilters, 'ye hai bhai appliedFilters');
                        // console.log(isSelected, 'selected');
                        return (
                            <FilterItem
                                item={filter}
                                key={index}
                                onFilterChange={(cuisineVal=null) => handleFilterChange({...filter, cuisineVal})}
                                isSelected={isSelected}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Filters;


// import React from 'react';
// import FilterItem from './FilterItem';
// import useFilters from '../../hooks/useFilters';

// function Filters({ filterList }) {
//     const { appliedFilters, handleFilterChange } = useFilters();
    
//     return (
//         <div className='sticky top-0 z-10 bg-white'>
//             <div className='max-width'>
//                 <div className='flex py-4 px-2 flex-wrap'>
//                     {filterList && filterList.map((filter, index) => {
//                         let displayTitle = filter.title;
//                         if (filter.filterType === 'cuisines') {
//                             const selectedCuisine = appliedFilters.find(
//                                 appliedFilter => appliedFilter.filterType === 'cuisines'
//                             );
//                             console.log(selectedCuisine, 'ye hai selected cuisine');
//                             console.log(appliedFilters, 'ye hai appliedfilters');
//                             if (selectedCuisine) {
//                                 displayTitle = ` ${selectedCuisine.value}`;
//                                 console.log(displayTitle, 'displaytitle');
//                             }
//                         }

//                         const isSelected = appliedFilters.some(
//                             appliedFilter => appliedFilter.filterType === filter.filterType && appliedFilter.value === filter.value
//                         );

//                         return (
//                             <FilterItem 
//                                 item={{ ...filter, title: displayTitle }} 
//                                 key={index} 
//                                 onFilterChange={(cuisineVal=null) => handleFilterChange({...filter, cuisineVal})}
//                                 isSelected={isSelected}
//                             />
//                         );
//                     })}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Filters;
