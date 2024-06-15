import React, { useEffect, useState } from 'react'
import ExploreCard from './ExploreCard'
import axios from 'axios'

function GetRestaurants({ list, type, filter, setFilter }) {
    let [restList, setRestList] = useState(list)
    async function fetchRestaurants() {

        // console.log('making a request');
        // console.log(filter, 'ye hai bhai filter');
        let res = (filter === 4.0) ? await axios.get('http://localhost:8000/restaurants/filterByRating?minRating=4&maxRating=5') : await axios.get('http://localhost:8000/restaurants')

        // console.log(res, 'hello');
        // console.log(res.data, 'res.data');
        await setRestList(res.data)
        // console.log(restList, 'restlist has changed');

    }
    // const fetchRestaurants = async () => {
    //     try {
    //         const minRating = 3;  // Replace with actual minimum rating
    //         const maxRating = 5;  // Replace with actual maximum rating
    //         console.log('Fetching restaurants with rating:', minRating, maxRating);

    //         const res = await axios.get('http://localhost:8000/restaurants/filterByRating', {
    //             params: { minRating, maxRating }
    //         });

    //         console.log('Response:', res.data);
    //         setRestList(res.data);
    //     } catch (error) {
    //         console.error('Error fetching filtered restaurants:', error);
    //     }
    // };

    useEffect(() => {
        fetchRestaurants();
    }, [filter]);

    
    
    return (
        <>
            {restList && restList.length && restList.map((item, index) => (
                <ExploreCard restaurant={item} key={index} type={type} />

            ))}
        </>
    )
}

export default GetRestaurants