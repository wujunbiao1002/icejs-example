import React, { useEffect, useState } from 'react';
import {
  Icon,
  DatePicker,
  Button,
  Progress,
} from '@alifd/next';
import styles from './index.module.scss';
import * as echarts from 'echarts';
import { healthPressure, rate } from '@/static/js/echartsHealth';
import { logger } from 'ice';
import moment from 'moment';

moment.locale('zh-cn');
const { RangePicker } = DatePicker;
const heartRateChart = {
  chart: null,
  option: Object.assign({}, rate),
};
const bloodPressureChart = {
  chart: null,
  option: Object.assign({}, houseType),
};

const HealthCharts = (props) => {
  const [startDate, setStartDate] = useState('2021-03-14');
  const [endDate, setEndEndDate] = useState('2021-03-20');

  const { dataSource } = props;
  const resizeCharts = () => {
    bloodPressureChart.chart.resize();
    heartRateChart.chart.resize();
  };

  useEffect(() => {
    loadChart();
    window.addEventListener('resize', resizeCharts);
  }, []);

  const loadChart = () => {
    bloodPressureChart.chart = echarts.init(document.getElementById('pressure'));
    bloodPressureChart.chart.setOption(bloodPressureChart.option);
    // 心率
    heartRateChart.chart = echarts.init(document.getElementById('rate'));
    heartRateChart.chart.setOption(heartRateChart.option);
  };

  const handleBack = () => {
    props.closeCharts(false);
  };

  const showOxygenList = (data) => {
    return (
      <div>
        {
          data.map((item, index) => (
            <div key={Number(index)} className={styles.oxygenItem}>
              <div className={styles.oxygenItemTime}>{item.time}</div>
              <div className={styles.oxygenItemValue}>{item.value}%</div>
            </div>
          ))
        }
      </div>
    );
  };
  const onClickSearch = () => {
    creatData();
    bloodPressureChart.option.xAxis[0].data = ['2021-03-14', '2021-03-15', '2021-03-16', '2021-03-17', '2021-03-18', '2021-03-19', '2021-03-20'];
    bloodPressureChart.option.series[0].data = [108, 432, 90, 555, 84, 888];
    bloodPressureChart.option.series[1].data = [55, 300, 50, 400, 50, 200];

    heartRateChart.option.xAxis[0].data = ['2021-03-14', '2021-03-15', '2021-03-16', '2021-03-17', '2021-03-18', '2021-03-19', '2021-03-20'];
    heartRateChart.option.series[0].data = [108, 432, 90, 555, 84, 888];

    bloodPressureChart.chart.setOption(bloodPressureChart.option);
    heartRateChart.chart.setOption(heartRateChart.option);
  };

  const creatData = () => {
    let _dt1 = new Date(startDate);
    const _dt2 = new Date(endDate);
    const dt1 = _dt1.getTime();
    const dt2 = _dt2.getTime();
    const day = parseInt(Math.abs(dt1 - dt2) / 1000 / 60 / 60 / 24);
    const dateList = [startDate];
    for (let i = 1; i <= day; i++) {
      _dt1 = _dt1.setDate(_dt1.getDate() + 1);
      _dt1 = new Date(_dt1);
      logger.debug(formatDate(_dt1));
      dateList.push(formatDate(_dt1));

    }
  };
  const formatDate = function (date) {
    const y = date.getFullYear();
    let m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    let d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
  };
  const onOkRangePicker = (val) => {
    logger.debug(val[0].format('YYYY-MM-DD'));
    logger.debug(val[1].format('YYYY-MM-DD'));
    setStartDate(val[0].format('YYYY-MM-DD'));
    setEndEndDate(val[1].format('YYYY-MM-DD'));
  };
  return (
    <div>
      <div className={styles.healthContent}>
        <div className={styles.leftContent}>
          <div className={styles.back} onClick={handleBack}>
            <Icon type="arrow-left" />
            <span>返回上级列表</span>
          </div>
          <div>
            <div className={styles.nameTitle}>
              {dataSource.name}
            </div>
            <div className={styles.personInfoWrap}>
              <div className={styles.personInfo}>
                <span className={styles.leftIcon}>
                  <Icon type="account" />
                </span>
                {dataSource.sex}
                <span className={styles.leftLine}>|</span>
                {dataSource.age}
              </div>
              <div className={styles.personInfo}>
                <span className={styles.leftIcon}>
                  <Icon type="atm" />
                </span>
                {dataSource.tel}
              </div>
              <div className={styles.personInfo}>
                <span className={styles.leftIcon}>
                  <Icon type="email" />
                </span>
                {dataSource.room}
              </div>
            </div>
          </div>

          <hr />

          <div className={styles.leftOxygen}>
            <div className={styles.nameTitle}>
              血氧
            </div>
            <div className={styles.oxygenWrap}>
              <div className={styles.oxygenLine}>
                <Progress
                  percent={dataSource.oxygenList[0].value}
                  shape="line"
                  color="#ff9900"
                  backgroundColor={'#82cb5e'}
                />
              </div>
              <div className={styles.oxygenList}>
                {showOxygenList(dataSource.oxygenList)}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.centerGap} />
        <div className={styles.rightContent}>
          <div className={styles.searchWrap}>
            <RangePicker onOk={onOkRangePicker} />
            <Button type="primary" onClick={onClickSearch}>查询</Button>
          </div>

          <div className={styles.rightGap} />

          <div className={styles.pressureCharts}>
            <div className={styles.pressureWrap}>
              <div className={styles.nameTitle}>
                血压
              </div>
              <div
                id="pressure"
                style={{
                  width: '100%',
                  height: '300px',
                }}
              />
            </div>
          </div>

          <div className={styles.rightGap} />

          <div className={styles.rateCharts}>
            <div className={styles.rateWrap}>
              <div className={styles.nameTitle}>
                心率
              </div>
              <div
                id="rate"
                style={{
                  width: '100%',
                  height: '300px',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HealthCharts;
