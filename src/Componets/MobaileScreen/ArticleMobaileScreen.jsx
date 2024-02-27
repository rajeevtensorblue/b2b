import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Prism from 'prismjs';
import baseUrl from '../../baseUrl';
import 'prismjs/themes/prism-okaidia.css'; // This is the theme that resembles VS Code
// Import the languages you need to highlight
import 'prismjs/components/prism-javascript';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  color: white;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  width: 330px;
`;

const Tab = styled.div`
  display: inline-block;
  background-color: ${props => props.active ? 'green' : 'transparent'};
  padding: 10px;
  border-radius: 10px 10px 0 0;
  margin-right: 5px;
  cursor: pointer;
  margin-top: 15px;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 14px;
`;

const Card = ({ title, content, onClick,time,img}) => {
  const [activeTab, setActiveTab] = React.useState('topic1');

  return (
    <CardContainer onClick={onClick} style={{borderBottom:'1px solid white'}}>
      <div style={{height:'200px',backgroundColor:'whitesmoke',borderRadius:'5px'}}>
        <img src='https://picsum.photos/seed/picsum/330/200'/>
      </div>
      <div>
        <Tab active={activeTab === 'topic1'} onClick={() => setActiveTab('topic1')}>Topic 1</Tab>
        <Tab active={activeTab === 'topic2'} onClick={() => setActiveTab('topic2')}>Topic 2</Tab>
      </div>
      <Title>{title}</Title>
      <Text>{content}</Text>
      <Text>{time} min</Text>
    </CardContainer>
  );
};

const ArticleMobaileScreen = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [articles, setArticles] = useState([]);
  const styles = {
    codeBlock: {
      background: 'black', // light gray background for code block
      border: '1px solid #ccc', // light gray border
      borderRadius: '4px', // rounded corners
      padding: '10px', // some padding
      overflowX: 'auto', // handle long lines of code
      fontFamily: '"Courier New", Courier, monospace', // font for code
      fontSize: '0.9em', // slightly smaller font size for code
      lineHeight: '1.4', // line height for code
      margin: '20px 0', // margin top and bottom
    }
  }
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`${baseUrl}/articles`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  function downloadPDF() {
    const link = document.createElement('a');
    link.href = '/path/to/your/file.pdf'; // Set the path to your PDF file
    link.download = 'filename.pdf'; // Set the default filename for the download
    document.body.appendChild(link); // Append to body
    link.click(); // Simulate click
    document.body.removeChild(link); // Clean up
  }
  
  const renderActiveCard = () => (
    <div style={{ padding: '20px', color: 'white' }}>
        <div style={{display:'flex', justifyContent:'flex-end'}}>
    <button 
      onClick={downloadPDF}
      style={{border:'1px solid green', padding:'6px 10px', backgroundColor:'transparent', color:'green', borderRadius:'10px', fontWeight:'600'}}
    >
      View Paper
    </button>
  </div>
      <h1>{activeCard.title}</h1>
      <p>{activeCard.p1}</p>
      <img src="https://picsum.photos/seed/picsum/350/300" width={350} height={300}/>
      <p>{activeCard.p2}</p>
      <p>{activeCard.p3}</p>
      <img src="https://picsum.photos/seed/picsum/350/300" width={350} height={300}/>
      <p>{activeCard.p4}</p>
      <p>{activeCard.p5}</p>
      <img src="https://picsum.photos/seed/picsum/350/300" width={350} height={300}/>
      <p>{activeCard.p6}</p>
      <p>{activeCard.p7}</p>
      <img src="https://picsum.photos/seed/picsum/350/300" width={350} height={300}/>
      <p>{activeCard.p8}</p>
      <p>{activeCard.p9}</p>
      <p>{activeCard.p10}</p>
      {/* Here, you can add more details or actions related to the active card */}
      <pre style={styles.codeBlock}>
          <code className="language-js">
            {activeCard.code_snippet}
          </code>
        </pre>
 
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', overflowX: 'scroll' }}>
      {activeCard == null ? (
        articles.map((article, index) => (
          <Card
            key={index}
            title={article.title}
            content={article.p1} // Assuming 'p1' is a property of your article objects
            time={article.time}
            onClick={() => setActiveCard(article)}
          />
        ))
      ) : renderActiveCard()}
    </div>
  );
};

export default ArticleMobaileScreen;
