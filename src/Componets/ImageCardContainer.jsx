import React from 'react';
import Card from './ImageCard'; // Make sure this path is correct
import image from '../assets/Images/FeaturedModels/block.png';
import image2 from '../assets/Images/card/imagetotext.jpg'
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
    }}>
       
      <Card 
        imageUrl={image} 
        text="As the global community seeks sustainable solutions to combat climate change, advancements in renewable energy technology offer hope." 
        timestamp="Feb 16, 2024"
      />
      <Card 
        imageUrl={image2} 
        text="As the global community seeks sustainable solutions to combat climate change, advancements in renewable energy technology offer hope." 
        timestamp="Feb 18, 2024"
      />
    </div>
  );
};


export default CardContainer;
