import React,{useState,useEffect} from 'react';
import '../../css/NewsCard.css'; // Ensure the CSS file is linked

const NewsCard = ({ title, content, readTime,ImageSrc }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <span className="tag">Topic 1</span>
          <span className="tag">Topic 2</span>
        </div>
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="card-footer">
          <span>{readTime} mins read</span>
        </div>
      </div>
      <div className="side-div">
       <img src={ImageSrc} width={410} height={260}/>
      </div>
    </div>
  );
};

export default NewsCard;
