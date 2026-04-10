import React, { useState } from 'react';
import './PhotoGalleryModal.css';

const PhotoGalleryModal = ({ isOpen, onClose, onSave }) => {
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
    <div className="photo-modal-overlay">
      <div className="photo-modal-content">
        <h2 className="photo-modal-title">Photo Gallery</h2>
        
        <div className="photo-categories">
          {categories.map((category) => (
            <div key={category.id} className="photo-category">
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
        
        <div className="photo-modal-actions">
          <button className="photo-modal-btn photo-modal-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="photo-modal-btn photo-modal-save" onClick={handleSave}>
            Save Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoGalleryModal;
