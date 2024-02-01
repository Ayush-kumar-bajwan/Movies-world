import React from 'react';
import './Modal.css'

const Modal = ({ closeModal, userData, handleInputChange, handleBuyTicket }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}><img src="/close-svgrepo-com.svg" alt="close" style={{ width: '20px', height: '20px' }}></img></span>
        <h2>{userData.movieName}</h2>
        <div className="form-column">
          <label>
            Your Name:
            <input type="text" name="userName" value={userData.userName} onChange={handleInputChange} />
          </label>
          <label>
            Number of Tickets:
            <input type="number" name="numberOfTickets" min={1} value={userData.numberOfTickets} onChange={handleInputChange} />
          </label>
        </div>
        <button onClick={handleBuyTicket}>Buy</button>
      </div>
    </div>
  );
};

export default Modal;
