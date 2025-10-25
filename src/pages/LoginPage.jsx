// src/pages/LoginPage.jsx

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  // State untuk toggle antara login (true) dan signup (false)
  const [isLoginView, setIsLoginView] = useState(true); 
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Username dan Password tidak boleh kosong.");
      return;
    }

    // Karena sistem kita "bohongan", login dan signup
    // sama-sama memanggil fungsi 'login()'
    // Di aplikasi nyata, signup akan membuat user baru.
    console.log(
      isLoginView ? 'Mencoba login...' : 'Mencoba mendaftar...'
    );
    login(username); // Langsung set user
    
    // Arahkan ke halaman Akun setelah berhasil
    navigate('/akun'); 
  };

  // Kumpulan style untuk halaman ini
  const styles = {
    container: { maxWidth: '400px', margin: '50px auto', padding: '24px', border: '1px solid var(--border-color)', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', backgroundColor: 'var(--surface-color)' },
    form: { display: 'flex', flexDirection: 'column' },
    label: { marginBottom: '5px', fontWeight: '600', color: 'var(--text-primary)' },
    input: { width: '95%', padding: '10px', marginBottom: '15px', fontSize: '1rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-color)' },
    button: { padding: '10px 20px', fontSize: '1rem', backgroundColor: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.2s ease' },
    toggleLink: { color: 'var(--primary-color)', cursor: 'pointer', textDecoration: 'underline', marginTop: '15px', textAlign: 'center' }
  };

  return (
    <div style={styles.container}>
      {/* Judul berubah sesuai state */}
      <h2>{isLoginView ? 'Login' : 'Sign Up'}</h2>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        
        <label style={styles.label}>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        
        {/* Tampilkan field "Confirm Password" jika sedang Signup */}
        {!isLoginView && (
          <>
            <label style={styles.label}>Confirm Password:</label>
            <input
              type="password"
              placeholder="(tidak akan dicek di sistem bohongan ini)"
              style={styles.input}
            />
          </>
        )}
        
        <button type="submit" style={styles.button}>
          {isLoginView ? 'Login' : 'Sign Up'}
        </button>
      </form>
      
      {/* Tombol untuk ganti mode */}
      <div 
        onClick={() => setIsLoginView(!isLoginView)} 
        style={styles.toggleLink}
      >
        {isLoginView 
          ? 'Belum punya akun? Daftar di sini' 
          : 'Sudah punya akun? Login di sini'}
      </div>
    </div>
  );
}

export default LoginPage;