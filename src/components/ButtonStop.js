import React from 'react';

const ButtonStop = ({ onClick = () => {} }) => (
  <div
    style={{
      position: 'fixed',
      right: '96px',
      width: '100px',
      height: '64px',
      marginTop: '10px',
      fontSize: '18px',
      fontStyle: 'italic',
      fontWeight: 'bold',
      textAlign: 'center',
      lineHeight: '62px',
      cursor: 'pointer',
      backgroundColor: '#FF6F59',
      color: '#21222C',
      borderRadius: '8px'
    }}
    onClick={onClick}
  >
    <span>Restart</span>
  </div>
);

export default ButtonStop;