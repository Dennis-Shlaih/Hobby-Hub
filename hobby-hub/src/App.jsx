import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import PostList from './components/PostList'; 

function App() {
  const { searchQuery, setSearchQuery } = useOutletContext();
  const [sortBy, setSortBy] = useState('created_at');

  return (
    <div className="home-container">
      <h1>Welcome to FitHub</h1>
      <div className="sort-buttons">
        <button onClick={() => setSortBy('created_at')}>Sort by New</button>
        <button onClick={() => setSortBy('upvotes')}>Sort by Top</button>
      </div>
      <PostList sortBy={sortBy} searchQuery={searchQuery} />
    </div>
  );
}
export default App;
