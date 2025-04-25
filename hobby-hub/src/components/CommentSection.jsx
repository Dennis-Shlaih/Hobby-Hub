import React, { useEffect, useState } from 'react';
import { supabase } from '../client';

function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      const { data } = await supabase
        .from('comments')
        .select('*')
        .eq('post_id', postId)
        .order('created_at', { ascending: true });

      setComments(data || []);
    };

    fetchComments();
  }, [postId]);

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const { data } = await supabase
      .from('comments')
      .insert([{ post_id: postId, content: newComment }])
      .select()
      .single();

    if (data) {
      setComments((prev) => [...prev, data]);
      setNewComment('');
    }
  };

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      <div className="comment-list">
        {comments.map((comment) => (
          <div className="comment" key={comment.id}>
            {comment.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleAddComment} className="comment-form">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          rows={3}
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}

export default CommentSection;
