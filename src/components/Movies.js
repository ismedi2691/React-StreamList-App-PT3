import React, { useState } from 'react'; // Ensure useState is imported
import './Movies.css'; // Import CSS for styling

const Movies = ({ onAddToCart }) => {
    const moviesWithPricing = [
        { title: 'Inception', price: 1.99, cover: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg' },
        { title: 'Wedding Crashers', price: 2.99, cover: 'https://m.media-amazon.com/images/M/MV5BZmJkNzViYjYtZWZlNy00OGE4LWI2MzUtYTcwNjY3Y2MyODIwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_FMjpg_UX1000_.jpg' },
        { title: 'Captain Phillips', price: 2.99, cover: 'https://m.media-amazon.com/images/M/MV5BZmU3OGRjZTItYTI5NC00YjdhLThmNGYtMzM5YjI3MmM5YjFjXkEyXkFqcGdeQXVyMjA5MTE5Njk@._V1_.jpg' },
        { title: 'Army of the Dead', price: 3.99, cover: 'https://m.media-amazon.com/images/M/MV5BNGY0NzgzYzctYWQwMC00MzM2LThjNGMtZjFjMWUyNzg0ZmM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg' },
        { title: 'Nacho Libre', price: 3.99, cover: 'https://m.media-amazon.com/images/M/MV5BN2ZkNDgxMjMtZmRiYS00MzFkLTk5ZjgtZDJkZWMzYmUxYjg4XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg1' },
        { title: 'Harry Potter and the Half Blood Prince: Part 1', price: 5.99, cover: 'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg3' },
        { title: 'IT', price: 5.99, cover: 'https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_.jpg' },
        { title: 'Pitch Perfect', price: 2.99, cover: 'https://m.media-amazon.com/images/M/MV5BMTcyMTMzNzE5N15BMl5BanBnXkFtZTcwNzg5NjM5Nw@@._V1_.jpg' }
    ];

    const [notification, setNotification] = useState('');

    const handleAddToCart = (movie) => {
        if (onAddToCart(movie.title)) {
            setNotification('Item already in cart.');
        } else {
            setNotification('');
        }
    };

    return (
        <div>
            <h1>Movies Wish List</h1>
            {notification && <p className="notification">{notification}</p>}
            <div className="movie-grid">
                {moviesWithPricing.map((movie, index) => (
                    <div className="movie-card" key={index}>
                        <img src={movie.cover} alt={movie.title} />
                        <h2>{movie.title}</h2>
                        <p>${movie.price}</p>
                        <button onClick={() => handleAddToCart(movie)}>Rent Movie</button>
                     </div>
                ))}
            </div>
        </div>
    );
};

export default Movies;