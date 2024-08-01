// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setFilter, removeFilter } from '../Utils/filterSlice';
// import { useNavigate, useLocation } from 'react-router-dom';

// const useFilters = () => {
//     const appliedFilters = useSelector((store) => store.filter.filters);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const location = useLocation();

//     useEffect(() => {
//         updateURL();
//     }, [appliedFilters]);

//     const updateURL = () => {
//         console.log('updateUrl triggered');
//         const params = new URLSearchParams(location.search);


//         appliedFilters.forEach(filter => {
//             if (filter.filterType === 'rating') {
//                 params.set('rating_range', filter.value);
//             } else if (filter.filterType === 'cuisines') {
//                 params.set('cuisine', filter.value);
//             } else if (filter.filterType === 'pure_veg') {
//                 params.set('pure_veg', true);
//             }
//         });

//         navigate(`${location.pathname}?${params.toString()}`);
//     };

//     const handleFilterChange = (filter) => {
//         const existingFilter = appliedFilters.find(f => f.filterType === filter.filterType);

//         if (existingFilter) {
//             console.log('Removing filter:', filter.filterType);
//             dispatch(removeFilter({ filterType: filter.filterType }));
//         } else {
//             if (filter.filterType === 'rating') {
//                 dispatch(setFilter({ filterType: filter.filterType, value: `${filter.minRating}-5` }));
//             } else if (filter.filterType === "cuisines") {
//                 dispatch(setFilter({ filterType: filter.filterType, value: filter.title }));
//             } else if (filter.filterType === "pure_veg") {
//                 dispatch(setFilter({ filterType: filter.filterType, value: true }));
//             }
//         }
//     };

//     return {
//         appliedFilters,
//         handleFilterChange
//     };
// };

// export default useFilters;


// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setFilter, removeFilter } from '../Utils/filterSlice';
// import { useNavigate, useLocation } from 'react-router-dom';

// const useFilters = () => {
//     const appliedFilters = useSelector((store) => store.filter.filters);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const location = useLocation();

//     useEffect(() => {
//         updateURL();
//     }, [appliedFilters]);

//     useEffect(() => {
//         console.log('Updated appliedFilters:', appliedFilters);
//     }, [appliedFilters]);

//     // const updateURL = () => {
//     //     console.log('updateUrl triggered');
//     //     const params = new URLSearchParams(location.search);

//     //     appliedFilters.forEach(filter => {
//     //         if (filter.filterType === 'rating') {
//     //             params.set('rating_range', filter.value);
//     //         } else if (filter.filterType === 'cuisines') {
//     //             params.set('cuisine', filter.value);
//     //         } else if (filter.filterType === 'pure_veg') {
//     //             params.set('pure_veg', true);
//     //         }
//     //     });

//     //     navigate(`${location.pathname}?${params.toString()}`);
//     // };
//     const updateURL = () => {
//         console.log('updateUrl triggered');
//         const params = new URLSearchParams(location.search);

//         // Clear out any existing parameters that aren't in the appliedFilters
//         params.forEach((value, key) => {
//             const filterExists = appliedFilters.some(filter => {
//                 if (filter.filterType === 'rating' && key === 'rating_range') return true;
//                 if (filter.filterType === 'cuisines' && key === 'cuisine') return true;
//                 if (filter.filterType === 'pure_veg' && key === 'pure_veg') return true;
//                 return false;
//             });
//             if (!filterExists) {
//                 params.delete(key);
//             }
//         });

//         // Add or update parameters based on appliedFilters
//         appliedFilters.forEach(filter => {
//             if (filter.filterType === 'rating') {
//                 params.set('rating_range', filter.value);
//             } else if (filter.filterType === 'cuisines') {
//                 params.set('cuisine', filter.value);
//             } else if (filter.filterType === 'pure_veg') {
//                 params.set('pure_veg', 'true');
//             }
//         });

//         navigate(`${location.pathname}?${params.toString()}`);
//     };


