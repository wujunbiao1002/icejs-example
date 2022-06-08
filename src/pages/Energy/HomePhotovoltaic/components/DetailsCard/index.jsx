import React, { useEffect, useState } from 'react';
import { listPageData } from '../services/api';
import { Pagination, Balloon, Search, ResponsiveGrid, Card } from '@alifd/next';
import styles from '@/pages/Energy/HomePhotovoltaic/components/DetailsCard/index.module.scss';
import warning2 from '@/static/images/warning2.png';
import location from '@/static/images/location.png';
import Img from '@icedesign/img';

const { Cell } = ResponsiveGrid;

const DetailsCard = () => {
  const [dataSource, setDataSource] = useState({
    data: [],
    pageSize: 9,
    current: 1,
    total: 0,
  });

  useEffect(() => {
    setDataSource(listPageData(1, 9, ''));
  }, []);

  const handlePageChange = (value) => {
    setDataSource(listPageData(value, 9, ''));
  };
  const search = (value) => {
    setDataSource(listPageData(1, 9, value));
  };
  const leftTop = <Img src={warning2} height={15} />;
  const getCardList = () => {
    return dataSource.data.map((item) => {
      return (<Cell colSpan={4} className={styles.cardWarp}>
        <Card free>
          <Card.Actions className={styles.titleBg}>
            {
              item.warningTime && item.warningInfo ? (

                <p style={{ float: 'right' }}>
                  <Balloon trigger={leftTop} align="br" alignEdge triggerType="click" popupClassName={styles.popupBg}>
                    <div>
                      <p style={{ textAlign: 'center' }}>告警信息：</p>
                      <div className={styles.warningTime}>
                        {item.warningTime}
                      </div>
                      <div className={styles.warningInfo}>
                        {item.warningInfo}
                      </div>
                    </div>
                  </Balloon>
                </p>
              ) : (
                <div />
              )
            }
            <div className={styles.cardHouseIamge} >
              <p style={{ fontSize: 18 }}>{item.name}</p>
            </div>
            <p style={{ fontSize: 14 }}><Img src={location} height={14} style={{ marginRight: 5 }} />{item.address}</p>
          </Card.Actions>
          <Card.Content>
            <p className={styles.cardContent} style={{ marginTop: 0 }}>日发电量<span className={styles.spanRight}>{item.dailyOutput}</span></p>
            <p className={styles.cardContent}>总发电量<span className={styles.spanRight}>{item.grossGeneration}</span></p>
            <p className={styles.cardContent}>额定输出功率<span className={styles.spanRight}>{item.outputRating}</span></p>
            <p className={styles.cardContent}>总运行时间<span className={styles.spanRight}>{item.totalRunningTime}</span></p>
            <p className={styles.cardContent}>机内空气温度<span className={styles.spanRight}>{item.temperature}&#8451;</span></p>
            <p className={styles.cardContent}>电表功率<span className={styles.spanRight}>{item.powerMeter}</span></p>
          </Card.Content>
          <Card.Divider inset />
          <Card.Actions>
            <p className={styles.cardContent}>
              <span style={{ color: '#666666' }}>设备状态：<span className={styles.workStatus}>{item.workStatus}</span></span>
              <span style={{
                float: 'right',
                color: '#666666',
              }}
              >工作状态：<span className={styles.deviceStatus}>{item.deviceStatus}</span>
              </span>
            </p>
          </Card.Actions>
        </Card>
      </Cell>);
    });
  };
  return (
    <div>
      <ResponsiveGrid device="desktop">
        <Cell colSpan={12}>
          <div className={styles.searchWrap}>
            <Search type="primary" placeholder="请输入名称/地址" onSearch={search} className={styles.search} />
          </div>
        </Cell>

        <Cell colSpan={12}>
          <ResponsiveGrid device="desktop" gap={20}>
            {getCardList()}
          </ResponsiveGrid>
        </Cell>
        <Cell className={styles.paginationWrap} colSpan={12}>
          <Pagination
            total={dataSource.total}
            pageSize={9}
            onChange={handlePageChange}
          />
        </Cell>
      </ResponsiveGrid>
    </div>
  );
};
export default DetailsCard;
