// src/components/Navbar.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../context/AuthContext';
import { FaUserCircle } from 'react-icons/fa'; // 1. IMPORT IKON

function Navbar() {
  const { isLoggedIn } = useAuth();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/search?q=${query}`);
    setQuery('');
  };

  return (
    <nav className="navbar">
      {/* --- BAGIAN KIRI (HANYA LOGO) --- */}
      <div className="navbar-logo">
        <Link to="/">KOMIKITA</Link>
      </div>
      
      {/* --- BAGIAN KANAN (SEMUA FITUR) --- */}
      <div className="navbar-right">
        
        <ul className="navbar-links">
          <li><Link to="/daftar-komik">Daftar Komik</Link></li>
          <li><Link to="/bookmark">Bookmark</Link></li>
          <li><Link to="/berwarna">Komik Berwarna</Link></li>
          <li><Link to="/manga">Manga</Link></li>
          <li><Link to="/manhwa">Manhwa</Link></li>
          <li><Link to="/manhua">Manhua</Link></li>
        </ul>

        <div className="navbar-search">
          <form onSubmit={handleSubmitSearch}>
            <input 
              type="text" 
              placeholder="Cari komik..." 
              className="search-input-navbar"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </div>
        
        <ul className="navbar-auth-links">
          <li>
            <Link to={isLoggedIn ? "/akun" : "/login"} title="Akun Saya">
              {/* 2. GANTI EMOJI DENGAN KOMPONEN IKON */}
              <FaUserCircle className="navbar-user-icon" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;