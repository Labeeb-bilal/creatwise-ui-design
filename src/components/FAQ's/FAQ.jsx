import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: 'What is your design process?',
    answer:
      'My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs. In the prototype phase, I build interactive models. In the test phase, I collect feedback to refine the design.',
  },
  {
    question: 'What tools and software do you use for UX design?',
    answer:
      'I primarily use Figma, Adobe XD, Sketch, and InVision for wireframing, prototyping, and UI design.',
  },
  {
    question: 'How do you measure the success of your UX designs?',
    answer:
      'Success is measured through user feedback, usability testing, analytics (bounce rate, conversion), and stakeholder satisfaction.',
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <h2 className="faq-title">Frequently asked questions</h2>
        </div>

        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-toggle-icon">
                {activeIndex === index ? '×' : '+'}
              </span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
