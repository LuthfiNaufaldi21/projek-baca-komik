// src/pages/BookmarkPage.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { comics } from '../data';
import ComicCard from '../components/ComicCard';
// Kita hapus 'Link' karena tidak dipakai lagi
// import { Link } from 'react-router-dom'; 

function BookmarkPage() {
  const { isLoggedIn, user } = useAuth();

  // 1. JIKA USER BELUM LOGIN (SESUAI PERMINTAAN ANDA)
  if (!isLoggedIn) {
    return (
      <div>
        {/* Tampilkan pesan besar, tanpa link */}
        <h2 style={{ 
            textAlign: 'center', 
            marginTop: '60px', 
            color: '#444' 
        }}>
          Anda harus daftar terlebih dahulu
        </h2>
      </div>
    );
  }

  // 2. JIKA SUDAH LOGIN, cari data komiknya
  const bookmarkedComics = comics.filter((comic) => 
    user.bookmarks.includes(comic.id)
  );

  return (
    <div>
      <h2>Bookmark Saya</h2>
      
      {bookmarkedComics.length === 0 ? (
        // 3a. JIKA KOSONG (SESUAI PERMINTAAN ANDA)
        <p>Anda belum memiliki bookmark.</p>
      ) : (
        // 3b. JIKA ADA ISINYA
        <div className="comic-list">
          {bookmarkedComics.map((comic) => (
            <ComicCard key={comic.id} comic={comic} />
          ))}
        </div>
      )}
    </div>
  );
}
export default BookmarkPage;