import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className={`main-container ${props.className}`}>
      {props.children}
    </div>
  )
}

export default Card
