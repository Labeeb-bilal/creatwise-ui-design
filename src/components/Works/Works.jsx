import React from 'react';
import './Works.css';
import imag1 from '../../public/img1.png'
import imag2 from '../../public/img2.png'
import imag3 from '../../public/img3.png'


const Works = () => {
  const projects = [
    {
      title: 'Analysis Application',
      description:
        'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
      image: imag1,
      tags: ['FINTECH', 'UIX'],
    },
    {
      title: 'Fortknox Application',
      description:
        'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
      image: imag2,
      tags: ['MOBILE', 'WEB'],
    },
    {
      title: 'Zenocide Application',
      description:
        'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
      image: imag3,
      tags: ['APP', 'WEB'],
    },
  ];

  return (
    <section className="works-section">
      <div className="works-container">
        {/* Header */}
        <div className="works-header">
          <div className="works-title-group">
            <div className="works-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h2 className="works-title">Works</h2>
          </div>
          <a href="#all-works" className="works-link">view all</a>
        </div>

        {/* Cards */}
        <div className="works-list">
          {projects.map((project, index) => (
            <div key={index} className="works-card">
              <div className="works-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="works-image"
                />
              </div>
              <div className="works-info">
                <h3 className="works-project-title">{project.title}</h3>
                <p className="works-description">{project.description}</p>
                <div className="works-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="works-tag">{tag}</span>
                  ))}
                </div>
                <button className="works-button">View Case Study</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
