import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import data, { categories } from '../data';

export default function Sidebar() {
  const history = useHistory();

  const handlePost = (slug) => {
    history.push(slug);
  };
  return (
    <div className="sidebar">
      <div className="block">
        <div className="search-box">
          <input type="text" placeholder="Search the site" />
          <div className="btn-search">
            <i className="fas fa-search"></i>
          </div>
        </div>
      </div>

      <div className="block">
        <div className="social-media">
          <div className="title">
            Follow us <i className="fas fa-thumbs-up"></i>
          </div>
          <button className="btn btn-social facebook">
            <i className="fab fa-facebook"></i>{' '}
            <span className="count">12,456 fans</span>
          </button>
          <button className="btn btn-social twitter">
            <i className="fab fa-twitter"></i>{' '}
            <span className="count">1,456 followers</span>
          </button>
          <button className="btn btn-social youtube">
            <i className="fab fa-youtube"></i>{' '}
            <span className="count">2M subscribers</span>
          </button>
        </div>
      </div>

      <div className="block">
        <div className="recent-posts">
          <div className="title">
            Recent Posts <i className="fas fa-newspaper"></i>
          </div>
          {data
            .filter((i, idx) => idx < 6)
            .map((d, idx) => (
              <div className="recent-post" key={idx}>
                <img
                  className="post-image"
                  src={d.image}
                  alt={d.title}
                  onClick={() => handlePost(d.slug)}
                />
                <div className="post-body">
                  <div
                    className="post-title"
                    onClick={() => handlePost(d.slug)}
                  >
                    {d.title}
                  </div>
                  <div className="post-date">{d.date}</div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="block">
        <div className="categories">
          <div className="title">
            Categories <i className="fas fa-list"></i>
          </div>
          {categories.map((c, idx) => (
            <div className="category" key={idx}>
              <i className="fas fa-chevron-circle-right"></i>{' '}
              <Link to={c}>{c.slice(0, 1).toUpperCase() + c.slice(1)}</Link>
            </div>
          ))}
        </div>
      </div>

      <div className="block">
        <div className="social-media">
          <div className="title">
            Follow us <i className="fas fa-thumbs-up"></i>
          </div>
          <button className="btn btn-social facebook">
            <i className="fab fa-facebook"></i>{' '}
            <span className="count">12,456 fans</span>
          </button>
          <button className="btn btn-social twitter">
            <i className="fab fa-twitter"></i>{' '}
            <span className="count">1,456 followers</span>
          </button>
          <button className="btn btn-social youtube">
            <i className="fab fa-youtube"></i>{' '}
            <span className="count">2M subscribers</span>
          </button>
        </div>
      </div>
    </div>
  );
}
