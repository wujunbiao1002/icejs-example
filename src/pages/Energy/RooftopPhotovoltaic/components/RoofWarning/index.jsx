import React from 'react';
import styles from './index.module.scss';
import * as echarts from 'echarts';
import { warningAnalysis } from '@/static/js/echartsFarmland';
import { logger } from 'ice';
import moment from 'moment';

const currentDate = moment();
let warningAnalysisInit;

let dateList = [];
let warningAnalysisList = [];
const infoList = [
  {
    name: '小岗村铜制品工厂出现电压欠压',
    time: '2021-03-18  12:23:10',
  },
  {
    name: '小岗村小岗中学出现电网过压',
    time: '2021-03-17  10:43:10',
  },
  {
    name: '小岗村铜制品工厂出现电网过频',
    time: '2021-03-16  14:23:44',
  },
  {
    name: '小岗村制衣工厂出现电网过频',
    time: '2021-03-15  10:11:10',
  },
  {
    name: '小岗村铜制品工厂出现出现电压欠压',
    time: '2021-03-14  16:22:11',
  },
];

// eslint-disable-next-line @iceworks/best-practices/recommend-functional-component
class RoofWarning extends React.Component {
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
    const endDate = this.getBeforeDate(6);
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

  disabledDate = function (date, view) {
    switch (view) {
      case 'date':
        return date.valueOf() >= currentDate.valueOf();
      case 'year':
        return date.year() > currentDate.year();
      case 'month':
        return (
          date.year() * 100 + date.month() >
          currentDate.year() * 100 + currentDate.month()
        );
      default:
        return false;
    }
  };

  // 告警信息
  getInfoList = () => {
    return (
      <div>
        {
          infoList.map((item) => (
            <div className={styles.infoItem}>
              <div>{ item.name }</div>
              <div>{ item.time }</div>
            </div>
          ))
        }
      </div>
    );
  }

  render() {
    return (
      <div className="analysis-center">
        <div className="analysis-warning-wrap">
          <div className="analysis-warning">
            <div className={styles.titleWrap}>
              <div className={styles.nameTitle}>
                告警信息
              </div>
            </div>

            <div className={styles.infoWrap}>
              {this.getInfoList()}
            </div>
          </div>
        </div>

        <div className="centerGap" />

        <div className="analysis-warning-wrap">
          <div className="analysis-warning">
            <div className={styles.titleWrap}>
              <div className={styles.nameTitle}>
                近7天历史告警次数统计
              </div>
            </div>
          </div>
          <div id="warningAnalysis" style={{ width: '100%', height: '220px' }} />
        </div>
      </div>
    );
  }
}

export default RoofWarning;
