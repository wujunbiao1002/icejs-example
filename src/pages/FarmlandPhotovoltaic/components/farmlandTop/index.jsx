import React, { useEffect, useState } from 'react';

import styles from './index.module.scss';
import lighting from '../../../../static/images/lighting.png';
import addressIcon from '../../../../static/images/address_icon.png';
import pvImg from '../../../../static/images/pv.png';
import ballImg from '../../../../static/images/ball.png';
import * as echarts from 'echarts';
import { farmlandEfficiency } from '@/static/js/echartsFarmland';

let efficiencyInit;


const FarmlandTop = () => {
  useEffect(() => {
    loadChart();
    window.addEventListener('resize', resizeCharts);
  }, []);

  const resizeCharts = () => {
    efficiencyInit.resize();
  };
  const loadChart = () => {
    efficiencyInit = echarts.init(document.getElementById('farmlandEfficiency'));
    efficiencyInit.setOption(farmlandEfficiency);
  };

  return (
    <div>
      <div className={styles.farmlandTop}>
        <div className={styles.farmlandContent}>
          <div className={styles.contentLeft}>
            <img src={lighting} alt="l" />
            <div className={styles.addressTitle}>小岗村农田光伏</div>
            <div className={styles.addressWrap}>
              <div className={styles.addressName}>
                <img src={addressIcon} alt="icon" />小溪镇小岗村
              </div>
              <div className={styles.addressDetailName}>农光路千亩农田光伏</div>
            </div>
            <div className={styles.systemStatusWrap}>
              <div>系统状态：</div>
              <div className={styles.systemStatus}>&bull;&nbsp;运行</div>
            </div>
          </div>
          <img src={pvImg} alt="pv" />
        </div>

        <div className={styles.verticalGap} />

        <div className={styles.efficiency}>
          <div className="analysis-title">逆变器效率</div>
          <div id="farmlandEfficiency" style={{ width: '100%', height: '300px' }} />
        </div>

        <div className={styles.verticalGap} />

        <div className={styles.ball}>
          <div className={styles.ballItem}>
            <div>
              <img src={ballImg} alt="ball" />
            </div>
            <div className={styles.ballDes}>
              <div>当日发电量</div>
              <div>98.52kwh</div>
            </div>
          </div>

          <div className={styles.levelGap} />

          <div className={styles.ballItem}>
            <div>
              <img src={ballImg} alt="ball" />
            </div>
            <div className={styles.ballDes}>
              <div>当月发电量</div>
              <div>98.52kwh</div>
            </div>
          </div>

          <div className={styles.levelGap} />

          <div className={styles.ballItem}>
            <div>
              <img src={ballImg} alt="ball" />
            </div>
            <div className={styles.ballDes}>
              <div>总发电量</div>
              <div>98.52kwh</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default FarmlandTop;
