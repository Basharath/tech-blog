import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="left">
          &copy; Copyright {new Date().getFullYear()} |{' '}
          <Link to="/">Tech Blog</Link>{' '}
        </div>

        <div className="right">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms &amp; conditions</Link>
        </div>
      </div>
    </footer>
  );
}
