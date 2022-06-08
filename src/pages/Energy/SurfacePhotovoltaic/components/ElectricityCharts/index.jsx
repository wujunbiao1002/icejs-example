import React from 'react';
import styles from './index.module.scss';
import * as echarts from 'echarts';
import { generatingCapacity, farmlandElectricityPower } from '@/static/js/echartsFarmland';
import { logger } from 'ice';
import { DatePicker } from '@alifd/next';import moment from 'moment';

const currentDate = moment();
const { RangePicker } = DatePicker;
let rateInit;
let generatingCapacityInit;

let dateList = [];
// 发电量
let generatingCapacityList = [];
// 发电功率
let farmlandElectricityList = [];

// eslint-disable-next-line @iceworks/best-practices/recommend-functional-component
class ElectricityCharts extends React.Component {
  state = {};

  resizeCharts = () => {
    rateInit.resize();
    generatingCapacityInit.resize();
  };

  componentDidMount() {
    // 发电量
    const dom = document.getElementById('searchOutput')
      .querySelector('span');
    this.handleTimeClick('week', dom, 0, false);
    // 发电功率
    const isPowerDom = document.getElementById('search')
      .querySelector('span');
    this.handleTimeClick('week', isPowerDom, 0, true);
    this.loadElectricityCapacityChart();
    this.loadGeneratingCapacityChart();
    window.addEventListener('resize', this.resizeCharts);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeCharts);
  }

  // 发电功率
  loadElectricityCapacityChart = () => {
    rateInit = echarts.init(document.getElementById('electricityCapacity'));
    rateInit.setOption(farmlandElectricityPower);
  };

  // 发电量
  loadGeneratingCapacityChart = () => {
    generatingCapacityInit = echarts.init(document.getElementById('productionCapacity'));
    generatingCapacityInit.setOption(generatingCapacity);
  };

  creatData = (startDate, endDate, isRange, isYear, minValue, maxValue) => {
    let day;
    let _dt1 = new Date(startDate);
    const _dt2 = new Date(endDate);
    const dt1 = _dt1.getTime();
    const dt2 = _dt2.getTime();
    day = parseInt(Math.abs(dt1 - dt2) / 1000 / 60 / 60 / 24);
    dateList = [];
    generatingCapacityList = [];
    farmlandElectricityList = [];

    if (isYear) {
      dateList = startDate;
      day = startDate.length;
    } else {
      dateList.push(this.formatDate(_dt1));
    }
    generatingCapacityList.push(this.getRandom(minValue, maxValue));
    farmlandElectricityList.push(this.getRandom(minValue, maxValue));

    // 日期选择框的时间往后+1
    if (isRange) {
      for (let i = 1; i <= day; i++) {
        _dt1 = _dt1.setDate(_dt1.getDate() + 1);
        _dt1 = new Date(_dt1);
        dateList.push(this.formatDate(_dt1));
        generatingCapacityList.push(this.getRandom(minValue, maxValue));
        farmlandElectricityList.push(this.getRandom(minValue, maxValue));
      }
    } else {
      for (let i = 1; i <= day; i++) {
        _dt1 = _dt1.setDate(_dt1.getDate() - 1);
        _dt1 = new Date(_dt1);
        if (!isYear) {
          dateList.push(this.formatDate(_dt1));
        }
        generatingCapacityList.push(this.getRandom(minValue, maxValue));
        farmlandElectricityList.push(this.getRandom(minValue, maxValue));
      }
    }
  };
  getRandom = (n, m) => {
    return Math.floor(Math.random() * (m - n + 1) + n);
  };
  formatDate = (date) => {
    const y = date.getFullYear();
    let m = date.getMonth() + 1;
    m = m < 10 ? `0${m}` : m;
    let d = date.getDate();
    d = d < 10 ? (`0${d}`) : d;
    return `${y}-${m}-${d}`;
  };
  handleRangeTime = (val, isRange = true, isPower = false, isYear, minValue = 50, maxValue = 100) => {
    const startDate = val[0];
    const endDate = val[1];
    logger.debug(startDate);
    logger.debug(endDate);
    if (isRange) {
      this.creatData(startDate, endDate, isRange, isYear, minValue, maxValue);
    } else {
      this.creatData(startDate, endDate, false, isYear, minValue, maxValue);
    }
    this.initChart(isRange, isPower);
  };

  /**
   * option 判断是近一周或近一月或近一年
   * e 传回当前的dom节点 设置不允许再点击和颜色变灰
   * time 次数，第一次渲染时为0，点击的都是1
   * isPower 判断是否是发电功率
   * @param option
   * @param e
   * @param time
   * @param isPower
   */
  handleTimeClick = (option, e, time, isPower) => {
    if (isPower) {
      const dom = document.getElementById('search')
        .querySelectorAll('span');
      dom.forEach((item) => {
        item.style.color = '#999';
        item.classList.remove('notClick');
      });
      logger.debug('dom', e.target);
    } else {
      const dom = document.getElementById('searchOutput')
        .querySelectorAll('span');
      dom.forEach((item) => {
        item.style.color = '#999';
        item.classList.remove('notClick');
      });
      logger.debug('dom', e.target);
    }
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
      endDate = this.getBeforeDate(6);
    } else if (option === 'month') {
      startDate = this.getBeforeDate(0);
      endDate = this.getBeforeDate(29);
    } else if (option === 'year') {
      startDate = this.getBeforeYear();
      endDate = '';
    }
    logger.debug('startDate', startDate, endDate);
    if (isPower) {
      if (option === 'year') {
        this.handleRangeTime([startDate, endDate], false, true, true, 1500, 4500);
      } else {
        this.handleRangeTime([startDate, endDate], false, true, false, 50, 150);
      }
    } else if (option === 'year') {
      this.handleRangeTime([startDate, endDate], false, false, true, 1650, 3000);
    } else {
      this.handleRangeTime([startDate, endDate], false, false, false, 55, 100);
    }
  };

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
    const s = `${year}-${mon < 10 ? (`0${mon}`) : mon}-${day < 10 ? (`0${day}`) : day}`;
    return s;
  };

  getBeforeYear = () => {
    const dataArr = [];
    const data = new Date();
    const year = data.getFullYear();
    // 获取到当前月份,设置月份
    data.setMonth(data.getMonth() + 1, 1);
    for (let i = 0; i < 12; i++) {
      // 每次循环一次 月份值减1
      data.setMonth(data.getMonth() - 1);
      let m = data.getMonth() + 1;
      m = m < 10 ? `0${ m}` : m;
      dataArr.push(`${data.getFullYear() }-${ m}`);
    }
    logger.debug('dataArr', dataArr);
    return dataArr;
  };

  /**
   * isRange 判断是否是日期选择框，日期选择框的数据不需要reverse
   * isPower判断是否是发电功率的图表
   * @param isRange
   * @param isPower
   */
  initChart = (isRange, isPower) => {
    if (isPower) {
      // 发电功率
      if (isRange) {
        farmlandElectricityPower.xAxis[0].data = dateList;
      } else {
        farmlandElectricityPower.xAxis[0].data = dateList.reverse();
      }
      farmlandElectricityPower.series[0].data = farmlandElectricityList;
      this.loadElectricityCapacityChart();
    } else {
      // 发电量
      generatingCapacity.xAxis[0].data = dateList.reverse();
      generatingCapacity.series[0].data = generatingCapacityList;

      this.loadGeneratingCapacityChart();
    }
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
              <span onClick={(e) => {
                this.handleTimeClick('week', e, 1, false);
              }}
              >近一周
              </span>
              <span onClick={(e) => {
                this.handleTimeClick('month', e, 1, false);
              }}
              >近一月
              </span>
              <span onClick={(e) => {
                this.handleTimeClick('year', e, 1, false);
              }}
              >近一年
              </span>
              <div className={styles.rangePadding}>
                <RangePicker disabledDate={this.disabledDate} onOk={this.handleRangeTime} />
              </div>
            </div>
          </div>
          <div
            id="productionCapacity"
            style={{
              width: '100%',
              height: '220px',
            }}
          />
        </div>

        <div className="centerGap" />

        <div className="analysis-warning-wrap">
          <div className="analysis-warning">
            <div className={styles.titleWrap}>
              <div className={styles.nameTitle}>
                发电功率（KW）
              </div>
              <div className={styles.search} id="search">
                <span onClick={(e) => {
                  this.handleTimeClick('week', e, 1, true);
                }}
                >近一周
                </span>
                <span onClick={(e) => {
                  this.handleTimeClick('month', e, 1, true);
                }}
                >近一月
                </span>
                <span onClick={(e) => {
                  this.handleTimeClick('year', e, 1, true);
                }}
                >近一年
                </span>
              </div>
            </div>
          </div>
          <div
            id="electricityCapacity"
            style={{
              width: '100%',
              height: '280px',
            }}
          />
        </div>
      </div>
    );
  }
}

export default ElectricityCharts;
