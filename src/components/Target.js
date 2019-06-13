import React from 'react';

const Target = ({ location = { x: 0, y: 0 }, timeout = 0, onDeleteTarget = () => {} }) => (
  <div
    style={{
      position: 'absolute',
      top: `${location.y}px`,
      left: `${location.x}px`,
      width: '25px',
      height: '25px',
      textAlign: 'center',
      lineHeight: '25px',
      cursor: 'pointer',
      backgroundColor: '#FFD065',
      borderRadius: '8rem'
    }}
    onClick={() => onDeleteTarget()}
  >
    {timeout}
  </div>
);

export default Target;
