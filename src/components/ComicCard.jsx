// src/components/ComicCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './ComicCard.css';

function ComicCard({ comic }) {
  
  // Cek apakah komik ini punya tag "Warna"
  const isColored = comic.tags.includes("Warna");

  return (
    <div className="comic-card">
      {/* Tampilkan badge HANYA JIKA isColored itu true */}
      {isColored && (
        <div className="comic-badge">WARNA</div>
      )}
      
      <Link to={`/comic/${comic.id}`}>
        <img src={comic.cover} alt={`Cover ${comic.title}`} />
        <h3>{comic.title}</h3>
        
        <div className="comic-rating">
          <span>⭐ {comic.rating}</span>
        </div>
      </Link>
    </div>
  );
}

export default ComicCard;