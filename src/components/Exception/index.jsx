import React from 'react';
import { Link } from 'ice';
import { Button, ResponsiveGrid } from '@alifd/next';
import styles from './index.module.scss';
import errorImg from './images/error.png';
import PageHeader from '@/components/PageHeader';

const { Cell } = ResponsiveGrid;

const Exception = (props) => {
  const defaultProps = {
    statusCode: '404',
    description: '抱歉，你访问的页面不存在',
    image: errorImg,
    backText: '返回首页',
    redirect: '/',
  };

  const {
    statusCode,
    description,
    image,
    backText,
    redirect,
  } = props;
  return (
    <ResponsiveGrid
      gap={20}
      style={{
        margin: '10px',
        padding: '10px',
        background: '#fff',
      }}
    >
      <Cell colSpan={12} style={{ margin: '0' }}>
        <div>
          <PageHeader
            style={{
              margin: '0',
              paddingBottom: '0',
            }}
            breadcrumbs={[
              {
                name: '系统首页',
              },
              {
                name: '异常页面',
              },
            ]}
          />
        </div>
      </Cell>
      <Cell colSpan={5} className={styles.exceptionColSpan}>
        <img src={image || defaultProps.image} className={styles.exceptionImage} alt="页面不存在" />
      </Cell>
      <Cell colSpan={5} className={styles.exceptionColSpanLeft}>
        <h1 className={styles.statusCode}>{statusCode || defaultProps.statusCode}</h1>
        <p className={styles.description}>{description || defaultProps.description}</p>
        <Button className={styles.exceptionButton}>
          <Link to={redirect || defaultProps.redirect}>
            {backText || defaultProps.backText}
          </Link>
        </Button>
      </Cell>
    </ResponsiveGrid>
  );
};

export default Exception;
