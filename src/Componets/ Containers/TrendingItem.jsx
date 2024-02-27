import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import baseUrl from '../../baseUrl';

const TrendingItem = ({ title, description, readTime }) => {
  return (
    <div style={{
      borderBottom: '1px solid #ffffff26', // light border for separator
      paddingBottom: '1rem',
      marginBottom: '1rem',
    }}>
      <h2 style={{ color: 'white', fontSize: '1.2rem' }}>{title}</h2>
      <p style={{ color: 'white', fontSize: '0.9rem' }}>{description}</p>
      <p style={{ color: 'white', fontSize: '0.8rem' }}>{readTime}</p>
    </div>
  );
};




// Styled components
const TrendingCard = styled.div`
  border: 1px solid white;
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h2`
  font-size: 1.5em;
  border-bottom: 1px solid grey;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const TrendingListItem = styled.p`
  font-size: 1em;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const TrendingList = styled.div`
  font-size: 0.9em;
`;

// React component
const Trending = () => {
  // Dummy data
  const trends = [
    'Tech Innovations Transforming 2024',
    'Top 10 Global Travel Destinations',
    'Eco-Friendly Living Tips & Tricks',
    'Breakthroughs in Renewable Energy',
    'Best Practices for Remote Work',
    'Health and Wellness Trends',
    
    // Add more items if needed
  ];
  

  return (
    <TrendingCard>
      <Title>Trending</Title>
      <TrendingList>
        {trends.map((item, index) => (
          <TrendingListItem key={index}>{item}</TrendingListItem>
        ))}
      </TrendingList>
    </TrendingCard>
  );
};



const TrendingSidebar = () => {

  const [trendingItems, setTrendingItems] = useState([]);

  useEffect(() => {
    // Define the fetchData function
    const fetchData = async () => {
      try {
        // Make the HTTP request
        const response = await fetch(`${baseUrl}/api/trending`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Parse the JSON response
        const data = await response.json();
        // Set the data to state
        setTrendingItems(data);
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // The empty array as the second argument will ensure this effect runs once on mount

  console.log('trendingItems',trendingItems);
  // Sample data
  const trendingData = [
    {
      title: "Exploring the Wonders of the Natural World",
      description: "Join us on a journey through some of the planet's most breathtaking landscapes"
    },
    {
      title: "The Future of Renewable Energy: Innovations That Could Change the World",
      description: "As the global community seeks sustainable solutions to combat climate change, advancements in renewable energy technology offer hope.",
      readTime: "7 mins read"
    },
  ];
  

  return (
    <div>
      <Trending />
    <div style={{
      color: '#FFFFFF', // white text
      width: '300px', // fixed width for the sidebar
      padding: '1rem',
      boxSizing: 'border-box',
      height: '100vh', // full height
      overflowY: 'auto' // in case of scrolling
    }}>
      {trendingData.map((item, index) => (
        <TrendingItem 
          key={index}
          title={item.title}
          description={item.description}
          readTime={item.readTime}
        />
      ))}
    </div>
    </div>
  );
};

export default TrendingSidebar;