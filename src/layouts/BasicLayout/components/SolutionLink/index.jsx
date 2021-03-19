import * as React from 'react';
import { Icon } from '@alifd/next';
import { Link } from 'ice';
import styles from './index.module.scss';

const SolutionLink = () => (
  <div className={styles.link}>
    <Link to="/" title="返回首页">
      <div><Icon type="exit" />返回首页</div>
    </Link>
  </div>
);

export default SolutionLink;
