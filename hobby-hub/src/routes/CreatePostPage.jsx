import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';

function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleCreatePost = async (e) => {
    e.preventDefault();
    await supabase
      .from('posts')
      .insert([{ title, content, image_url: imageUrl, category }]);
    navigate('/');
  };

  return (
    <div className="create-post-container">
      <h2>Create New Post</h2>
      <form onSubmit={handleCreatePost} className="create-post-form">
        <div>
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Post Title"
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
            required
            placeholder="Post Content"
          />
        </div>
        <div>
          <label>Category</label>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
          />
        </div>
        <div>
          <label>Image URL</label>
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image URL"
          />
        </div>
        <div className="create-post-buttons">
          <button type="submit" className="create-button">Create Post</button>
        </div>
      </form>
    </div>
  );
}

export default CreatePostPage;
