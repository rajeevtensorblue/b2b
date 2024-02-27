import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import baseUrl from '../../baseUrl';
// Define your styles as objects
const styles = {
  container: {
    color: 'whitesmoke',
    padding: '20px',
  },
  image: {
    display: 'block',
    margin: 'auto',
  }
};

const DetailPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(`${baseUrl}/content`);
      const data = await response.json();
      setDetails(data);
    };

    fetchDetails();
  }, [id]);

  if (!details || !details[id]) {
    return <div style={styles.container}>Loading...</div>;
  }

  const { title, paragraphs } = details[id];

  return (
    <div style={styles.container}>
      <h3>{title}</h3>
      {paragraphs.map((paragraph, index) => (
        <React.Fragment key={index}>
          <p>{paragraph.paragraph_text}</p>
          {index % 2 === 0 && <img src={`https://picsum.photos/seed/picsum/330/200`} alt="Placeholder" style={styles.image} />}
        </React.Fragment>
      ))}
    </div>
  );
}

export default DetailPage;
