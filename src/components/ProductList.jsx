import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/CartSlice';
import './ProductList.css';

const plants = {
  'Air Purifying': [
    { id: 1, name: 'Snake Plant', price: 25, image: 'snake-plant.jpg', description: 'Excellent air purifier' },
    { id: 2, name: 'Peace Lily', price: 30, image: 'peace-lily.jpg', description: 'Removes toxins from air' },
    { id: 3, name: 'Spider Plant', price: 20, image: 'spider-plant.jpg', description: 'Great for beginners' },
    { id: 4, name: 'Aloe Vera', price: 22, image: 'aloe-vera.jpg', description: 'Healing properties' },
    { id: 5, name: 'Boston Fern', price: 28, image: 'boston-fern.jpg', description: 'Humidity lover' },
    { id: 6, name: 'Rubber Plant', price: 35, image: 'rubber-plant.jpg', description: 'Large, glossy leaves' },
  ],
  'Low Maintenance': [
    { id: 7, name: 'ZZ Plant', price: 32, image: 'zz-plant.jpg', description: 'Thrives on neglect' },
    { id: 8, name: 'Pothos', price: 15, image: 'pothos.jpg', description: 'Trailing beauty' },
    { id: 9, name: 'Jade Plant', price: 18, image: 'jade-plant.jpg', description: 'Feng shui favorite' },
    { id: 10, name: 'Cactus', price: 12, image: 'cactus.jpg', description: 'Desert survivor' },
    { id: 11, name: 'Succulent', price: 10, image: 'succulent.jpg', description: 'Colorful varieties' },
    { id: 12, name: 'Cast Iron Plant', price: 25, image: 'cast-iron.jpg', description: 'Almost indestructible' },
  ],
  'Flowering Plants': [
    { id: 13, name: 'Orchid', price: 45, image: 'orchid.jpg', description: 'Elegant flowers' },
    { id: 14, name: 'Anthurium', price: 38, image: 'anthurium.jpg', description: 'Heart-shaped blooms' },
    { id: 15, name: 'Bromeliad', price: 30, image: 'bromeliad.jpg', description: 'Tropical colors' },
    { id: 16, name: 'Kalanchoe', price: 20, image: 'kalanchoe.jpg', description: 'Long-blooming' },
    { id: 17, name: 'Christmas Cactus', price: 22, image: 'christmas-cactus.jpg', description: 'Holiday bloomer' },
    { id: 18, name: 'African Violet', price: 16, image: 'african-violet.jpg', description: 'Delicate flowers' },
  ],
};

function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  return (
    <div className="product-list">
      <h1>🌱 Our Plants</h1>
      <p className="subtitle">Find the perfect plant for your space</p>

      {Object.keys(plants).map((category) => (
        <div key={category} className="category-section">
          <h2>{category}</h2>
          <div className="plant-grid">
            {plants[category].map((plant) => (
              <div key={plant.id} className="plant-card">
                <img
                  src={`/images/${plant.image}`}
                  alt={plant.name}
                  className="plant-image"
                />
                <h3>{plant.name}</h3>
                <p className="plant-description">{plant.description}</p>
                <p className="plant-price">${plant.price}</p>
                <button
                  className="btn-add-cart"
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedItems.includes(plant.id)}
                >
                  {addedItems.includes(plant.id) ? 'Added ✅' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
