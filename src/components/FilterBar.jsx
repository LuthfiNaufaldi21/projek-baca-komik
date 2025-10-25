// src/components/FilterBar.jsx

import React from 'react';
import './FilterBar.css';

function FilterBar() {
  return (
    <div className="filter-bar">
      <div className="filter-options">
        <button className="filter-btn">Genre <span>All</span></button>
        <button className="filter-btn">Demografis <span>All</span></button>
        <button className="filter-btn">Konten <span>All</span></button>
        <button className="filter-btn">Tema <span>All</span></button>
        <button className="filter-btn">Status <span>All</span></button>
        <button className="filter-btn">Jenis Komik <span>All</span></button>
        <button className="filter-btn">Format <span>All</span></button>
        <button className="filter-btn">Order by <span>All</span></button>
      </div>
      <div className="search-section">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-btn">Search</button>
      </div>
    </div>
  );
}

export default FilterBar;