import React from 'react';
import './App.css'; // Make sure to create a Footer.css file for styles

const Footer = () => {
  return (
    <footer className="footer">
        <p>© 2024 PEASY</p>
        <div className="footer-links">
          <a href="/">TERMS</a>
          <a href="/">COOKIE</a>
          <a href="/">ADVERTISEMENT</a>
        </div>
        <div className="footer-social">
          <div>Location</div>
          <div>410 Georgia Street, Vancouver, BC</div>
        </div>
    </footer>
  );
};

export default Footer;
