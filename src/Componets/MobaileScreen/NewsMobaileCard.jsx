import React, { useState, useEffect } from 'react';
import "../../css/MobaileScreenCard.css"; // Ensure this CSS file exists and styles your cards appropriately
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../baseUrl';
const Card = ({id, imageSrc, title, content, time,onClick }) => {
  return (
    <div className="card" onClick={() => onClick(id)}>
      <img src={imageSrc} alt="Card" className="card-image" />
      <div className="card-content">
        <h1 className="card-title">{title}</h1>
        <p className="card-text">{content}</p>
        <div className="card-footer">
          <span className="time">{time}</span>
        </div>
      </div>
    </div>
  );
};

const NewsMobileCard = () => {
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'category1', 'category2', etc.
  const filters = ['Trending', 'Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'];
 

  
  const filteredNews = news.filter(item => {
    switch (filter) {
      case 'Trending':
        return true;
      case 'Topic 1':
        return item.time === 'Topic 1'; // Assuming 'Just now' is a distinct value
      case 'Topic 2':
      case 'Topic 3':
      case 'Topic 4':
        return item.time === filter; // This assumes the item's time property matches the filter exactly
      default:
        return true;
    }
  });


  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${baseUrl}/content`, {
          method: "GET",
          headers: {
            "Cache-Control": "no-cache",
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      }
    };

    fetchNews();
  }, []);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div>
      <div className="filter-buttons" style={{display:'flex',justifyContent:'center'}}>
        {filters.map((f) => (
          <button
            key={f}
            style={{
              backgroundColor: filter === f ? 'green' : 'transparent', // Change button color if active
              color: filter === f ? 'black' : 'white', // Text color
              border: '1px solid white',
              padding: '6px 10px',
              margin: '0 4px',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop:'10px',
              fontWeight:'600'
            }}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="card-container">
        {filteredNews.map((item, index) => (
          <Card
            key={index}
            imageSrc={item.images?.[0]?.image_url || 'https://via.placeholder.com/150'}
            title={item.title}
            content={item.paragraphs?.[0]?.paragraph_text || 'No content available.'}
            time={item.time || 'No time available'} // Display the item's time
            onClick={() => handleClick(item.id)} // Assuming each item has a unique 'id' for navigation
          />
        ))}
      </div>
    </div>
  );
}

export default NewsMobileCard;
