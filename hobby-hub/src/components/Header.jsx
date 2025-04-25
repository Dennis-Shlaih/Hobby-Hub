import React from 'react';
import { Link } from 'react-router-dom';

function Header({ searchQuery, setSearchQuery }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1>FitHub</h1>
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="text" 
            placeholder="Search posts..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/create">Create Post</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
