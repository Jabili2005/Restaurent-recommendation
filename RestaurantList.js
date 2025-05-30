import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './RestaurantList.css';
const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/restaurants')
      .then((res) => setRestaurants(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="restaurant-list-container">
      <h2>All Restaurants</h2>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <div key={restaurant._id} className="restaurant-item">
            <img src={restaurant.image} alt={restaurant.name} />
            <h3>{restaurant.name}</h3>
            <p>City: {restaurant.city}</p>
            <p>Cuisine: {restaurant.cuisine.join(', ')}</p>
            <p>Best Food: {restaurant.bestFood}</p>
            <p>Rating: {restaurant.rating}</p>
            <Link to={`/restaurant/${restaurant._id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RestaurantList;