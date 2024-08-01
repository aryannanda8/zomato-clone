import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ExploreCard from './ExploreCard';
import axios from 'axios';
import PlaceholderCard from './PlaceholderCard';
import { useSelector } from 'react-redux';

function GetRestaurants({ list, type }) {
    const [restList, setRestList] = useState([]);
    const [loading, setLoading] = useState(true);
    // const appliedFilters = useSelector((store) => store.filter.filters);
    // const navigate = useNavigate();
    const location = useLocation(); //current location along with the search params

    useEffect(() => {
        fetchRestaurants();
    }, [location.search]); // fetchRestaurants call jab bhi location.search change ho


    const fetchRestaurants = async () => {
        setLoading(true);
        try {
            // const response = await axios.get('http://localhost:8000/restaurants', {
            const response = await axios.get('https://zomato-clone-server.vercel.app/restaurants', {
                params: new URLSearchParams(location.search)
            });
            console.log('API Response:', response.data); // Log the response
            setRestList(response.data);
        } catch (error) {
            console.error('Error fetching restaurants:', error);
        } finally {
            setLoading(false);
        }
    };



    return (
        <>
            {loading
                ? Array(10).fill().map((_, index) => <PlaceholderCard key={index} />)
                : restList && restList.length ? restList.map((item, index) => 
                    <ExploreCard restaurant={item} key={index} type={type} />
                )
                    : <div className='ml-0'>Sorry, no restaurants to display</div>
            }
        </>
    );
}

export default GetRestaurants;

