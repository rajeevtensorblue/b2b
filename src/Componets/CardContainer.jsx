import React from 'react';

const ArticleCard = () => {
  return (
    <div style={{
      backgroundColor: 'transparent', // Dark background
      color: '#FFFFFF', // White text
      padding: '20px', // Padding around the content
      marginBottom: '20px', // Margin at the bottom for separation
    }}>
      <h1 style={{
        fontSize: '24px', 
        fontWeight: 'bold', 
        marginBottom: '10px', 
      }}>
      advancements in renewable energy technology offer.
      </h1>
      <p style={{
        fontSize: '16px', // Standard font size for the content
        lineHeight: '1.5', // Line height for better readability
        marginBottom: '10px', // Margin below the paragraph
      }}>
       As the global community seeks sustainable solutions to combat climate change, advancements in renewable energy technology offer hope.
      </p>
      <p style={{
        fontSize: '14px', // Smaller font size for the metadata
        fontStyle: 'italic', // Italic font style for the metadata
      }}>
        2 mins read
      </p>
    </div>
  );
};


const CardContainer = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      width: '100%',
      margin: '0 auto',
      boxSizing: 'border-box',
      marginLeft:'10px'
    }}>
      {/* First inner div with less width */}
      <div style={{
        width: '35%', // Smaller width
        height:'300px',
        backgroundColor: '#1b2333', // Just for visualization
        borderRadius:'10px',
      }}>
       <ArticleCard />
      </div>
      
      {/* Second inner div with more width */}
      <div style={{
        width: '63%', // Larger width
        backgroundColor: '#1b2333', // Just for visualization
        borderRadius:'10px'
      }}>
        <img src='https://picsum.photos/200' width={600} height={300}/>
      </div>
    </div>
  );
};

export default CardContainer;
