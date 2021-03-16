import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';

const { Cell } = ResponsiveGrid;

// eslint-disable-next-line @iceworks/best-practices/recommend-functional-component
class VideoMonitoring extends React.Component {
  state = {
  };

  render() {
    return (
      <ResponsiveGrid gap={20} style={{ margin: '10px', padding: '10px', background: '#fff' }}>
        <Cell colSpan={12}>
          <PageHeader
            // title=""
            style={{ margin: '0', paddingBottom: '0' }}
            // description=""
            breadcrumbs={[
              {
                name: '系统首页',
              },
              {
                name: '视频监控',
              },
            ]}
          />
        </Cell>

        <Cell colSpan={12}>
          数据分析
        </Cell>
      </ResponsiveGrid>
    );
  }
}

export default VideoMonitoring;
