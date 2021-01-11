import React from 'react';

export default function Sidebar() {
  return (
    <div className="sidebar">
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
