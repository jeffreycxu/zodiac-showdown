import React from 'react';
import Button from 'react-bootstrap/Button';
import './Instructions.css';

export default function Instructions() {
  return (
    <div className="instructions section">
        <h1 className = "text-center"> How To Play</h1>
         <img className="card-img" src="./animals.png" />
         <img className="card-img" src="./actionCards.png" />

         <img className="card-img" src="./items.png" />

     
     </div>
  );
}
