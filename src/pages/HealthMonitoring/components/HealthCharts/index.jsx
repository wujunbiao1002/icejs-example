import React from 'react';
import {
  Icon,
  DatePicker,
  Button,
  Progress,
} from '@alifd/next';
import styles from './index.module.scss';
import echarts from 'echarts';
import { houseType, rate } from '@/static/js/echartsHealth';

const { RangePicker } = DatePicker;
let housePropertyInit;
let rateInit;

// eslint-disable-next-line @iceworks/best-practices/recommend-functional-component
class HealthCharts extends React.Component {
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
    housePropertyInit = echarts.init(document.getElementById('pressure'));
    housePropertyInit.setOption(houseType);
    // 心率
    rateInit = echarts.init(document.getElementById('rate'));
    rateInit.setOption(rate);
  }

  handleBack = () => {
    this.props.closeCharts(false);
  }

  showOxygenList = (data) => {
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
  }

  render() {
    const { dataSource } = this.props;
    return (
      <div>
        <div className={styles.healthContent}>
          <div className={styles.leftContent}>
            <div className={styles.back} onClick={this.handleBack}>
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
                    percent={98}
                    shape="line"
                    color="#ff9900"
                    backgroundColor={'#82cb5e'}
                  />
                </div>
                <div className={styles.oxygenList}>
                  {this.showOxygenList(dataSource.oxygenList)}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.centerGap} />
          <div className={styles.rightContent}>
            <div className={styles.searchWrap}>
              <RangePicker />
              <Button type="primary">查询</Button>
            </div>

            <div className={styles.rightGap} />

            <div className={styles.pressureCharts}>
              <div className={styles.pressureWrap}>
                <div className={styles.nameTitle}>
                  血压
                </div>
                <div id="pressure" style={{ width: '100%', height: '450px' }} />
              </div>
            </div>

            <div className={styles.rightGap} />

            <div className={styles.rateCharts}>
              <div className={styles.rateWrap}>
                <div className={styles.nameTitle}>
                  心率
                </div>
                <div id="rate" style={{ width: '100%', height: '450px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HealthCharts;
