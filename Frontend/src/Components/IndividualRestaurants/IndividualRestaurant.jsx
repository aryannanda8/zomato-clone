

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './starStyle.css';
import useRestaurantData from './useRestaurantData';
import ReviewForm from './ReviewForm';
import { FaStar } from 'react-icons/fa';


const IndividualRestaurant = ({ setVisible }) => {
    const location = useLocation();
    const restaurantId = location.state?.restaurantId;
    const { restaurant, reviews, loading, error, setReviews } = useRestaurantData(restaurantId);

    useEffect(() => {
        setVisible(false);
    }, [setVisible]);

    const handleNewReview = (newReview) => {
        setReviews((prevReviews) => [...prevReviews, newReview]);
    };
   

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!restaurant) {
        return <div>No restaurant data available</div>;
    }

    const { name, image, deliveryTime, approxPrice, cuisines, locality, distance, cardAction } = restaurant;

    const calculateRating = () =>reviews.length?( (reviews.reduce((accum, indRating) => { return accum + indRating.rating }, 0))/reviews.length).toFixed(1): 0
    return (
        <div className="container mx-auto p-4">
            <header className="mb-4">
                <h1 className="text-2xl font-bold">{name}</h1>
            </header>
            <img src={image} alt={name} className="w-full h-64 object-cover rounded-md mb-4" />
            <div className="details grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="info p-4 bg-white rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-2">Information</h2>
                    <p className="mb-1"><strong>Approx. Price:</strong> {approxPrice}</p>
                    <p className="mb-1"><strong>Delivery Time:</strong> {deliveryTime}</p>
                    <p className="mb-1"><strong>Distance:</strong> {distance}</p>
                    <p className="mb-1"><strong>Locality:</strong> {locality}</p>
                    <p className="mb-1"><strong>Cuisines:</strong> {cuisines?.map((item) => item.name).join(', ')}</p>
                </div>
                <div>
                    <div className="flex items-center mb-1">
                        <span
                            className="text-white px-2 py-1 rounded-lg mr-3"
                            style={{ backgroundColor: `green` }}
                        >
                            <div className='flex items-center gap-1'>
                                {calculateRating()} <FaStar className="inline" />

                            </div>
                            
                        </span>
                        <span>({reviews.length} reviews)</span>
                    </div>
                    <ReviewForm restaurantId={restaurantId} onNewReview={handleNewReview} />

                </div>
            </div>

            <div className="flex justify-between order-info mt-4 p-4 bg-white rounded-lg shadow">
                <div>
                    <h2 className="text-xl font-semibold mb-2">Order Information</h2>
                    <p><strong>Delivery Time:</strong> {deliveryTime}</p>
                    <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded" onClick={() => window.location.href = cardAction}>
                        Order Now
                    </button>
                </div>
                <div className='w-1/2'>

                    <h2 className='text-xl font-semibold mb-2'>Reviews:</h2>
                    {reviews && reviews.length > 0 ? (
                        reviews.map((review, index) => (
                            <div key={index}>
                                {/* <p><strong>Rating:</strong> {review.rating}</p> */}

                                <p className="starability-result text-sm" data-rating={review.rating}>
                                    {/* Rated: {review.rating} stars */}
                                </p>
                                <p><strong>Comment:</strong> {review.comment}</p>
                                <br />
                            </div>
                        ))
                    ) : (
                        <p>No reviews yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default IndividualRestaurant;
