// src/pages/AccountPage.jsx

import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom'; // Tambahkan Link

function AccountPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Arahkan ke home setelah logout
  };

  // Jika user BELUM LOGIN tapi tersesat ke /akun
  // (Ini adalah fallback, harusnya diarahkan oleh Navbar)
  if (!user) {
    return (
      <div>
        <p>Anda belum login.</p>
        <Link to="/login">Silakan Login atau Daftar</Link>
      </div>
    );
  }

  // JIKA USER SUDAH LOGIN (SESUAI PERMINTAAN ANDA)
  return (
    <div>
      <h2>Akun Saya</h2>
      <p>Selamat datang, <strong>{user.username}</strong>!</p>
      
      <button 
        onClick={handleLogout} 
        style={{ 
          padding: '10px 20px', 
          backgroundColor: '#dc3545', // Biarkan merah untuk 'danger'
          color: 'white', 
          border: 'none', 
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: '600', // Tambah ini
          transition: 'background-color 0.2s ease' // Tambah ini
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default AccountPage;