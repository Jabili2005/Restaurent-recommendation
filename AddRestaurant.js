import React, { useState } from 'react';
import axios from 'axios';
import './AddRestaurant.css';
const AddRestaurant = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [bestFood, setBestFood] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState(''); 
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRestaurant = {
      name,
      city,
      cuisine: cuisine.split(',').map((item) => item.trim()),
      bestFood,
      rating: parseFloat(rating),
      image,
      description, 
    };
    axios
      .post('http://localhost:5000/api/restaurants/add', newRestaurant)
      .then(() => {
        alert('Restaurant added!');
        setName('');
        setCity('');
        setCuisine('');
        setBestFood('');
        setRating('');
        setImage('');
        setDescription('');
      })
      .catch((err) => console.log(err));
  };
  return (
    <form className="add-restaurant-form" onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <label>City:</label>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
      <label>Cuisine (comma-separated):</label>
      <input type="text" value={cuisine} onChange={(e) => setCuisine(e.target.value)} required />
      <label>Best Food:</label>
      <input type="text" value={bestFood} onChange={(e) => setBestFood(e.target.value)} required />
      <label>Rating:</label>
      <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} required />
      <label>Image URL:</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      <label>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Add Restaurant</button>
    </form>
  );
};
export default AddRestaurant;