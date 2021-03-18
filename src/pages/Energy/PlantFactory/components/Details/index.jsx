import React from 'react';
import { ResponsiveGrid, Box } from '@alifd/next';
import styles from './index.module.scss';
import Img from '@icedesign/img';
import factoryImage from '@/static/images/plantFactory/factoryImge.png';
import hygrometer from '@/static/images/plantFactory/hygrometer.png';
import hygrometerColours from '@/static/images/plantFactory/hygrometerColours.png';
import lamplight from '@/static/images/plantFactory/lamplight.png';
import sterilize from '@/static/images/plantFactory/sterilize.png';
import sunlight from '@/static/images/plantFactory/sunlight.png';
import temperature from '@/static/images/plantFactory/temperature.png';
import temperatureColours from '@/static/images/plantFactory/temperatureColours.png';
import waterPump from '@/static/images/plantFactory/waterPump.png';
import wind from '@/static/images/plantFactory/wind.png';
import acrossBar from '@/static/images/plantFactory/acrossBar.png';
import verticalBar from '@/static/images/plantFactory/verticalBar.png';
import location from '@/static/images/location.png';

const { Cell } = ResponsiveGrid;

const Details = () => {
  return (
    <ResponsiveGrid device="desktop">
      <Cell colSpan={5} className={styles.detailsWrap1}>
        <Box margin={[5, 10, 20, 0]} spacing={20}>
          <Box className={styles.oneRowLeftTop}>
            <img src={factoryImage} className={styles.factoryImage} />
          </Box>
          <Box className={styles.oneRowLeftBottom} spacing={2}>
            <ResponsiveGrid device="desktop" gap={2}>
              <Cell colSpan={6} className={styles.oneRowLeftBottom1}>
                <div>
                  <Img src={temperatureColours} height={100} />
                  <p>温度</p>
                  <p>26.1&#8451;</p>
                </div>
              </Cell>
              <Cell colSpan={6} className={styles.oneRowLeftBottom1}>
                <div>
                  <Img src={hygrometerColours} height={100} />
                  <p>湿度</p>
                  <p>80%</p>
                </div>
              </Cell>
            </ResponsiveGrid>
            <Box className={styles.oneRowLeftBottom2} justify={'center'}>
              <p>小岗村植物工厂</p>
              <p><Img src={location} height={12} />&nbsp;&nbsp;安徽省凤阳县小岗村河溪镇</p>
            </Box>
          </Box>
        </Box>
      </Cell>
      <Cell colSpan={7} className={styles.detailsWrap1}>
        <Box margin={[5, 0, 20, 10]} spacing={2}>
          <Box className={styles.oneRowRightWrap}>
            <ResponsiveGrid device="desktop" gap={2}>
              <Cell rowSpan={3}>
                <Img src={temperature} height={50} />
              </Cell>
              <Cell>
                <Cell>
                  1
                </Cell>
                <Cell>
                  2
                </Cell>
                <Cell>
                  3
                </Cell>
              </Cell>
              <Cell>
                <Cell>
                  1
                </Cell>
                <Cell>
                  2
                </Cell>
                <Cell>
                  3
                </Cell>
              </Cell>
              <Cell>
                <Cell>
                  1
                </Cell>
                <Cell>
                  2
                </Cell>
                <Cell>
                  3
                </Cell>
              </Cell>
            </ResponsiveGrid>
          </Box>
          <Box className={styles.oneRowRightWrap}>
            <Img src={hygrometer} height={50} />
          </Box>
          <Box className={styles.oneRowRightWrap}>
            <Img src={sunlight} height={50} />
          </Box>
        </Box>
      </Cell>
      <Cell colSpan={6} className={styles.detailsWrap2}>
        <Box>
          <Img src={waterPump} height={50} />
        </Box>
      </Cell>
      <Cell colSpan={6} className={styles.detailsWrap2}>
        <Box>
          <Img src={wind} height={50} />
        </Box>
      </Cell>
      <Cell colSpan={6} className={styles.detailsWrap2}>
        <Box>
          <Img src={lamplight} height={50} />
        </Box>
      </Cell>
      <Cell colSpan={6} className={styles.detailsWrap2}>
        <Box>
          <Img src={sterilize} height={50} />
        </Box>
      </Cell>
    </ResponsiveGrid>
  );
};

export default Details;
