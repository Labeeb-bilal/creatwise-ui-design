import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Floyd Miles',
      company: 'eBay',
      image:
        'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
      quote:
        "Synergy’s resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy’s resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
    },
    {
      name: 'Sarah Johnson',
      company: 'Google',
      image:
        'https://images.pexels.com/photos/1804507/pexels-photo-1804507.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
      quote:
        "The design process was seamless and the final product exceeded our expectations. Highly recommend for any design project.",
    },
    {
      name: 'Michael Chen',
      company: 'Microsoft',
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
      quote:
        "Outstanding work quality and attention to detail. The team delivered exactly what we needed for our product launch.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        {/* Section Title */}
        <div className="testimonial-header">
          <div className="star-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <h2 className="testimonial-title">What they say</h2>
        </div>

        {/* Layout: Two Columns */}
        <div className="testimonial-content">
          {/* Author Info */}
          <div className="testimonial-author">
            <img src={current.image} alt={current.name} className="author-image" />
            <div className="author-text">
              <h4>{current.name}</h4>
              <p>{current.company}</p>
            </div>
          </div>

          {/* Quote */}
          <div className="testimonial-quote">
            <p>"{current.quote}"</p>
          </div>
        </div>

        {/* Arrows */}
        <div className="testimonial-nav">
          <button onClick={prevTestimonial} className="nav-button-2">
            ←
          </button>
          <button onClick={nextTestimonial} className="nav-button-2">
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
