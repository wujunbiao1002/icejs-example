import React from 'react';
import { Link } from 'ice';
import styles from './index.module.scss';

export default function Logo({ image, text, url }) {
  return (
    <div className="logo">
      <Link to={url || '/alarm'} className={styles.logo}>
        {image && <img src={image} alt="logo" />}
        <span>{text}</span>
      </Link>
    </div>
  );
}
