// src/pages/HomePage.jsx

import React from 'react';
import { comics } from '../data'; // 1. Import data komik
import ComicCard from '../components/ComicCard'; // 2. Import komponen kartu

function HomePage() {
  return (
    <div>
      {/* Judul untuk halaman utama */}
      <h2>Komik Terbaru</h2>
      <p>Telusuri semua komik yang tersedia di web kami.</p>
      <hr />
      
      {/* 3. Tampilkan daftar komik (tanpa filter bar) */}
      <div className="comic-list">
        {comics.map((comic) => (
          <ComicCard key={comic.id} comic={comic} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;