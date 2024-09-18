// src/components/Cart.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cartItems, onRemoveFromCart, onClearCart }) => {
    const navigate = useNavigate();

    const moviePrices = {
        'Inception': 1.99,
        'Wedding Crashers': 2.99,
        'Captain Phillips': 2.99,
        'Army of the Dead': 3.99,
        'Nacho Libre': 3.99,
        'Harry Potter and the Half Blood Prince: Part 1': 5.99,
        'IT': 5.99,
        'Pitch Perfect': 2.99
    };

    const totalAmount = cartItems.reduce((total, item) => {
        return total + (moviePrices[item] || 0);
    }, 0).toFixed(2);

    const handleCheckout = () => {
        alert("Order Complete!"); // Prompt user
        navigate('/watchlist'); // Navigate to Watch List page
    };

    return (
        <div>
            <h1>Cart</h1>
            {cartItems.length === 0 ? (
                <p className="empty-cart-message">Your cart is empty.</p>
            ) : (
                <div>
                    <div className="cart-grid">
                        {cartItems.map((item, index) => (
                            <div className="cart-item" key={index}>
                                <h2>{item}</h2>
                                <p>Price: ${moviePrices[item]}</p>
                                <button onClick={() => onRemoveFromCart(item)}>Delete</button>
                            </div>
                        ))}
                    </div>
                    <div className="total-container">
                        <h2>Total Amount: ${totalAmount}</h2>
                        <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;