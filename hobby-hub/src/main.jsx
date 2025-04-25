import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Layout from './routes/layout';
import CreatePostPage from './routes/CreatePostPage';
import PostPage from './routes/PostPage';
import EditPostPage from './routes/EditPostPage';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="create" element={<CreatePostPage />} />
          <Route path="post/:id" element={<PostPage />} />
          <Route path="edit/:id" element={<EditPostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
