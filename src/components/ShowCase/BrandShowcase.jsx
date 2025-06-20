import React from 'react';
import './BrandShowcase.css';

const BrandShowcase = () => {
  const brands = [
    { name: 'doradesign', logo: 'doradesign' },
    { name: 'WAVE', logo: 'WAVE' },
    { name: 'SIVILA', logo: 'SIVILA' },
    {
      name: 'Welcome to my portfolio. Here, artistry meets functionality. Dive into a curated showcase of distinctive branding and web designs, each crafted to captivate and inspire.',
    }
  ];

  return (
    <section className="brand-section">
      <div className="brand-container">
        <div className="brand-list">
          {brands.map((brand, index) => (
            brand.logo ? (
              <div key={index} className="brand-item">
                <span className="brand-logo">{brand.logo}</span>
              </div>
            ) : (
              <div key={index} className="brand-description">
                <p>{brand.name}</p>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
