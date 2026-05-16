import React from 'react';
import Card from '../components/Card';

const cards = [
  { id: 1, title: 'Car 1', url: 'https://www.car1.com' },
  { id: 2, title: 'Car 2', url: 'https://www.car2.com' },
  { id: 3, title: 'Car 3', url: 'https://www.car3.com' }
];

function Home() {
  return (
    <div className="container">
      {cards.map((card) => (
        <Card key={card.id} title={card.title} url={card.url} />
      ))}
    </div>
  );
}

export default Home;