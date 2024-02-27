
import React, {useState,useEffect}from 'react';
import Card from '../Componets/NextPage/NewsCard';
// import TrendingSidebar from '../Componets/ Containers/TrendingItem';
import ArticlePage from '../Componets/Other/Articale';
import ArticlePageMobaileView from "../Componets/MobaileScreen/ArticleMobaileScreen";
import TrendingSidebar from "../Componets/NextPage/ TrendingTopic"
import baseUrl from '../baseUrl';
const SecondPage = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
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
    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);
  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };
console.log(articles)
  // Dynamically create articleData based on selectedArticle
  const articleData = selectedArticle ? {
    title: selectedArticle.title,
    content: [
      { type: 'paragraph', text: selectedArticle.p1 },
      { type: 'paragraph', text: selectedArticle.p2 },
      { type: 'paragraph', text: selectedArticle.p3 },
      { type: 'image', src: 'https://picsum.photos/200/300', alt: 'Image description' },
      { type: 'paragraph', text: selectedArticle.p4 },
      { type: 'paragraph', text: selectedArticle.p5 },
      { type: 'paragraph', text: selectedArticle.p6 },
      { type: 'image', src: "https://picsum.photos/seed/picsum/200/300", alt: 'Another image description' },
      { type: 'paragraph', text: selectedArticle.p7 },
      { type: 'paragraph', text: selectedArticle.p8 },
      { type: 'paragraph', text: selectedArticle.p9 },
      { type: 'paragraph', text: selectedArticle.p10 },
      // { type: 'image', src: selectedArticle.title_image, alt: 'Another image description' },
    ],
    codeSnippet: selectedArticle.code_snippet
  } : null;

  return (
    <div>
    {isMobile ? (
        <ArticlePageMobaileView />
    ) : (
  selectedArticle ? (
    <ArticlePage
      title={articleData?.title}
      content={articleData?.content}
      codeSnippet={articleData?.codeSnippet}
    />
  ) : (
    <div className="App" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div className="cards-container" style={{ flexGrow: 1, width: '300px' }}>
        {articles.map((article, index) => (
          <div key={index} onClick={() => handleArticleClick(article)}>
            <Card
              title={article.title}
              content={article.p1}
              readTime={article.time}
              ImageSrc={'https://picsum.photos/200/300'}
            />
          </div>
        ))}
      </div>
      <div style={{ margin: '1rem', padding: '1rem', marginTop: '0px' }}>
        <TrendingSidebar />
      </div>
    </div>
  )
  )}
  </div>
  );
};

export default SecondPage;