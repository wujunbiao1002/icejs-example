import React from 'react';
import styles from './index.module.scss';
import echarts from 'echarts';
import { callingStatistics, rateStatistics, pressureStatistics, oxygenStatistics } from '@/static/js/echartsHealth';

let callingInit;
let rateInit;
let pressureInit;
let oxygenInit;

// eslint-disable-next-line @iceworks/best-practices/recommend-functional-component
class Statistics extends React.Component {
  state = {
  };

  resizeCharts = () => {
    callingInit.resize();
  }

  componentDidMount() {
    this.loadChart();
    window.addEventListener('resize', this.resizeCharts);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeCharts);
  }

  loadChart = () => {
    callingInit = echarts.init(document.getElementById('callingStatistics'));
    callingInit.setOption(callingStatistics);
    // 心率
    rateInit = echarts.init(document.getElementById('rateStatistics'));
    rateInit.setOption(rateStatistics);
    // 血氧
    pressureInit = echarts.init(document.getElementById('pressureStatistics'));
    pressureInit.setOption(pressureStatistics);
    // 血氧
    oxygenInit = echarts.init(document.getElementById('oxygenStatistics'));
    oxygenInit.setOption(oxygenStatistics);
  }


  render() {
    return (
      <div className={styles.bottomWrap}>
        <div className={styles.bottomItem}>
          <div className="analysis-warning">
            <div className={styles.nameTitle}>
              紧急呼叫统计
            </div>
          </div>
          <div id="callingStatistics" style={{ width: '100%', height: '300px' }} />
        </div>

        <div className="centerGap" />

        <div className={styles.bottomItem}>
          <div className="analysis-warning">
            <div className={styles.nameTitle}>
              心率异常统计
            </div>
          </div>
          <div id="rateStatistics" style={{ width: '100%', height: '300px' }} />
        </div>

        <div className="centerGap" />

        <div className={styles.bottomItem}>
          <div className="analysis-warning">
            <div className={styles.nameTitle}>
              血压异常统计
            </div>
          </div>
          <div id="pressureStatistics" style={{ width: '100%', height: '300px' }} />
        </div>

        <div className="centerGap" />

        <div className={styles.bottomItem}>
          <div className="analysis-warning">
            <div className={styles.nameTitle}>
              血氧异常统计
            </div>
          </div>
          <div id="oxygenStatistics" style={{ width: '100%', height: '300px' }} />
        </div>
      </div>
    );
  }
}

export default Statistics;
