import React from 'react';
import './Footer.css';

const Footer = () => {
  const brands = ['FIGMA', 'DESIGNER', 'FIGMA', 'DESIGNER', 'FIGMA', 'DESIGNER', 'FIGMA', 'DESIGNER'];
  const socialLinks = ['Dribbble', 'Behance', 'Twitter', 'Instagram'];

  return (
    <footer className="footer">
      {/* Scrolling Brand Banner */}
      <div className="brand-banner">
        <div className="brand-marquee">
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className="brand-item">
              <div className="brand-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <span className="brand-name">{brand}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content">
        <div className="footer-container">
          <h2 className="footer-title">LET'S TALK!</h2>
          <p className="footer-email">
            <a href="mailto:rehanurraihan@gmail.com">rehanurraihan@gmail.com</a>
          </p>

          {/* Bottom Section */}
          <div className="footer-bottom">
            <p className="copyright">© Rehan Raihan - 2023</p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="social-link"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
