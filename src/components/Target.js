import React from 'react';

const Target = ({ x = 0, y = 0, timeout = 0, onClick = () => {} }) => (
  <div
    style={{
      position: 'absolute',
      top: `${y}px`,
      left: `${x}px`,
      width: '25px',
      height: '25px',
      textAlign: 'center',
      lineHeight: '25px',
      cursor: 'pointer',
      backgroundColor: '#FFD065',
      borderRadius: '8rem'
    }}
    onClick={onClick}
  >
    {timeout}
  </div>
);

export default Target;
