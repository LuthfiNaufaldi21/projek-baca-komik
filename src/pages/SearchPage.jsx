// src/pages/SearchPage.jsx

import React from 'react';
import { useSearchParams } from 'react-router-dom'; // Hook untuk baca parameter URL
import { comics } from '../data'; // Data komik kita
import ComicCard from '../components/ComicCard'; // Komponen kartu komik

function SearchPage() {
  // 1. Dapatkan parameter dari URL
  // Jika URL-nya /search?q=one piece, maka 'searchParams.get("q")' akan berisi "one piece"
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  // 2. Filter data 'comics' berdasarkan 'query'
  // Kita ubah keduanya jadi huruf kecil agar pencarian tidak sensitif (A == a)
  const searchResults = comics.filter((comic) => 
    comic.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      {/* Tampilkan judul pencarian */}
      <h2>Hasil Pencarian untuk: "{query}"</h2>
      <hr />

      {/* 3. Tampilkan hasil */}
      {searchResults.length > 0 ? (
        // 3a. Jika hasil ditemukan
        <div className="comic-list">
          {searchResults.map((comic) => (
            <ComicCard key={comic.id} comic={comic} />
          ))}
        </div>
      ) : (
        // 3b. Jika tidak ada hasil
        <p>Maaf, komik dengan judul "{query}" tidak ditemukan.</p>
      )}
    </div>
  );
}

export default SearchPage;