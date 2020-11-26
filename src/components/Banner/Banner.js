import React from 'react';
import Button from 'react-bootstrap/Button';
import ReactPlayer from "react-player";

import './Banner.css';

export default function Banner() {
  return (
    <div className="banner-section section">
        <h1 className = "tagline">Zodiac Showdown</h1>
       <div className = "banner">
        <div className = "box">
            <img className="box-img" src="./box.png" />
            <div className = "walkthrough">
         <p> WATCH OUR 2 MINUTE VIDEO</p>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
      />
      </div>
        </div>
        <div className = "rating">
            <img className="stars-img" src="./stars.png" />
            <div className = "reviews-text">
                <p>10,000+ REVIEWS ON AMAZON </p>
                <p>"It's like Uno but with social deduction and zodiac animals"</p>
            </div>
            <Button variant="dark" className = "game-btn">Get the game</Button>{' '}
        </div>
        </div>

        
     </div> 
  );
}
