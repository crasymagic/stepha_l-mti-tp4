import React from 'react';

const Info = ({ lives, score }) => (
  <div
    style={{
      position: 'fixed',
      padding: '10px 20px',
      top: '10px',
      right: '10px',
      backgroundColor: 'white',
      borderRadius: '10px',
      textAlign: 'right',
      zIndex: 10000
    }}
  >
    <div>{lives} <span role="img" aria-label="heart">❤️</span></div>
    <div>{score} <span role="img" aria-label="score">🥇</span></div>
  </div>
);

export default Info;
