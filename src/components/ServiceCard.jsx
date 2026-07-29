export default function ServiceCard({ image, icon, title, description, features, delay = 0 }) {
  return (
    <div className="service-card-wrapper" style={{ animationDelay: `${delay}ms` }}>
      <div className="service-card-image">
        <img src={image} loading="lazy" alt={title} />
        <div className="service-card-icon">
          <i className={icon}></i>
        </div>
      </div>
      <div className="service-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        {features && features.length > 0 && (
          <div className="service-card-features">
            {features.map((feature, index) => (
              <span key={index} className="service-card-feature-tag">
                {feature}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}