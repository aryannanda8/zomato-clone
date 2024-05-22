import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

function IndividualRestaurant({ setVisible }) {
    setVisible(false);

    const location = useLocation();
    const restaurant = location.state?.restaurant;

    if (!restaurant) {
        return <div>No restaurant data available</div>;
    }

    const name = restaurant?.info?.name ?? "";
    const imageUrl = restaurant?.info?.image?.url ?? "";
    const rating = restaurant?.info?.rating?.aggregate_rating ?? "N/A";
    const ratingText = restaurant?.info?.rating?.rating_text ?? "No Rating";
    const ratingColor = restaurant?.info?.rating?.rating_color ?? "gray";
    const votes = restaurant?.info?.rating?.votes ?? "0";
    const address = restaurant?.info?.locality?.address ?? "No address available";
    const localityName = restaurant?.info?.locality?.name ?? "Unknown locality";
    const cftText = restaurant?.info?.cft?.text ?? "N/A";
    const cfoText = restaurant?.info?.cfo?.text ?? "N/A";
    const timingText = restaurant?.info?.timing?.text ?? "No timing information";
    const cuisines = restaurant?.info?.cuisine?.map((c) => c.name).join(', ') ?? "No cuisines available";
    const deliveryTime = restaurant?.order?.deliveryTime ?? "N/A";
    const orderText = restaurant?.order?.actionInfo?.text ?? "Order Now";
    const orderUrl = restaurant?.order?.actionInfo?.clickUrl ?? "#";
    const bulkOffers = restaurant?.bulkOffers ?? [];

    return (
        <div className="container mx-auto p-4">
            <header className="mb-4">
                <h1 className="text-2xl font-bold">{name}</h1>
            </header>
            <img
                src={imageUrl}
                alt={name}
                className="w-full h-64 object-cover rounded-md mb-4"
            />
            <div className="details grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="info p-4 bg-white rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-2">Information</h2>
                    <p className="mb-1">
                        <strong>Address:</strong> {address}
                    </p>
                    <p className="mb-1">
                        <strong>Area:</strong> {localityName}
                    </p>
                    <p className="mb-1">
                        <strong>Cuisines:</strong> {cuisines}
                    </p>
                    <p className="mb-1">
                        <strong>Cost for Two:</strong> {cftText}
                    </p>
                    <p className="mb-1">
                        <strong>Cost for One:</strong> {cfoText}
                    </p>
                    <p className="mb-1">
                        <strong>Timing:</strong> {timingText}
                    </p>
                </div>
                <div className="rating-offers p-4 bg-white rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-2">Ratings & Offers</h2>
                    <div className="flex items-center mb-1">
                        <span
                            className="text-white px-2 py-1 rounded mr-2"
                            style={{ backgroundColor: `#${ratingColor}` }}
                        >
                            {rating} <FaStar className="inline" />
                        </span>
                        <span>({votes} reviews)</span>
                    </div>
                    <p className="mb-2">
                        <strong>Rating Text:</strong> {ratingText}
                    </p>
                    {bulkOffers.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold mb-1">Offers:</h3>
                            <ul>
                                {bulkOffers.map((offer, index) => (
                                    <li key={index} className="text-blue-500">
                                        {offer.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className="order-info mt-4 p-4 bg-white rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-2">Order Information</h2>
                <p>
                    <strong>Delivery Time:</strong> {deliveryTime}
                </p>
                <button
                    className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
                    onClick={() => window.location.href = orderUrl}
                >
                    {orderText}
                </button>
            </div>
        </div>
    );
}

export default IndividualRestaurant;
