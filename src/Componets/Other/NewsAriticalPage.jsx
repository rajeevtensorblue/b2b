import React from 'react';
import "../../css/NewsArticlePage.css"


// Component for displaying each paragraph
const Paragraph = ({ text }) => {
  return <p className="paragraph">{text}</p>;
};

// Component for displaying each image
const ImageComponent = ({ src }) => {
  return (
    <div className="image-container">
      <img src={src} alt="Content" className="content-image" />
    </div>
  );
};

// Main App component
const App = () => {
  // Function to alternate between text and image
  const data = {
    "title": "Google launches Gemini 1.5 with ‘experimental’ 1M token context",
    "title_image": {
      "image_url": "https://picsum.photos/200",
      "image_type": "title_image"
    },
    "paragraphs": [
      {
        "paragraph_text": "Ryan is a senior editor at TechForge Media with over a decade of experience covering the latest technology and interviewing leading industry figures. He can often be sighted at tech conferences with a strong coffee in one hand and a laptop in the other. If it's geeky he’s probably into it. Find him on Twitter (@Gadget_Ry) or Mastodon (@gadgetry@techhub.social)",
        "order": 1
      },
      {
        "paragraph_text": "Just ahead of a potential $5 billion initial public offering (IPO) debut in March, Reddit has reportedly signed a $60 million deal with an undisclosed major AI company. This move could be seen as a last-minute effort to showcase potential revenue streams in the rapidly growing AI industry to prospective investors Although Reddit has yet to confirm the deal, the decision could have significant implications. If true, it would mean that Reddit’s vast trove of user-generated content – including posts from popular subreddits, comments from both prominent and obscure users, and discussions on a wide range of topics – could be used to train and enhance existing large language models (LLMs) or provide the foundation for the development of new generative AI systems.",
        "order": 2
      },
       {
        "paragraph_text": "Last year, when Reddit announced plans to start charging for access to its application programming interfaces (APIs), thousands of Reddit forums temporarily shut down in protest. Days later, a group of Reddit hackers threatened to release previously stolen site data unless the company reversed the API plan or paid a ransom of $4.5 million",
        "order": 3
      },
      {
        "paragraph_text": "Reddit has recently made other controversial decisions, such as removing years of private chat logs and messages from users’ accounts. The platform also implemented new automatic moderation features and removed the option for users to turn off personalised advertising, fuelling additional discontent among its users",
        "order": 4
      },
       {
        "paragraph_text": "This latest reported deal to sell Reddit’s data for AI training could generate even more backlash from users, as the debate over the ethics of using public data, art, and other human-created content to train AI systems continues to intensify across various industries and platforms",
        "order": 5
      },
      {
        "paragraph_text": "Google is initially providing developers and enterprises free access to a limited Gemini 1.5 preview with a one million token context window. A 128,000 token general release for the public will come later, along with pricing details Google is initially providing developers and enterprises free access to a limited Gemini 1.5 preview with a one million token context window. A 128,000 token general release for the public will come later, along with pricing details",
        "order": 6
      },
       {
        "paragraph_text": "Depending on the type of input given, MoE models learn to selectively activate only the most relevant expert pathways in its neural network. This specialisation massively enhances the model’s efficiency.Depending on the type of input given, MoE models learn to selectively activate only the most relevant expert pathways in its neural network. This specialisation massively enhances the model’s efficiency.",
        "order": 7
      },
      {
        "paragraph_text": "To demonstrate the power of the 1M token context window Google showed how Gemini 1.5 could ingest the entire 326,914-token Apollo 11 flight transcript and then accurately answer specific questions about it. It also summarised key details from a 684,000-token silent film when prompted. Google is initially providing developers and enterprises free access to a limited Gemini 1.5 preview with a one million token context window. A 128000 token general release for the public will come later, along with pricing details",
        "order": 8
      }
    ],
    "images": [
      {
        "image_url": "https://picsum.photos/seed/picsum/200/300",
        "image_type": "content_image"
      },
      {
        "image_url": "https://picsum.photos/200/300",
        "image_type": "content_image"
      },
      {
        "image_url": "https://picsum.photos/200",
        "image_type": "content_image"
      },
      {
        "image_url": "https://picsum.photos/seed/picsum/200/300",
        "image_type": "content_image"
      }
    ]
  }
  
  const renderContent = () => {
    const content = [];
    data.paragraphs.forEach((paragraph, index) => {
      // Add paragraph
      content.push(
        <Paragraph key={`para-${index}`} text={paragraph.paragraph_text} />
      );
      // Add image if exists
      if (data.images[index]) {
        content.push(
          <ImageComponent key={`img-${index}`} src={data.images[index].image_url} />
        );
      }
    });
    return content;
  };

  return (
    <div className="app-container">
      <h1 className="title">{data.title}</h1>
      <ImageComponent src={data.title_image.image_url} />
      <div className="content-container">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
