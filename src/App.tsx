import React from 'react';

import Header from './Header';
import Experience from './Experience';
import Footer from './Footer';
import styles from './styles/App.module.css';

const App = () => {
  return (
    <div id={styles.App}>
      <Header />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;
