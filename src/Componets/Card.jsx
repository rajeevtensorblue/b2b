import React from 'react';

const Card = ({ text }) => {
  return (
    <div style={{
      flex: 1,
      margin: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      borderRadius: '10px',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height:'300px', // Adjust based on content
    }}>
      <p>{text}</p>
    </div>
  );
};

export default Card;
