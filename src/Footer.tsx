import React from 'react';

import HoverLink from './HoverLink';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <h3 className="footerTitle">Let&apos;s connect!</h3>
      <p className="footerSubtitle">
        Learn more by visiting my{' '}
        <HoverLink
          href="https://www.github.com/JonathanGin52"
          text="GitHub"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
        />
        ,{' '}
        <HoverLink
          href="https://www.linkedin.com/in/jonathangin"
          text="LinkedIn"
          target="_blank"
          rel="noopener"
          aria-label="Email"
        />
        , or <HoverLink href="#footer" text="Resume" aria-label="Email" />.
      </p>
    </footer>
  );
};

export default Footer;
