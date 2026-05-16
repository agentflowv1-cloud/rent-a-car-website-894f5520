import React from 'react';

interface CardProps {
  title: string;
  url: string;
}

function Card({ title, url }: CardProps) {
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <div className="card" onClick={handleClick}>
      <h2>{title}</h2>
    </div>
  );
}

export default Card;