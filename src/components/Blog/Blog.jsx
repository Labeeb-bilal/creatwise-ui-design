import React from 'react';
import './Blog.css';
import imag1 from '../../public/img1.png'
import imag2 from '../../public/img2.png'
import imag3 from '../../public/img3.png'

const Blog = () => {
  const blogPosts = [
    {
      date: 'Nov 9, 2023',
      title: 'How UX works in web',
      image: imag1,
      tags: ['UI', 'UX']
    },
    {
      date: 'Aug 18, 2023',
      title: 'Case study - Analysis Application.',
      image: imag2,
      tags: ['DESIGN', 'PRINT']
    },
    {
      date: 'Feb 16, 2023',
      title: '3 ways to develop your skill',
      image: imag3,
      tags: ['DESIGN', 'SKILL']
    }
  ];

  return (
    <section className="blog-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="header-left">
            <div className="icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h2>Blog</h2>
          </div>
          <a href="#all-blog" className="view-all">view all</a>
        </div>

        {/* Blog Posts */}
        <div className="blog-posts">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-item">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-content">
                <p className="blog-date">{post.date}</p>
                <h3 className="blog-title">{post.title}</h3>
                <div className="blog-tags">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <button className="read-btn">Read</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
