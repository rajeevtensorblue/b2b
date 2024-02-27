import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'; // This is the theme that resembles VS Code
// Import the languages you need to highlight
import 'prismjs/components/prism-javascript';

const ArticlePage = ({ title, content, codeSnippet }) => {
    useEffect(() => {
        Prism.highlightAll();
      }, []);
  return (
    <article style={styles.articleContainer}>
      {title && <h1 style={styles.heading}>{title}</h1>}

      {content.map((item, index) => {
        switch (item.type) {
          case 'paragraph':
            return <p key={index} style={styles.paragraph}>{item.text}</p>;
          case 'image':
            return <img key={index} style={styles.image} src={item.src} alt={item.alt} />;
          default:
            return null;
        }
      })}

{codeSnippet && (
        <pre style={styles.codeBlock}>
          <code className="language-js">
            {codeSnippet}
          </code>
        </pre>
      )}
    </article>
  );
};

const styles = {
  articleContainer: {
    margin: '0 auto',
    padding: '20px',
    color: '#ffffff',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  heading: {
    fontSize: '2em',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1em',
    lineHeight: '1.6',
    textAlign: 'justify',
    marginBottom: '20px',
  },
  image: {
    height:'400px',
    width:'100%',
    marginBottom: '20px',
  },
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
};

ArticlePage.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['paragraph', 'image']).isRequired,
      text: PropTypes.string,
      src: PropTypes.string,
      alt: PropTypes.string
    })
  ).isRequired,
  codeSnippet: PropTypes.string 
};

export default ArticlePage;











