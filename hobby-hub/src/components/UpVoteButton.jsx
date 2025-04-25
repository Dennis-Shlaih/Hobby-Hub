import React, { useState } from 'react';
import { supabase } from '../client.js';

function UpvoteButton({ postId, upvotes }) {
  const [votes, setVotes] = useState(upvotes);

  const handleUpvote = async () => {
    const { data, error } = await supabase
      .from('posts')
      .update({ upvotes: votes + 1 })
      .eq('id', postId);

    if (!error) setVotes(votes + 1);
  };

  return <button className="upvote-button" onClick={handleUpvote}>Upvote {votes}</button>;
}

export default UpvoteButton;
