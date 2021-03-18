import React from 'react';
import styles from './index.module.scss';
import * as echarts from 'echarts';
import { emissionReduction } from '@/static/js/echartsFarmland';
import { logger } from 'ice';

let rateInit;

let dateList = [];
let emissionReductionList = [];
const infoList = [
  {
    name: '小岗村铜制品工厂品工厂出现电压欠压',
    time: '2021-03-12  10:23:10',
  },
  {
    name: '小岗村铜制品工厂出现电压出现电压欠压',
    time: '2021-03-12  10:23:10',
  },
  {
    name: '小岗村铜制品工厂出现村铜制村铜制电压欠压',
    time: '2021-03-12  10:23:10',
  },
  {
    name: '小岗村铜制品工厂工厂出现电压欠压',
    time: '2021-03-12  10:23:10',
  },
  {
    name: '小岗村铜制品工厂出现出现电压欠压',
    time: '2021-03-12  10:23:10',
  },
  {
    name: '小岗村铜制品工厂出现电压欠压',
    time: '2021-03-12  10:23:10',
  },
  {
    name: '小岗村铜制品工厂出现电压欠压',
    time: '2021-03-12  10:23:10',
  },
];

// eslint-disable-next-line @iceworks/best-practices/recommend-functional-component
class WarningInfo extends React.Component {
  state = {
  };

  resizeCharts = () => {
    rateInit.resize();
  }

  componentDidMount() {
    const dom = document.getElementById('emissionReductionOption').querySelector('span');
    this.handleTimeClick('week', dom, 0);
    this.loadRateChart();
    window.addEventListener('resize', this.resizeCharts);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeCharts);
  }

  // 心率
  loadRateChart = () => {
    rateInit = echarts.init(document.getElementById('emissionReduction'));
    rateInit.setOption(emissionReduction);
  }

  creatData = (startDate, endDate, isRange) => {
    let _dt1 = new Date(startDate);
    const _dt2 = new Date(endDate);
    const dt1 = _dt1.getTime();
    const dt2 = _dt2.getTime();
    const day = parseInt(Math.abs(dt1 - dt2) / 1000 / 60 / 60 / 24);
    dateList = [];
    emissionReductionList = [];
    dateList.push(this.formatDate(_dt1));
    emissionReductionList.push(this.getRandom(40, 130));

    // 日期选择框的时间往后+1
    if (isRange) {
      for (let i = 1; i <= day; i++) {
        _dt1 = _dt1.setDate(_dt1.getDate() + 1);
        _dt1 = new Date(_dt1);
        dateList.push(this.formatDate(_dt1));
        emissionReductionList.push(this.getRandom(40, 130));
      }
    } else {
      for (let i = 1; i <= day; i++) {
        _dt1 = _dt1.setDate(_dt1.getDate() - 1);
        _dt1 = new Date(_dt1);
        dateList.push(this.formatDate(_dt1));
        emissionReductionList.push(this.getRandom(40, 130));
      }
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
  handleRangeTime = (val, isRange = true) => {
    const startDate = val[0];
    const endDate = val[1];
    logger.debug(startDate);
    logger.debug(endDate);
    if (isRange) {
      this.creatData(startDate, endDate, isRange);
    } else {
      this.creatData(startDate, endDate, false);
    }
    this.initChart(isRange);
  };

  handleTimeClick = (option, e, time) => {
    const dom = document.getElementById('emissionReductionOption').querySelectorAll('span');
    dom.forEach((item) => {
      item.style.color = '#999';
      item.classList.remove('notClick');
    });
    // dom.style.color = 'green';
    logger.debug('dom', e.target);
    if (time === 0) {
      e.style.color = '#434343';
      e.setAttribute('class', 'notClick');
    } else {
      e.target.style.color = '#434343';
      e.target.setAttribute('class', 'notClick');
    }

    let startDate;
    let endDate;
    if (option === 'week') {
      startDate = this.getBeforeDate(0);
      endDate = this.getBeforeDate(7);
    } else if (option === 'month') {
      startDate = this.getBeforeDate(0);
      endDate = this.getBeforeDate(30);
    } else if (option === 'year') {
      startDate = this.getBeforeDate(0);
      endDate = this.getBeforeDate(365);
    }
    this.handleRangeTime([startDate, endDate], false);
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

  initChart = (isRange) => {
    if (isRange) {
      emissionReduction.xAxis.data = dateList;
    } else {
      emissionReduction.xAxis.data = dateList.reverse();
    }
    emissionReduction.series[0].data = emissionReductionList;

    this.loadRateChart();
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
                CO2减排量（KG）
              </div>
              <div className={styles.search} id="emissionReductionOption">
                <span onClick={(e) => { this.handleTimeClick('week', e, 1); }}>近一周</span>
                <span onClick={(e) => { this.handleTimeClick('month', e, 1); }}>近一月</span>
                <span onClick={(e) => { this.handleTimeClick('year', e, 1); }}>近一年</span>
              </div>
            </div>
          </div>
          <div id="emissionReduction" style={{ width: '100%', height: '220px' }} />
        </div>

        <div className="centerGap" />

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
      </div>
    );
  }
}

export default WarningInfo;
