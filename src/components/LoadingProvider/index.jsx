import { Loading } from '@alifd/next';
import * as React from 'react';

const LoadingProvider = (props) => {
  const { tip, describe } = props;

  return (
    <div style={{ textAlign: 'center', margin: 30 }}>
      <Loading tip={tip || 'Loading……'} style={{ width: 200 }}>
        <div>{describe || 'Loading……'}</div>
      </Loading>
    </div>
  );
};
export default LoadingProvider;
