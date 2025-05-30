import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './RestaurantDetails.css';
const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/restaurants/${id}`)
      .then((res) => setRestaurant(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  if (!restaurant) return <div>Loading...</div>;
  return (
    <div className="restaurant-details-container">
      <h2>{restaurant.name}</h2>
      <img src={restaurant.image} alt={restaurant.name} />
      <div className="details-info">
        <p><strong>City:</strong> {restaurant.city}</p>
        <p><strong>Cuisine:</strong> {restaurant.cuisine.join(', ')}</p>
        <p><strong>Best Food:</strong> {restaurant.bestFood}</p>
        <p><strong>Rating:</strong> {restaurant.rating}</p>
        <p><strong>Description:</strong> {restaurant.description}</p>
      </div>
    </div>
  );
};
export default RestaurantDetails;