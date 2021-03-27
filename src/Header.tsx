import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import jonathan from './assets/jonathan.jpg';
import './styles/Header.css';

const Header = () => {
  return (
    <header className="Header">
      <div className="ImageContainer">
        <img src={jonathan} className="Image" alt="Jonathan Gin" />
      </div>
      <hr />
      <div>
        <p className="Summary">
          Hi, I'm Jonathan. I'm currently working as a software developer at Shopify.
          Visit me at some at some of the platforms below, or email me
          at <a href="mailto:hello@jonathangin.me">hello@jonathangin.me</a>.
        </p>
        <div className="SocialLinks">
          <span className="Social">
            <a href="https://www.github.com/JonathanGin52" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </span>
          <span className="Social">
            <a href="https://www.linkedin.com/in/jonathangin" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </span>
          <span className="Social">
            <a href="https://twitter.com/jonathangin52" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </span>
          <span className="Social">
            <a href="https://www.instagram.com/jonathangin52/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
