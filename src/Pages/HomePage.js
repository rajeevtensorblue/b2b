import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/homePage.css";
import baseUrl from "../baseUrl";
import LeftPanel from "../Componets/SideBar";
import CardContainer from "../Componets/CardContainer";
import ImageCardContainer from "../Componets/ImageCardContainer";
import TrendingSidebar from "../Componets/ Containers/TrendingItem";
import NewsMobileCard from "../Componets/MobaileScreen/NewsMobaileCard";

function App() {
  const [news, setNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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

  useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);
  console.log("this is news", news);

  function handleNext() {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, news.length - 1));
  }

  function handlePrevious() {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }

  function renderArticles() {
    const startIndex = currentIndex;
    const endIndex = Math.min(currentIndex + 3, news.length);
    const articlesToShow = news.slice(startIndex, endIndex);
    return articlesToShow.map((article, index) => (
      <a
        key={index}
        href={`/ArticlePage/${startIndex + index}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Article
          key={index}
          title={article.title}
          paragraph_text={article.paragraphs[0].paragraph_text}
          time={article.time}
          src={article.images[0].image_url}
        />
      </a>
    ));
  }

  function Article({ title, paragraph_text, time, src }) {
    console.log("newdata", news);
    return (
      <div className="article-card">
        <img src={src} alt="Article Thumbnail" className="article-image" />
        <div className="article-content">
          <h3>{title}</h3>
          <p>{paragraph_text}</p>
          <div className="read-time">{time} mins read</div>
        </div>
      </div>
    );
  }
  const buttonStyle = {
    backgroundColor: '#4CAF50', // Green
    color: 'white',
    padding: '10px 22px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    border: 'none',
    borderRadius:'5px'
  };

  return (
    <div>
    {isMobile ? (
       <NewsMobileCard />
    ) : (

    <div className="layout-container">
      <aside className="left-panel">
        <LeftPanel />
      </aside>
      <main className="main-content">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              minWidth: "300px",
              background: "transparent",
              height: "680px",
            }}
          >
            <TrendingSidebar />
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "stretch",
                width: "100%",
                margin: "0 auto",
                boxSizing: "border-box",
              }}
            >
              <CardContainer />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "stretch",
                width: "100%",
                margin: "0 auto",
                boxSizing: "border-box",
              }}
            >
              <ImageCardContainer />
            </div>
          </div>
        </div>
        <div className="section-container">
          <h2 className="section-header">Articles</h2>
          <div className="articles-container">{renderArticles()}</div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px' }}>
      <button onClick={handlePrevious} style={buttonStyle}>Previous</button>
      <button onClick={handleNext} style={buttonStyle}>Next</button>
    </div>
          <div className="articles-container">{renderArticles()}</div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'zpx' }}>
      <button onClick={handlePrevious} style={buttonStyle}>Previous</button>
      <button onClick={handleNext} style={buttonStyle}>Next</button>
    </div>
        </div>
      </main>
    </div>
     )}
     </div>
  );
}

export default App;
