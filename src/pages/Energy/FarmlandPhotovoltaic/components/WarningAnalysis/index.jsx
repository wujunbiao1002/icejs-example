import React from 'react';
import styles from './index.module.scss';
import * as echarts from 'echarts';
import { warningAnalysis } from '@/static/js/echartsFarmland';
import { logger } from 'ice';

let warningAnalysisInit;

let dateList = [];
let warningAnalysisList = [];

// eslint-disable-next-line @iceworks/best-practices/recommend-functional-component
class WarningAnalysis extends React.Component {
  state = {
  };

  resizeCharts = () => {
    warningAnalysisInit.resize();
  }

  componentDidMount() {
    this.handleTimeClick();
    this.loadWarningAnalysisChart();
    window.addEventListener('resize', this.resizeCharts);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeCharts);
  }

  // 发电功率
  loadWarningAnalysisChart = () => {
    warningAnalysisInit = echarts.init(document.getElementById('warningAnalysis'));
    warningAnalysisInit.setOption(warningAnalysis);
  }

  creatData = (startDate, endDate) => {
    let _dt1 = new Date(startDate);
    const _dt2 = new Date(endDate);
    const dt1 = _dt1.getTime();
    const dt2 = _dt2.getTime();
    const day = parseInt(Math.abs(dt1 - dt2) / 1000 / 60 / 60 / 24);
    dateList = [];
    warningAnalysisList = [];
    dateList.push(this.formatDate(_dt1));
    warningAnalysisList.push(this.getRandom(20, 80));


    for (let i = 1; i <= day; i++) {
      _dt1 = _dt1.setDate(_dt1.getDate() - 1);
      _dt1 = new Date(_dt1);
      dateList.push(this.formatDate(_dt1));
      warningAnalysisList.push(this.getRandom(20, 80));
    }
  };
  getRandom = (n, m) => {
    return Math.floor(Math.random() * (m - n + 1) + n);
  };
  formatDate = (date) => {
    const y = date.getFullYear();
    let m = date.getMonth() + 1;
    m = m < 10 ? `0${ m}` : m;
    let d = date.getDate();
    d = d < 10 ? (`0${ d}`) : d;
    return `${y }-${ m }-${ d}`;
  };
  handleRangeTime = (val) => {
    const startDate = val[0];
    const endDate = val[1];
    logger.debug(startDate);
    logger.debug(endDate);
    this.creatData(startDate, endDate);
    this.initChart();
  };

  handleTimeClick = () => {
    const startDate = this.getBeforeDate(0);
    const endDate = this.getBeforeDate(7);
    this.handleRangeTime([startDate, endDate]);
  }

  getBeforeDate = (n) => {
    const d = new Date();
    let year = d.getFullYear();
    let mon = d.getMonth() + 1;
    let day = d.getDate();
    if (day <= n) {
      if (mon > 1) {
        mon -= 1;
      } else {
        year -= 1;
        mon = 12;
      }
    }
    d.setDate(d.getDate() - n);
    year = d.getFullYear();
    mon = d.getMonth() + 1;
    day = d.getDate();
    const s = `${year }-${ mon < 10 ? (`0${ mon}`) : mon }-${ day < 10 ? (`0${ day}`) : day}`;
    return s;
  }

  initChart = () => {
    warningAnalysis.xAxis[0].data = dateList.reverse();
    warningAnalysis.series[0].data = warningAnalysisList;

    this.loadWarningAnalysisChart();
  };

  render() {
    return (
      <div className={styles.infoAnalysis}>
        <div>
          <div className={styles.titleWrap}>
            <div className={styles.nameTitle}>
              近7天历史告警次数统计
            </div>
          </div>
        </div>
        <div id="warningAnalysis" style={{ width: '100%', height: '280px' }} />
      </div>
    );
  }
}

export default WarningAnalysis;
