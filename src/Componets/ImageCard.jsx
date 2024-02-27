import React from 'react';


const Card = ({ imageUrl, text, timestamp }) => {
  return (
    <div style={{
      flex: 1,
      margin: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      borderRadius: '10px',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'hidden',
      height:'350px'
    }}>
      <div style={{ width: '100%', height: '60%' }}>
        <img src={imageUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ padding: '20px', textAlign: 'center', width: '100%' }}>
        <p>{text}</p>
        <small>{timestamp}</small>
      </div>
    </div>
  );
};

export default Card;
