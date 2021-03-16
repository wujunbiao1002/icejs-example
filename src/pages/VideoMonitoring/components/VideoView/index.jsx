import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import styles from './index.module.scss';

const { Cell } = ResponsiveGrid;

const VideoView = (props) => {
  const { videoViewList } = props;

  return (
    <ResponsiveGrid>
      {
        videoViewList.map((item) => {
          const path = `static/video/${ item.path}`;
          return (<Cell colSpan={3} className={styles.VideoColSpan}>
            <video style={{ width: 300 }} controls autoPlay="autoplay">
              <source src={path} type="video/mp4" />
              你的游览器不支持播放，建议升级游览器。
            </video>
            <p>{item.label}</p>
                  </Cell>);
        })
      }

    </ResponsiveGrid>
  );
};
export default VideoView;
