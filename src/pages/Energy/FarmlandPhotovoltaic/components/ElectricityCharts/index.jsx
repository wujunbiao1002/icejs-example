import React from 'react';
import styles from './index.module.scss';
import * as echarts from 'echarts';
import { generatingCapacity, farmlandElectricityPower } from '@/static/js/echartsFarmland';
import { logger } from 'ice';
import { DatePicker } from '@alifd/next';

const { RangePicker } = DatePicker;
let rateInit;
let generatingCapacityInit;

let dateList = [];
let bloodPressureList = [];
let callingList = [];
let oxygenList = [];
let rateList = [];

// eslint-disable-next-line @iceworks/best-practices/recommend-functional-component
class ElectricityCharts extends React.Component {
  state = {
  };

  resizeCharts = () => {
    rateInit.resize();
    generatingCapacityInit.resize();
  }

  componentDidMount() {
    const dom = document.getElementById('search').querySelector('span');
    this.handleTimeClick('week', dom, 0);
    this.loadRateChart();
    this.loadGeneratingCapacityChart();
    window.addEventListener('resize', this.resizeCharts);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeCharts);
  }

  // 发电功率
  loadRateChart = () => {
    rateInit = echarts.init(document.getElementById('electricityCapacity'));
    rateInit.setOption(farmlandElectricityPower);
  }

  // 发电量
  loadGeneratingCapacityChart = () => {
    generatingCapacityInit = echarts.init(document.getElementById('productionCapacity'));
    generatingCapacityInit.setOption(generatingCapacity);
  }

  creatData = (startDate, endDate, isRange) => {
    let _dt1 = new Date(startDate);
    const _dt2 = new Date(endDate);
    const dt1 = _dt1.getTime();
    const dt2 = _dt2.getTime();
    const day = parseInt(Math.abs(dt1 - dt2) / 1000 / 60 / 60 / 24);
    dateList = [];
    bloodPressureList = [];
    callingList = [];
    oxygenList = [];
    rateList = [];
    dateList.push(this.formatDate(_dt1));
    bloodPressureList.push(this.getRandom(3, 5));
    callingList.push(this.getRandom(5, 8));
    oxygenList.push(this.getRandom(4, 6));
    rateList.push(this.getRandom(1, 3));

    // 日期选择框的时间往后+1
    if (isRange) {
      for (let i = 1; i <= day; i++) {
        _dt1 = _dt1.setDate(_dt1.getDate() + 1);
        _dt1 = new Date(_dt1);
        dateList.push(this.formatDate(_dt1));
        bloodPressureList.push(this.getRandom(3, 5));
        callingList.push(this.getRandom(5, 8));
        oxygenList.push(this.getRandom(4, 6));
        rateList.push(this.getRandom(1, 3));
      }
    } else {
      for (let i = 1; i <= day; i++) {
        _dt1 = _dt1.setDate(_dt1.getDate() - 1);
        _dt1 = new Date(_dt1);
        dateList.push(this.formatDate(_dt1));
        bloodPressureList.push(this.getRandom(3, 5));
        callingList.push(this.getRandom(5, 8));
        oxygenList.push(this.getRandom(4, 6));
        rateList.push(this.getRandom(1, 3));
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
    const dom = document.getElementById('search').querySelectorAll('span');
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
      farmlandElectricityPower.xAxis[0].data = dateList;
    } else {
      farmlandElectricityPower.xAxis[0].data = dateList.reverse();
    }
    farmlandElectricityPower.series[0].data = callingList;

    this.loadRateChart();
  };

  render() {
    return (
      <div className="analysis-center">
        <div className="analysis-warning-wrap">
          <div className="analysis-warning">
            <div className={styles.titleWrap}>
              <div className={styles.nameTitle}>
                发电量（KWH）
              </div>
            </div>
            <div className={styles.leftSearch} id="searchOutput">
              <span onClick={(e) => { this.handleTimeClick('week', e, 1); }}>近一周</span>
              <span onClick={(e) => { this.handleTimeClick('month', e, 1); }}>近一月</span>
              <span onClick={(e) => { this.handleTimeClick('year', e, 1); }}>近一年</span>
              <div className={styles.rangePadding}>
                <RangePicker disabledDate={this.disabledDate} onOk={this.handleRangeTime} />
              </div>
            </div>
          </div>
          <div id="productionCapacity" style={{ width: '100%', height: '220px' }} />
        </div>

        <div className="centerGap" />

        <div className="analysis-warning-wrap">
          <div className="analysis-warning">
            <div className={styles.titleWrap}>
              <div className={styles.nameTitle}>
                发电功率（KW）
              </div>
              <div className={styles.search} id="search">
                <span onClick={(e) => { this.handleTimeClick('week', e, 1); }}>近一周</span>
                <span onClick={(e) => { this.handleTimeClick('month', e, 1); }}>近一月</span>
                <span onClick={(e) => { this.handleTimeClick('year', e, 1); }}>近一年</span>
              </div>
            </div>
          </div>
          <div id="electricityCapacity" style={{ width: '100%', height: '280px' }} />
        </div>
      </div>
    );
  }
}

export default ElectricityCharts;
