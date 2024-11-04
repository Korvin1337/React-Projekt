import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="footer-container">
        <div className="container">
          <p className="copyright">© 2024 Silicon. All rights reserved.</p>
          <p className="credit">Credit MadrasThemes</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
