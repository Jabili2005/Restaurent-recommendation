import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './RestaurantSearch.css';
const RestaurantSearch = () => {
  const [city, setCity] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const handleSearch = () => {
    axios
      .get(`http://localhost:5000/api/restaurants/city/${city}`)
      .then((res) => setRestaurants(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="restaurant-search-container">
      <div className="search-input">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
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
export default RestaurantSearch;