//     const handleFilterChange = (filter) => {
//         const existingFilter = appliedFilters.find(f => f.filterType === filter.filterType);

//         if (existingFilter) {
//             console.log('Removing filter:', filter.filterType);
//             dispatch(removeFilter({ filterType: filter.filterType }));
//         } else {
//             if (filter.filterType === 'rating') {
//                 dispatch(setFilter({ filterType: filter.filterType, value: `${filter.minRating}-5` }));
//             } else if (filter.filterType === "cuisines") {
//                 dispatch(setFilter({ filterType: filter.filterType, value: filter.title }));
//             } else if (filter.filterType === "pure_veg") {
//                 dispatch(setFilter({ filterType: filter.filterType, value: true }));
//             }
//         }
//     };

//     return {
//         appliedFilters,
//         handleFilterChange
//     };
// };

// export default useFilters;


import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, removeFilter } from '../Utils/filterSlice';
import { useNavigate, useLocation } from 'react-router-dom';

const useFilters = () => {
    const appliedFilters = useSelector((store) => store.filter.filters);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        applyFiltersFromURL();
    }, []); // Empty dependency array ensures this runs only once on component mount

    useEffect(() => {
        updateURL();
    }, [appliedFilters]);

    useEffect(() => {
        console.log('Updated appliedFilters:', appliedFilters);
    }, [appliedFilters]);

    const applyFiltersFromURL = () => {
        const params = new URLSearchParams(location.search);

        const rating = params.get('rating_range');
        const cuisine = params.get('cuisine');
        const pureVeg = params.get('pure_veg');

        if (rating) {
            dispatch(setFilter({ filterType: 'rating', value: rating }));
        }
        if (cuisine) {
            dispatch(setFilter({ filterType: 'cuisines', value: cuisine }));
        }
        if (pureVeg) {
            dispatch(setFilter({ filterType: 'pure_veg', value: true }));
        }
    };

    const updateURL = () => {
        console.log('updateUrl triggered');
        const params = new URLSearchParams(location.search);

        // Clear out any existing parameters that aren't in the appliedFilters
        params.forEach((value, key) => {
            const filterExists = appliedFilters.some(filter => {
                if (filter.filterType === 'rating' && key === 'rating_range') return true;
                if (filter.filterType === 'cuisines' && key === 'cuisine') return true;
                if (filter.filterType === 'pure_veg' && key === 'pure_veg') return true;
                return false;
            });
            if (!filterExists) {
                params.delete(key);
            }
        });

        // Add or update parameters based on appliedFilters
        appliedFilters.forEach(filter => {
            if (filter.filterType === 'rating') {
                params.set('rating_range', filter.value);
            } else if (filter.filterType === 'cuisines') {
                params.set('cuisine', filter.value);
            } else if (filter.filterType === 'pure_veg') {
                params.set('pure_veg', 'true');
            }
        });

        navigate(`${location.pathname}?${params.toString()}`);
    };

    const handleFilterChange = (filter) => {
        console.log(filter, 'ye hai filter inside handleFilterChange');
        const existingFilter = appliedFilters.find(f => f.filterType === filter.filterType);

        if (existingFilter) {
            console.log('Removing filter:', filter.filterType);
            dispatch(removeFilter({ filterType: filter.filterType }));
        } else {
            if (filter.filterType === 'rating') {
                dispatch(setFilter({ filterType: filter.filterType, value: `${filter.minRating}-5` }));
            } else if (filter.filterType === "cuisines") {
                // dispatch(setFilter({ filterType: filter.filterType, value: filter.cuisineVal }));
                dispatch(setFilter({ filterType: filter.filterType, value: filter.cuisineVal }));
            } else if (filter.filterType === "pure_veg") {
                dispatch(setFilter({ filterType: filter.filterType, value: true }));
            }
        }
    };

    return {
        appliedFilters,
        handleFilterChange
    };
};

export default useFilters;

