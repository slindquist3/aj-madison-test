import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header';
import Selection from './components/Selection';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Selection />
    </div>
  );
}

export default App;
