import React from 'react';
import logo from './logo.svg';
import Index from './view/pages';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles['app-container']}>
      <Index />
    </div>
  );
}

export default App;
