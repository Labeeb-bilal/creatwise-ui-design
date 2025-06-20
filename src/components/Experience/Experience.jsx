import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Lead Product Designer',
      company: 'Fortknox',
      period: 'Mar 2022 - Oct 2023'
    },
    {
      title: 'Intern Designer',
      company: 'OmniSafe',
      period: 'Mar 2022 - Oct 2023'
    },
    {
      title: 'UI Designer',
      company: 'DoraDesign',
      period: 'Mar 2022 - Oct 2023'
    },
    {
      title: 'Frontend Developer',
      company: 'OpacityAuthor',
      period: 'Mar 2022 - Oct 2023'
    }
  ];

  return (
    <section className="experience-section">
      <div className="experience-container">
        {/* Section Title */}
        <div className="experience-header">
          <div className="experience-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <h2 className="experience-title">Experience</h2>
        </div>

        {/* Experience List */}
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-left">
                <h3 className="job-title">{exp.title}</h3>
              </div>
              <div className="experience-right">
                <p className="company">{exp.company}</p>
                <p className="period">{exp.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
