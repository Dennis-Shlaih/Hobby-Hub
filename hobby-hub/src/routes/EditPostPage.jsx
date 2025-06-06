import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../client';

function EditPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: '',
    content: '',
    image_url: '',
    category: ''
  });

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await supabase.from('posts').select('*').eq('id', id).single();
      setPost(data);
    };
    fetchPost();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await supabase.from('posts').update(post).eq('id', id);
    navigate('/');
  };

  const handleDelete = async () => {
    await supabase.from('posts').delete().eq('id', id);
    navigate('/');
  };

  return (
    <div className="edit-post-container">
      <h2>Edit Post</h2>
      <form onSubmit={handleUpdate} className="edit-post-form">
        <div>
          <label>Title</label>
          <input
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={post.content}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
            rows={5}
            required
          />
        </div>
        <div>
          <label>Category</label>
          <input
            value={post.category}
            onChange={(e) => setPost({ ...post, category: e.target.value })}
          />
        </div>
        <div>
          <label>Image URL</label>
          <input
            value={post.image_url}
            onChange={(e) => setPost({ ...post, image_url: e.target.value })}
          />
        </div>
        <div className="edit-post-buttons">
          <button type="submit" className="update-button">Update Post</button>
          <button type="button" onClick={handleDelete} className="delete-button">Delete Post</button>
        </div>
      </form>
    </div>
  );
}

export default EditPostPage;
