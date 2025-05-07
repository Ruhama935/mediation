import React, { useState } from 'react';
import { Avatar } from 'primereact/avatar';
import { useNavigate } from 'react-router-dom';


const ImageGallery = ({ images = [] }) => {
  const baseUrl = 'http://localhost:8080/uploads/';
  const navigate = useNavigate();
  const displayedImages = images.slice(0, 6);
  const [mainImage, setMainImage] = useState(displayedImages[0]);
  if (displayedImages.length === 0) return null;

  const handleClick = () => {
    navigate(`/images`, { state: { images } }); 
  }
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      gap: '20px',
      flexWrap: 'wrap',
      marginTop: '20px',
    }}>
      <img
        src={`${baseUrl}${mainImage}`}
        alt="main"
        onClick={handleClick}
        style={{
          width: '500px',
          height: '400px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          objectFit: 'cover',
          transition: 'all 0.3s ease-in-out',
          maxWidth: '90vw',
          marginRight: '30px',
          cursor: "pointer"
        }}
      />
      <div style={{
        display: 'grid',
        gridTemplateColumns: window.innerWidth < 600 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
        gap: '10px',
        maxWidth: window.innerWidth < 600 ? '100%' : '220px',
        marginTop: '20px',
      }}>

        {displayedImages.map((img, index) => (
          <img
            key={index}
            src={`${baseUrl}${img}`}
            alt={`thumb-${index}`}
            onClick={handleClick}
            style={{
              width: '200px',
              height: '150px',
              borderRadius: '8px',
              objectFit: 'cover',
              cursor: 'pointer',
              boxShadow:'0 2px 6px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.3s ease',
              margin: '10px',
            }}
          />
        ))}
      </div>

    </div>
  );
};

export default ImageGallery;
