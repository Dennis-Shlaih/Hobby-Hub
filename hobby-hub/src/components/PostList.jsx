import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';

function formatTime(timestamp) {
  const now = new Date();
  const posted = new Date(timestamp);
  const diff = now - posted;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) return 'Posted just now';
  if (minutes < 60) return `Posted ${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  if (hours < 24) return `Posted ${hours} hour${hours !== 1 ? 's' : ''} ago`;
  if (days < 7) return `Posted ${days} day${days !== 1 ? 's' : ''} ago`;
  if (weeks < 5) return `Posted ${weeks} week${weeks !== 1 ? 's' : ''} ago`;
  if (months < 12) return `Posted ${months} month${months !== 1 ? 's' : ''} ago`;
  return `Posted ${years} year${years !== 1 ? 's' : ''} ago`;
}

function PostList({ sortBy, searchQuery }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase
        .from('posts')
        .select('*')
        .order(sortBy, { ascending: false });

      setPosts(data || []);
    };

    fetchPosts();
  }, [sortBy]);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="post-list">
      {filteredPosts.map((post) => (
        <Link to={`/post/${post.id}`} key={post.id} className="post-card">
          <p className="post-time">{formatTime(post.created_at)}</p>
          <h3 className="post-title">{post.title}</h3>
          <p className="post-upvotes">{post.upvotes} upvotes</p>
        </Link>
      ))}
    </div>
  );
}

export default PostList;
