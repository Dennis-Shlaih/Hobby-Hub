import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CommentSection from '../components/CommentSection';
import UpvoteButton from '../components/UpVoteButton';
import { supabase } from '../client.js';

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await supabase.from('posts').select('*').eq('id', id).single();
      setPost(data);
    };
    fetchPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="post-detail-container">
      <div className="post-box">
        <h1 className="post-detail-title">{post.title}</h1>
        <p className="post-detail-content">{post.content}</p>
        {post.image_url && (
          <img src={post.image_url} alt={post.title} className="post-detail-image" />
        )}
        <p className="post-detail-category">Category: {post.category}</p>
        <div className="post-actions">
          <UpvoteButton postId={post.id} upvotes={post.upvotes} />
          <Link to={`/edit/${post.id}`} className="edit-button">Edit Post</Link>
        </div>
      </div>
      <CommentSection postId={post.id} />
    </div>
  );
}

export default PostPage;
