import React from 'react';

export default function ServiceCard({ image, icon, title, description, features, delay }) {
  return (
    <div className="service-card-wrapper" style={{ animationDelay: `${delay}ms` }}>
      <div className="service-card-image">
        <img src={image} alt={title} />
      </div>

      <div className="service-card-body">
        <div className="service-icon">
          <i className={icon}></i>
        </div>

        <h3>{title}</h3>
        <p>{description}</p>

       <ul className="service-features-list">
            {features.map((feature, index) => (
              <li key={index} className="service-feature-item">
                <i className="fas fa-check-circle"></i>
                <span>{feature.trim()}</span>
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
}