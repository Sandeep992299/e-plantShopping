import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import './Cart.css';

function Cart() {
    const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);

    const handleCheckout = () => {
        alert('Coming Soon! 🚀');
    };

    if (items.length === 0) {
        return (
            <div className="cart-empty">
                <h2>🛒 Your cart is empty</h2>
                <p>Browse our plants and add some to your cart!</p>
                <Link to="/products">
                    <button className="btn-continue-shopping">Continue Shopping</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h2>🛒 Shopping Cart</h2>
            <p className="cart-total-items">Total Items: {totalQuantity}</p>

            <div className="cart-items">
                {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>

            <div className="cart-summary">
                <h3>Grand Total: ${totalAmount.toFixed(2)}</h3>
                <div className="cart-actions">
                    <Link to="/products">
                        <button className="btn-continue-shopping">Continue Shopping</button>
                    </Link>
                    <button className="btn-checkout" onClick={handleCheckout}>
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
