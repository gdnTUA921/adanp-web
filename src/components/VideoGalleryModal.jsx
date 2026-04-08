import React, { useState } from 'react';
import './VideoGalleryModal.css';

const VideoGalleryModal = ({ isOpen, onClose, onSave }) => {
  const [categories, setCategories] = useState([
    
  ]);

  const handleAddMore = () => {
    const newCategory = {
      id: categories.length + 1,
      name: `Category ${categories.length + 1}`,
      image: null
    };
    setCategories([...categories, newCategory]);
  };

  const handleSave = () => {
    onSave(categories);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="video-modal-overlay">
      <div className="video-modal-content">
        <h2 className="video-modal-title">Video Gallery</h2>
        
        <div className="video-categories">
          {categories.map((category) => (
            <div key={category.id} className="video-category">
              {category.image ? (
                <img src={category.image} alt={category.name} className="category-image" />
              ) : (
                <div className="category-image-placeholder"></div>
              )}
              <span className="category-name">{category.name}</span>
            </div>
          ))}
          
          <button className="add-more-btn" onClick={handleAddMore}>
            <div className="add-more-icon">+</div>
            <span>add more</span>
          </button>
        </div>
        
        <div className="video-modal-actions">
          <button className="video-modal-btn video-modal-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="video-modal-btn video-modal-save" onClick={handleSave}>
            Save Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoGalleryModal;
