import React from 'react';
import Paper from '@mui/material/Paper';
import CommentCard from './cards/commentpopupcard'

const CommentPopup = () => {
  // Sample comments data
  const comments = [
    { id: 1, avatarSrc: '/avatar1.jpg', name: 'John Doe', comment: 'Great post!' },
    { id: 2, avatarSrc: '/avatar2.jpg', name: 'Jane Smith', comment: 'Nice article!' },
    // Add more comments as needed
  ];

  return (
    <Paper sx={{ borderRadius: '16px', padding: '20px', marginBottom: '20px' }}>
      {comments.map(comment => (
        <CommentCard
          key={comment.id}
          avatarSrc={comment.avatarSrc}
          name={comment.name}
          comment={comment.comment}
        />
      ))}
    </Paper>
  );
};

export default CommentPopup;