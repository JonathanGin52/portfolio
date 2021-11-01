import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import {jonathan} from './assets';
import HoverLink from './HoverLink';
import styles from './styles/Header.module.css';

const Header = () => {
  return (
    <header id={styles.Header}>
      <a id={styles.Resume} href="/resume.pdf">
        Resume
      </a>
      <div className={styles.ImageContainer}>
        <img src={jonathan} className={styles.Image} alt="Jonathan Gin" />
      </div>
      <hr />
      <article>
        <p className={styles.Summary}>
          Hi, I&apos;m Jonathan. I&apos;m currently working as a software
          developer at Shopify. Visit me at some of the platforms below, or
          email me at{' '}
          <HoverLink
            href="mailto:hello@jonathangin.me"
            text="hello@jonathangin.me"
            target="_blank"
            rel="noopener"
            aria-label="Email"
          />
          {/* */}.
        </p>
        <ul className={styles.SocialLinks}>
          <li className={styles.Social}>
            <a
              href="https://www.github.com/JonathanGin52"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className={styles.Social}>
            <a
              href="https://www.linkedin.com/in/jonathangin"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li className={styles.Social}>
            <a
              href="https://twitter.com/jonathangin52"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className={styles.Social}>
            <a
              href="https://www.instagram.com/jonathangin52"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </article>
    </header>
  );
};

export default Header;
