// CartItem.jsx - Individual Cart Item Component
import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from '../store/CartSlice';
import './CartItem.css';

function CartItem({ item }) {
    const dispatch = useDispatch();

    const handleIncrease = () => {
        dispatch(increaseQuantity(item.id));
    };

    const handleDecrease = () => {
        dispatch(decreaseQuantity(item.id));
    };

    const handleRemove = () => {
        dispatch(removeItem(item.id));
    };

    return (
        <div className="cart-item">
            {/* Thumbnail */}
            <img
                src={`/images/${item.image}`}
                alt={item.name}
                className="cart-item-image"
            />
            
            <div className="cart-item-details">
                {/* Name */}
                <h3>{item.name}</h3>
                {/* Unit Price */}
                <p className="cart-item-price">Unit Price: ${item.price}</p>
                
                {/* Quantity buttons */}
                <div className="cart-item-quantity">
                    <button onClick={handleDecrease}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={handleIncrease}>+</button>
                </div>
                
                {/* Total cost for this item */}
                <p className="cart-item-total">Total: ${item.totalPrice.toFixed(2)}</p>
            </div>
            
            {/* Delete button */}
            <button className="btn-delete" onClick={handleRemove}>
                🗑️ Delete
            </button>
        </div>
    );
}

export default CartItem;
