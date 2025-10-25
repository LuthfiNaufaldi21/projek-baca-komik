// src/pages/DaftarKomikPage.jsx
// (Ini adalah isi dari HomePage.jsx yang lama)

import React from 'react';
import { comics } from '../data'; 
import FilterBar from '../components/FilterBar';
import ComicCard from '../components/ComicCard';

function DaftarKomikPage() {
  return (
    <div>
      {/* Filter Bar HANYA MUNCUL DI SINI */}
      <FilterBar />

      <h2>Daftar Komik</h2>
      
      <div className="comic-list">
        {comics.map((comic) => (
          <ComicCard key={comic.id} comic={comic} />
        ))}
      </div>
    </div>
  );
}

export default DaftarKomikPage;