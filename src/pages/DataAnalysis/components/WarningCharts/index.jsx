import React from 'react';
import {
  DatePicker,
} from '@alifd/next';
import styles from './index.module.scss';
import echarts from 'echarts';
import { warning, age } from '@/static/js/echartsHealth';

const { RangePicker } = DatePicker;
let rateInit;
let ageInit;

// eslint-disable-next-line @iceworks/best-practices/recommend-functional-component
class WarningCharts extends React.Component {
  state = {
  };

  resizeCharts = () => {
    rateInit.resize();
  }

  componentDidMount() {
    this.loadChart();
    window.addEventListener('resize', this.resizeCharts);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeCharts);
  }

  loadChart = () => {
    rateInit = echarts.init(document.getElementById('warning'));
    rateInit.setOption(warning);
    // 心率

    ageInit = echarts.init(document.getElementById('age'));
    ageInit.setOption(age);
  }


  render() {
    return (
      <div className="analysis-center">
        <div className="analysis-warning-wrap">
          <div className="analysis-warning">
            <div className={styles.titleWrap}>
              <div className={styles.nameTitle}>
                异常预警统计
              </div>
              <div className={styles.search}>
                <span className={styles.centerWord}>本周</span>
                <span className={styles.centerWord}>本月</span>
                <span className={styles.centerWord}>本年</span>
                <RangePicker />
              </div>
            </div>
          </div>
          <div id="warning" style={{ width: '100%', height: '300px' }} />
        </div>

        <div className="centerGap" />

        <div className="analysis-warning-wrap">
          <div className="analysis-warning">
            <div className={styles.titleWrap}>
              <div className={styles.nameTitle}>
                年龄段分布
              </div>
            </div>
          </div>
          <div id="age" style={{ width: '100%', height: '300px' }} />
        </div>
      </div>
    );
  }
}

export default WarningCharts;
