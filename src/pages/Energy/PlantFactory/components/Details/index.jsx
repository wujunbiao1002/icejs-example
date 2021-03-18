import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import styles from './index.module.scss';

const { Cell } = ResponsiveGrid;

const Details = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <div className={styles.contentTopWrap}>
          安徽省凤阳县小岗村河溪镇 植物工厂
        </div>
      </Cell>
      <Cell colSpan={12}>
        <div className={styles.contentWrap}>
          温度
        </div>
      </Cell>
      <Cell colSpan={12}>
        <div className={styles.contentWrap}>
          湿度
        </div>
      </Cell>
      <Cell colSpan={12}>
        <div className={styles.contentWrap}>
          辅热
        </div>
      </Cell>
      <Cell colSpan={12}>
        <div className={styles.contentWrap}>
          水泵
        </div>
      </Cell>
      <Cell colSpan={4}>
        <div className={styles.contentWrap}>
          灯控
        </div>
      </Cell>
      <Cell colSpan={4}>
        <div className={styles.contentWrap}>
          新风
        </div>
      </Cell>
      <Cell colSpan={4}>
        <div className={styles.contentWrap}>
          杀菌
        </div>
      </Cell>
    </ResponsiveGrid>
  );
};

export default Details;
