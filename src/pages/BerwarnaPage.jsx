// src/pages/BerwarnaPage.jsx

import React from 'react';
import { comics } from '../data'; // 1. Import data komik
import ComicCard from '../components/ComicCard'; // 2. Import komponen kartu

function BerwarnaPage() {
  
  // 3. Filter data 'comics' untuk mencari yang tag-nya "Warna"
  const coloredComics = comics.filter((comic) => 
    comic.tags.includes("Warna")
  );

  return (
    <div>
      <h2>Komik Berwarna</h2>
      <p>Menampilkan semua komik yang dirilis dalam format berwarna.</p>
      <hr />
      
      {/* 4. Tampilkan hasil filter */}
      {/* Kita cek dulu apakah ada hasilnya */}
      {coloredComics.length > 0 ? (
        
        // Jika ada, tampilkan grid-nya
        <div className="comic-list">
          {coloredComics.map((comic) => (
            <ComicCard key={comic.id} comic={comic} />
          ))}
        </div>
        
      ) : (
        
        // Jika tidak ada komik berwarna
        <p>Belum ada komik berwarna yang terdaftar.</p>
        
      )}
    </div>
  );
}

export default BerwarnaPage;