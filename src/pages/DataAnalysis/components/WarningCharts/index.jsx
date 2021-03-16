import React from 'react';
import {
  DatePicker,
} from '@alifd/next';
import styles from './index.module.scss';
import echarts from 'echarts';
import { warning } from '@/static/js/echartsHealth';

const { RangePicker } = DatePicker;
let housePropertyInit;
let rateInit;

// eslint-disable-next-line @iceworks/best-practices/recommend-functional-component
class WarningCharts extends React.Component {
  state = {
  };

  resizeCharts = () => {
    housePropertyInit.resize();
  }

  componentDidMount() {
    this.loadChart();
    window.addEventListener('resize', this.resizeCharts);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeCharts);
  }

  loadChart = () => {
    housePropertyInit = echarts.init(document.getElementById('warning'));
    housePropertyInit.setOption(warning);
    // 心率
  }


  render() {
    return (
      <div>
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
        <div id="warning" style={{ width: '100%', height: '450px' }} />
      </div>
    );
  }
}

export default WarningCharts;
