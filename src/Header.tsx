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
        Résumé
      </a>
      <div className={styles.ImageContainer}>
        <img src={jonathan} className={styles.Image} alt="Jonathan Gin" />
      </div>
      <hr />
      <article>
        <p className={styles.Summary}>
          Hey there{' '}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
          , I&apos;m Jonathan!
        </p>
        <p className={styles.Summary}>
          I&apos;m currently working as a software engineer at GitHub.
        </p>
        <p className={styles.Summary}>
          I&apos;d love to connect on one of the following platforms.
          Alternatively, you can email me at{' '}
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
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className={styles.Social}>
            <a
              href="https://www.linkedin.com/in/jonathangin"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li className={styles.Social}>
            <a
              href="https://twitter.com/jonathangin52"
              target="_blank"
              rel="noopener"
              aria-label="Twitter"
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
