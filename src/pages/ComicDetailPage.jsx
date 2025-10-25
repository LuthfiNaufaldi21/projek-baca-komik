// src/pages/ComicDetailPage.jsx

import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { comics } from '../data';
import { useAuth } from '../context/AuthContext'; // 1. Import hook

function ComicDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate(); // Untuk redirect ke login
  
  // 2. Ambil semua fungsi yang kita butuh dari Context
  const { 
    isLoggedIn, 
    addBookmark, 
    removeBookmark, 
    isBookmarked 
  } = useAuth();

  const comic = comics.find((c) => c.id === id);

  if (!comic) {
    return <div>Komik tidak ditemukan!</div>;
  }

  // 3. Cek apakah komik INI sudah di-bookmark
  const currentlyBookmarked = isBookmarked(comic.id);

  // 4. Buat fungsi untuk tombol
  const handleBookmarkClick = () => {
    // 4a. JIKA BELUM LOGIN, tendang ke halaman login
    if (!isLoggedIn) {
      navigate('/login'); // Redirect ke login
      return;
    }

    // 4b. JIKA SUDAH LOGIN, lakukan aksi
    if (currentlyBookmarked) {
      removeBookmark(comic.id);
    } else {
      addBookmark(comic.id);
    }
  };

  return (
    <div>
      <Link to="/daftar-komik">&larr; Kembali ke Daftar Komik</Link>
      <hr />
      
      {/* Kita perlu sedikit CSS di sini untuk membuat header-nya
        terlihat bagus (gambar di kiri, info di kanan).
        Kita bisa gunakan 'style' inline.
      */}
      <div 
        className="detail-header" 
        style={{ 
          display: 'flex', 
          gap: '24px', // Jarak antara gambar dan info
        }}
      >
        <img 
          src={comic.cover} 
          alt={comic.title} 
          style={{ 
            width: '250px', // Lebar gambar
            height: 'auto', // Tinggi otomatis
            objectFit: 'cover', 
            borderRadius: '8px',
            border: '1px solid var(--border-color)'
          }} 
        />
        
        <div style={{ flex: 1 }}> {/* Ambil sisa ruang */}
          <h2>{comic.title}</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            <strong>Penulis:</strong> {comic.author}
          </p>
          <p>
            <strong>Sinopsis:</strong> {comic.synopsis}
          </p>
          
          {/* 5. TOMBOL BOOKMARK (dengan style baru) */}
          <button 
            onClick={handleBookmarkClick}
            style={{ 
              padding: '10px 15px', 
              fontSize: '1rem', 
              cursor: 'pointer',
              // Gunakan warna primer kita
              backgroundColor: currentlyBookmarked ? '#dc3545' : 'var(--primary-color)', 
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontWeight: '600', // Teks tebal
              transition: 'background-color 0.2s ease, transform 0.2s ease' // Animasi
            }}
          >
            {/* Teks tombol berubah tergantung status */}
            {currentlyBookmarked 
              ? 'Hapus dari Bookmark' 
              : 'Tambah ke Bookmark'}
          </button>
        </div>
      </div>

      <hr />
      <h3>Daftar Chapter</h3>
      
      {/* Styling daftar chapter
      */}
      <ul style={{ 
          listStyle: 'none', 
          padding: 0, 
          margin: 0,
          border: '1px solid var(--border-color)',
          borderRadius: '8px'
      }}>
        {comic.chapters.map((chapter) => (
          <li 
            key={chapter.id}
            style={{
              padding: '12px 16px',
              borderBottom: '1px solid var(--border-color)',
            }}
          >
            <Link 
              to={`/comic/${comic.id}/chapter/${chapter.id}`}
              style={{ 
                fontWeight: 500,
                display: 'block' // Buat link memenuhi area
              }}
            >
              {chapter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ComicDetailPage;