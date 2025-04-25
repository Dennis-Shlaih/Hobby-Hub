import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function Layout() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Outlet context={{ searchQuery, setSearchQuery }} />
    </div>
  );
}

export default Layout;
