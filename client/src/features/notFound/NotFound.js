import React from 'react';
import { Link } from 'react-router-dom';
import styles from './notfound.module.css';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.notFound__title}>404</h1>
      <h2 className={styles.notFound__subtitle}>
        Sorry, but this page does not exist. We will do our best to have it here soon &#x1F60A;
      </h2>
      <Link className={styles.notFound__link} to='/'>
        Return to main page?
      </Link>
    </div>
  );
};

export default NotFound;
