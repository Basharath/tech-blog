import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [active, setActive] = useState('');

  const handleScroll = () => {
    if (window.pageYOffset > 50) setScroll(true);
    else setScroll(false);
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleNavItem = (item) => {
    // setShow(false);
    setActive(item);
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="sticky-container">
      <div className={'scrollup' + (scroll ? ' show' : '')} onClick={scrollUp}>
        <i className="fas fa-chevron-up"></i>
      </div>
      <nav id="nav" className={scroll ? 'scroll' : ''}>
        <div className="container">
          <div className="nav-brand">Tech Blog</div>
          <div className="nav-toggler" onClick={() => setShow(!show)}>
            <i className={'fas ' + (show ? 'fa-times' : 'fa-bars')}></i>
          </div>
          <div className={'nav-collapse' + (show ? ' show' : '')}>
            <ul className="navbar">
              <li className={'nav-item' + (active === 'home' ? ' active' : '')}>
                <Link
                  className="nav-link"
                  to="/home"
                  onClick={() => handleNavItem('home')}
                >
                  Home
                </Link>
              </li>
              <li className={'nav-item' + (active === 'tech' ? ' active' : '')}>
                <Link
                  className="nav-link"
                  to="/about"
                  onClick={() => handleNavItem('tech')}
                >
                  Technology <i className="fas fa-sort-down"></i>
                </Link>
                <ul className="dropdown">
                  <li>Gadgets</li>
                  <li>Mobiles</li>
                  <li>Tips</li>
                </ul>
              </li>
              <li className={'nav-item' + (active === 'news' ? ' active' : '')}>
                <Link
                  className="nav-link"
                  to="/about"
                  onClick={() => handleNavItem('news')}
                >
                  News <i className="fas fa-sort-down"></i>
                </Link>
                <ul className="dropdown">
                  <li>Trending</li>
                  <li>Social Media</li>
                  <li>Computers</li>
                </ul>
              </li>
              <li
                className={'nav-item' + (active === 'about' ? ' active' : '')}
              >
                <Link
                  className="nav-link"
                  to="/about"
                  onClick={() => handleNavItem('about')}
                >
                  About
                </Link>
              </li>
              <li
                className={
                  'nav-item' + (active === 'advertise' ? ' active' : '')
                }
              >
                <Link
                  className="nav-link"
                  to="/projects"
                  onClick={() => handleNavItem('advertise')}
                >
                  Advertise
                </Link>
              </li>
              <li
                className={'nav-item' + (active === 'contact' ? ' active' : '')}
              >
                <Link
                  className="nav-link"
                  to="/contact"
                  onClick={() => handleNavItem('contact')}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://stackoverflow.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-stack-overflow"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
