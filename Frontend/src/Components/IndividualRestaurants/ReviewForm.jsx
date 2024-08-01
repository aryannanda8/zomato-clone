import React, { useState } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';

const ReviewForm = ({ restaurantId, onNewReview }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { rating, comment };

        try {
            const res = await axios.post(`https://zomato-clone-server.vercel.app/restaurants/${restaurantId}/review`, data);
            // const res = await axios.post(`http://localhost:8000/restaurants/${restaurantId}/review`, data);
            // console.log(res);
            onNewReview(res.data.review);
            setRating(0);
            setComment("");
        } catch (error) {
            console.error('Error submitting review:', error);
            setError('Failed to submit review. Please try again.');
        }
    };

    return (
        <div>
            
            <h2 className='text-xl font-semibold mb-2'>Leave Your Review</h2>
            <form onSubmit={handleSubmit}>
                <fieldset className="starability-basic">
                    <input
                        type="radio"
                        id="no-rate"
                        className="input-no-rate"
                        name="rating"
                        value="0"
                        checked={rating === 0}
                        onChange={() => setRating(0)}
                        aria-label="No rating."
                    />
                    {[...Array(5)].map((_, index) => {
                        const ratingValue = index + 1;
                        const titles = ["Terrible", "Not good", "Average", "Very good", "Amazing"];
                        return (
                            <React.Fragment key={ratingValue}>
                                <input
                                    type="radio"
                                    id={`first-rate${ratingValue}`}
                                    name="rating"
                                    value={ratingValue}
                                    checked={rating === ratingValue}
                                    onChange={() => setRating(ratingValue)}
                                />
                                <label htmlFor={`first-rate${ratingValue}`} title={titles[index]}>
                                    {ratingValue} star{ratingValue > 1 ? 's' : ''}
                                </label>
                            </React.Fragment>
                        );
                    })}
                </fieldset>

                <div className='flex flex-col'>
                    <label htmlFor="comment">Comment</label>
                    <textarea
                        id='comment'
                        className='border-2'
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <button type='submit' className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Submit Review</button>
            </form>
        </div>
    );
};

export default ReviewForm;
