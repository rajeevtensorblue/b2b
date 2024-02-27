import React, { useState,useEffect } from 'react';
import baseUrl from '../../baseUrl';

const TrendingSection = () => {
  // Dummy data for topics
  const [data, setData] = useState('');
  const topics = [
    {
      title: 'Lorem ipsum dolor sit amet.',
      content: 'Lorem ipsum dolor sit amet consectetur. Nam magna habitant sed odio id. Nisl a eu vitae amet amet. Aliquam tellus id et at mauris eget eget. Nisl congue praesent',
      tags: ['Topic 1', 'Topic 2'],
      readTime: '2 mins read',
    },
    {
        title: 'Lorem ipsum dolor sit amet.',
        content: 'Lorem ipsum dolor sit amet consectetur. Nam magna habitant sed odio id. Nisl a eu vitae amet amet. Aliquam tellus id et at mauris eget eget. Nisl congue praesent',
        tags: ['Topic 1', 'Topic 2'],
        readTime: '2 mins read',
      },
      {
        title: 'Lorem ipsum dolor sit amet.',
        content: 'Lorem ipsum dolor sit amet consectetur. Nam magna habitant sed odio id. Nisl a eu vitae amet amet. Aliquam tellus id et at mauris eget eget. Nisl congue praesent',
        tags: ['Topic 1', 'Topic 2'],
        readTime: '2 mins read',
      },
      {
        title: 'Lorem ipsum dolor sit amet.',
        content: 'Lorem ipsum dolor sit amet consectetur. Nam magna habitant sed odio id. Nisl a eu vitae amet amet. Aliquam tellus id et at mauris eget eget. Nisl congue praesent',
        tags: ['Topic 1', 'Topic 2'],
        readTime: '2 mins read',
      },
      {
        title: 'Lorem ipsum dolor sit amet.',
        content: 'Lorem ipsum dolor sit amet consectetur. Nam magna habitant sed odio id. Nisl a eu vitae amet amet. Aliquam tellus id et at mauris eget eget. Nisl congue praesent',
        tags: ['Topic 1', 'Topic 2'],
        readTime: '2 mins read',
      },
      {
        title: 'Lorem ipsum dolor sit amet.',
        content: 'Lorem ipsum dolor sit amet consectetur. Nam magna habitant sed odio id. Nisl a eu vitae amet amet. Aliquam tellus id et at mauris eget eget. Nisl congue praesent',
        tags: ['Topic 1', 'Topic 2'],
        readTime: '2 mins read',
      },
    // Add more topics here as needed
  ];


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
        setData(data);
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      }
    };

    fetchNews();
  }, []);

console.log('dada',data)

  const sectionStyle = {
    backgroundColor: 'transparent',
    color: 'white',
    padding: '16px',
    borderRadius: '8px',
    margin: '0 auto',
    maxWidth: '360px', // typical width of a mobile screen
    border:'1px solid white'

  };

  const sectionTitleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '16px',
    textAlign: 'left',
    borderBottom:'1px solid white'
  };

  const trendingTopicStyle = {
    marginBottom: '24px',
  };

  const tagStyle = {
    backgroundColor: '#43db4d',
    color: 'black',
    borderRadius: '15px',
    padding: '5px 15px',
    marginRight: '8px',
    marginBottom: '8px',
    display: 'inline-block',
  };

  const topicTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
  };

  const topicContentStyle = {
    fontSize: '14px',
    marginBottom: '12px',
  };

  const readTimeStyle = {
    fontSize: '12px',
    marginBottom: '12px',
  };

  const hrStyle = {
    border: '0',
    height: '1px',
    backgroundColor: '#333',
    marginBottom: '24px',
  };

  return (
    <div style={sectionStyle}>
      <h1 style={sectionTitleStyle}>Trending</h1>
      {topics.map((topic, index) => (
        <div key={index} style={trendingTopicStyle}>
          <div>
            {topic.tags.map((tag, tagIndex) => (
              <span key={tagIndex} style={tagStyle}>{tag}</span>
            ))}
          </div>
          <h2 style={topicTitleStyle}>{topic.title}</h2>
          <p style={topicContentStyle}>{topic.content}</p>
          <div style={readTimeStyle}>{topic.readTime}</div>
          {index < topics.length - 1 && <hr style={hrStyle} />} {/* Don't render <hr> after the last topic */}
        </div>
      ))}
    </div>
  );
};

export default TrendingSection;
