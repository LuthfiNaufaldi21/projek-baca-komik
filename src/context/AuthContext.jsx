// src/context/AuthContext.jsx

// 1. --- BARU --- Impor 'useEffect'
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  
  // 2. --- BARU --- 'useState' sekarang membaca dari localStorage saat pertama kali dimuat
  // Ini disebut "Lazy Initializer"
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('komikita-user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Jika ada user tersimpan, set isLoggedIn jadi true
    return !!localStorage.getItem('komikita-user');
  });


  // 3. --- BARU --- 'useEffect' untuk MENYIMPAN perubahan ke localStorage
  // 'useEffect' ini akan otomatis berjalan setiap kali state 'user' berubah.
  useEffect(() => {
    if (user) {
      // Jika user login, simpan datanya
      localStorage.setItem('komikita-user', JSON.stringify(user));
    } else {
      // Jika user logout (null), hapus datanya
      localStorage.removeItem('komikita-user');
    }
  }, [user]); // Dependency array: [user] berarti "jalankan jika 'user' berubah"


  // --- FUNGSI LOGIN ---
  // (Sekarang lebih simpel, tidak perlu urus localStorage di sini)
  const login = (username) => {
    const userData = {
      username: username,
      bookmarks: [], // Selalu mulai dengan bookmark kosong saat daftar
    };
    setUser(userData);
    setIsLoggedIn(true);
    // 'useEffect' di atas akan otomatis menyimpan 'userData' ini
  };

  // --- FUNGSI LOGOUT ---
  // (Juga lebih simpel)
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    // 'useEffect' di atas akan otomatis menghapus data dari localStorage
  };

  
  // --- FUNGSI BOOKMARK (TIDAK BERUBAH) ---
  // 'useEffect' juga otomatis menangani ini.
  // Saat bookmark ditambah/dihapus, 'user' state berubah,
  // lalu 'useEffect' akan menyimpan 'user' baru itu ke localStorage.
  
  const addBookmark = (comicId) => {
    if (!isLoggedIn) return;
    setUser((currentUser) => ({
      ...currentUser,
      bookmarks: [...currentUser.bookmarks, comicId],
    }));
  };

  const removeBookmark = (comicId) => {
    if (!isLoggedIn) return;
    setUser((currentUser) => ({
      ...currentUser,
      bookmarks: currentUser.bookmarks.filter((id) => id !== comicId),
    }));
  };

  const isBookmarked = (comicId) => {
    if (!isLoggedIn || !user) return false;
    return user.bookmarks.includes(comicId);
  };


  // Data yang kita bagikan (TIDAK BERUBAH)
  const value = {
    isLoggedIn,
    user,
    login,
    logout,
    addBookmark,
    removeBookmark,
    isBookmarked,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Hook untuk memakai data (TIDAK BERUBAH)
export function useAuth() {
  return useContext(AuthContext);
}