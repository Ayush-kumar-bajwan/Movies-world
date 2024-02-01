import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Page.css';
import Modal from '../../components/Modal/Modal';

export const Page = () => {
  const location = useLocation();
  const { state } = location;

  const [isModalOpen, setModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    movieName: '',
    userName: '',
    numberOfTickets: 1,
  });

  if (!state || !state.movie) {
    return (
      <div className="main">
        <div className="right">No movie data available</div>
      </div>
    );
  }

  const { show } = state.movie;

  if (!show) {
    return (
      <div className="main">
        <div className="right">No show data available</div>
      </div>
    );
  }

  const { name, language, premiered, image, summary, rating , ended ,status ,runtime ,genres } = show;

  const openModal = () => {
    setModalOpen(true);
    setUserData({
      ...userData,
      movieName: name,
    });
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleBuyTicket = () => {
    // Save user data to local storage
    localStorage.setItem('userData', JSON.stringify(userData));
    // Close the modal
    closeModal();
  };

  return (
    <div className="main-container">
      <div className="movie-container">
        <div className="left">
          <img src={image !== null ? image.medium : "https://via.placeholder.com/400"} alt={name} />
          <h2>{name}</h2>
          <button className="buy-ticket-button" onClick={openModal}>
            Buy Ticket
          </button>
        </div>
        <div className="right">
          <p><strong>Premiered:</strong> <span>{premiered}</span></p>
          <p><strong>Status:</strong> <span>{status && status !== null ? status : "N/A"}</span></p>
          <p><strong>Rating:</strong> <span>{rating && rating.average !== null ? rating.average : "N/A"}</span></p>
          <p><strong>Genres:</strong> <span>{genres && genres !== null ? genres : "N/A"}</span></p>
          <div className="summary">
            <strong>Summary:</strong>
            <div dangerouslySetInnerHTML={{ __html: summary }} />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal closeModal={closeModal} userData={userData} handleInputChange={handleInputChange} handleBuyTicket={handleBuyTicket} />
      )}
    </div>
  );
};
