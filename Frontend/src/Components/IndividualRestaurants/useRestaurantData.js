import { useState, useEffect } from 'react';
import axios from 'axios';

const useRestaurantData = (restaurantId) => {
    const [restaurant, setRestaurant] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRestaurantData = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/restaurants/${restaurantId}`);
                setRestaurant(res.data);
                setReviews(res.data.reviews);
            } catch (error) {
                console.error('Error fetching restaurant data:', error);
                setError('Failed to fetch restaurant data.');
            } finally {
                setLoading(false);
            }
        };

        if (restaurantId) {
            fetchRestaurantData();
        }
    }, []);

    return { restaurant, reviews, loading, error, setReviews };
};

export default useRestaurantData;
