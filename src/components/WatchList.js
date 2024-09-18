// src/components/WatchList.js
import React from 'react';
import './WatchList.css'; // Ensure this file contains your styles

const movieImages = {
    'Inception': 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
    'Wedding Crashers': 'https://m.media-amazon.com/images/M/MV5BZmJkNzViYjYtZWZlNy00OGE4LWI2MzUtYTcwNjY3Y2MyODIwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_FMjpg_UX1000_.jpg',
    'Captain Phillips': 'https://m.media-amazon.com/images/M/MV5BZmU3OGRjZTItYTI5NC00YjdhLThmNGYtMzM5YjI3MmM5YjFjXkEyXkFqcGdeQXVyMjA5MTE5Njk@._V1_.jpg',
    'Army of the Dead': 'https://m.media-amazon.com/images/M/MV5BNGY0NzgzYzctYWQwMC00MzM2LThjNGMtZjFjMWUyNzg0ZmM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg',
    'Nacho Libre': 'https://m.media-amazon.com/images/M/MV5BN2ZkNDgxMjMtZmRiYS00MzFkLTk5ZjgtZDJkZWMzYmUxYjg4XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg',
    'Harry Potter and the Half Blood Prince: Part 1': 'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
    'IT': 'https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_.jpg',
    'Pitch Perfect': 'https://m.media-amazon.com/images/M/MV5BMTcyMTMzNzE5N15BMl5BanBnXkFtZTcwNzg5NjM5Nw@@._V1_.jpg'
};
//Watch button
const WatchList = ({ cartItems }) => {
    return (
        <div>
            <h1>Your Watch List</h1>
            {cartItems.length === 0 ? (
                <p className="empty-watchlist-message">Your watch list is empty.</p>
            ) : (
                <div className="watchlist-grid">
                    {cartItems.map((item, index) => (
                        <div className="watchlist-item" key={index}>
                            <img src={movieImages[item]} alt={item} />
                            <h2>{item}</h2>
                            <button className="watch-button" onClick={() => alert(`Now watching: ${item}`)}>
                                Watch
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WatchList;