import React from 'react';
import './Modal.css';

const Modal = ({ show, handleClose, spell }) => {
  return (
    <div className={`modal ${show ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        {spell && (
          <div>
            <h2>{spell.name}</h2>
            <p><strong>Level:</strong> {spell.level}</p>
            <p><strong>School of Magic:</strong> {spell.school}</p>
            <p><strong>Cast Time:</strong> {spell.casttime}</p>
            <p><strong>Range:</strong> {spell.range}</p>
            <p><strong>Duration:</strong> {spell.duration}</p>
            <p><strong>Components:</strong> {spell.components}</p>
            <p><strong>Description:</strong> {spell.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
