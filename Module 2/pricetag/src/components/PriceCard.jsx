import React from 'react';
import './PriceCard.css';

const PriceCard = ({ plan }) => {
  return (
    <div className="card">
      <h3>{plan.name}</h3>
      <h2>{plan.price}</h2>
      <ul>
        {plan.features.map((feature, index) => (
          <li key={index} className={feature.included ? '' : 'disabled'}>
            {feature.name}
          </li>
        ))}
      </ul>
      <button>Button</button>
    </div>
  );
};

export default PriceCard;
