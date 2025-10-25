// src/App.jsx

import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'; 

// Import Halaman Utama
import HomePage from "./pages/HomePage";
import ComicDetailPage from "./pages/ComicDetailPage";
import ReaderPage from "./pages/ReaderPage";

// Import Halaman dari Navbar
import DaftarKomikPage from "./pages/DaftarKomikPage";
import BookmarkPage from "./pages/BookmarkPage";
import BerwarnaPage from "./pages/BerwarnaPage";
import MangaPage from "./pages/MangaPage";
import ManhwaPage from "./pages/ManhwaPage";
import ManhuaPage from "./pages/ManhuaPage";

// Import Halaman Login/Akun
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";

// 1. --- IMPORT HALAMAN SEARCH BARU ---
import SearchPage from "./pages/SearchPage";


function App() {
  return (
    <div> 
      <Navbar /> 
      
      <div className="container">
        
        <Routes>
          {/* Rute Halaman Utama */}
          <Route path="/" element={<HomePage />} /> 
          
          {/* Rute Halaman Navbar */}
          <Route path="/daftar-komik" element={<DaftarKomikPage />} />
          <Route path="/bookmark" element={<BookmarkPage />} />
          <Route path="/berwarna" element={<BerwarnaPage />} />
          <Route path="/manga" element={<MangaPage />} />
          <Route path="/manhwa" element={<ManhwaPage />} />
          <Route path="/manhua" element={<ManhuaPage />} />

          {/* Rute Halaman Auth */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/akun" element={<AccountPage />} />
          
          {/* 2. --- DAFTARKAN RUTE SEARCH BARU --- */}
          <Route path="/search" element={<SearchPage />} />

          {/* Rute Detail & Reader */}
          <Route path="/comic/:id" element={<ComicDetailPage />} />
          <Route 
            path="/comic/:id/chapter/:chapterId" 
            element={<ReaderPage />} 
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;