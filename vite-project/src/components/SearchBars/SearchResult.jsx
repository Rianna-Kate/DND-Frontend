import React, { useState } from 'react';
import Modal from './Modal';
import "./SearchResult.css";

export const SearchResult = ({ result }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div 
        className="search-result" 
        onClick={handleOpenModal}
      >
        {result.name}
      </div>
      <Modal show={showModal} handleClose={handleCloseModal} spell={result} />
    </div>
  );
};
