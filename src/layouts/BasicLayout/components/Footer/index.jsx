import React from 'react';
import styles from './index.module.scss';

export default function Footer() {
  const date = new Date();
  return (
    <p className={styles.footer}>
      <span className={styles.logo}>智慧小岗村 - 一键报警</span>
      <br />
      <span className={styles.copyright}>© {date.getFullYear()} </span>
    </p>
  );
}
