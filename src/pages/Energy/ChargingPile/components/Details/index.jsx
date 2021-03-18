import React from 'react';
import { Box, ResponsiveGrid } from '@alifd/next';
import styles from './index.module.scss';
import { logger } from 'ice';
import chargingPile from '@/static/images/chargingPile.png';
import u2376 from '@/static/images/u2376.png';
import u2377 from '@/static/images/u2377.png';
import Img from '@icedesign/img';

const { Cell } = ResponsiveGrid;

const Details = (props) => {
  const { data } = props;
  logger.debug(data);
  return (
    <Box margin={[10, 0, 10, 0]}>
      <ResponsiveGrid device="desktop" gap={25}>
        <Cell colSpan={4}>
          <Box direction={'row'}>
            <div className={styles.contentWrap}>
              <div className={styles.imgDiv}>
                <Img src={chargingPile} height={170}/>
              </div>
              <div className={styles.textWrap}>
                <p>{data.name}</p>
                <p>{data.address}</p>
              </div>
            </div>
          </Box>
        </Cell>
        <Cell colSpan={4}>
          <div className={styles.contentWrap}>
            <Box margin={[10, 35, 10, 35]} className={styles.infoWrap}>
              <p>充电状态：<span className={styles.spanRight}>{data.workStatus}</span></p>
              <p>当前SOC：<span className={styles.spanRight}>{data.currentSoc}</span></p>
              <p>直流充电电压：<span className={styles.spanRight}>{data.dcVoltage}</span></p>
              <p>直流充电电流：<span className={styles.spanRight}>{data.dcElectricity}</span></p>
              <p>充电功率：<span className={styles.spanRight}>{data.chargingPower}</span></p>
            </Box>
          </div>
        </Cell>
        <Cell colSpan={4}>
          <div className={styles.contentWrap}>
            <Box margin={[35, 20, 10, 35]}>
              <div className={styles.warningWrap}>
                <p>
                  <Img src={u2377} height={20}/>
                  <span className={styles.warningSpan}>充电桩告警：</span>
                </p>
                <div className={styles.warningDiv}>{data.waring}</div>
              </div>
              <div>
                <hr/>
              </div>
              <div className={styles.warningWrap}>
                <p>
                  <Img src={u2376} height={20}/>
                  <span className={styles.warningSpan}>故障状态：</span>
                </p>
                <div className={styles.warningDiv}>{data.breakdown}</div>
              </div>
            </Box>
          </div>
        </Cell>
      </ResponsiveGrid>
    </Box>
  );
};

export default Details;
