import React, { useState } from 'react';
import { logger } from 'ice';
import { Checkbox, ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import VideoView from './components/VideoView';
import mock from './mock';
import styles from './index.module.scss';

const { Cell } = ResponsiveGrid;
const { Group: CheckboxGroup } = Checkbox;

const VideoMonitoring = () => {
  const { videoDataList } = mock;
  const [checkDefaultValue] = useState([1, 2]);
  const [videoViewList, setVideoViewList] = useState(mock.videoViewList);

  const onChange = (selectedItems) => {
    const list = selectedItems.map((item) => {
      const data = videoDataList.filter((i) => i.value === item);
      if (data.length > 0) {
        return data[0];
      }
    });
    setVideoViewList(list);
    logger.debug(list);
  };

  return (
    <ResponsiveGrid
      gap={20}
      style={{
        margin: '10px',
        padding: '10px',
        background: '#fff',
      }}
    >
      <Cell colSpan={12}>
        <PageHeader
          // title=""
          style={{
            margin: '0',
            paddingBottom: '0',
          }}
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
      <br/>
      <Cell colSpan={12}>
        <ResponsiveGrid>
          <Cell colSpan={1} />
          <Cell colSpan={10} className={styles.VideoColSpan}>
            <CheckboxGroup defaultValue={checkDefaultValue} dataSource={videoDataList} onChange={onChange} />
          </Cell>
          <Cell colSpan={1} />
        </ResponsiveGrid>
      </Cell>
      <Cell colSpan={12}>
        <VideoView videoViewList={videoViewList} />
      </Cell>
    </ResponsiveGrid>
  );
};
export default VideoMonitoring;
