// src/components/SearchBar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchBar({ searchTerm, onSearchChange, placeholder }) {
  return (
    <div className="search-bar input-group my-4">
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
