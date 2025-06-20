import React from 'react';
import './Expertise.css';

const Expertise = () => {
  const expertiseAreas = [
    {
      title: 'Branding',
      description:
        'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.'
    },
    {
      title: 'UI Design',
      description:
        'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.'
    },
    {
      title: 'UX Design',
      description:
        'I comprehend and resolve digital product issues using a user-focused methodology. Investigation, compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements'
    },
    {
      title: 'Development',
      description:
        'I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome, complex coding. Webflow forms the foundation of my web development approach, I employ it to produce safe, top-notch personalized websites.'
    }
  ];

  return (
    <section className="expertise-section">
      <div className="expertise-container">
        {/* Section Title */}
        <div className="expertise-header">
          <div className="expertise-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <h2 className="expertise-title">Expertise</h2>
        </div>

        {/* Expertise Grid */}
        <div className="expertise-grid">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="expertise-item">
              <h3 className="expertise-heading">
                <span className="dot" />
                {area.title}
              </h3>
              <p className="expertise-description">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
