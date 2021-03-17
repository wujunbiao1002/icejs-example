import React, { useEffect, useState } from 'react';
import { ResponsiveGrid, Grid, Pagination, Search } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import pressureImg from '../../../static/images/u677.png';
import rateImg from '../../../static/images/u676.png';
import oxygenImg from '../../../static/images/u678.png';
import arrowImg from '../../../static/images/u684.png';
import HealthCharts from '@/pages/Alarm/HealthMonitoring/components/HealthCharts';
import { logger } from 'ice';
import styles from './index.module.scss';
import { listPageData } from './services/api';

const { Cell } = ResponsiveGrid;
const {
  Row,
  Col,
} = Grid;

const HealthMonitoring = () => {
  const [isShowCharts, setIsShowCharts] = useState(false);
  const [listItem, setListItem] = useState(null);
  const [dataSource, setDataSource] = useState({
    data: [],
    pageSize: 10,
    current: 1,
    total: 0,
  });
  const [keyword, setKeyword] = useState();

  const handleListItem = (data) => {
    setIsShowCharts(true);
    setListItem(data);
  };

  useEffect(() => {
    setDataSource(listPageData(1, 10, ''));
  }, []);

  const handleCloseCharts = (value) => {
    setIsShowCharts(value);
  };
  const handlePageChange = (value) => {
    setDataSource(listPageData(value, 10, ''));
  };
  const search = (value) => {
    logger.debug(value);
    setKeyword(value);
    setDataSource(listPageData(1, 10, value));
  };
  const getListData = () => {
    return (
      <div>
        {
          dataSource.data.map((item, index) => (
            <div key={Number(index)} className="listContent">
              <div
                className="listItem"
                onClick={() => {
                  handleListItem(item);
                }}
              >
                <Row>
                  <Col span="3">
                    <div>{item.name}</div>
                  </Col>
                  <Col span="5">
                    <div>房间: {item.room}</div>
                  </Col>
                  <Col span="5">
                    <div className="listName">
                      <img src={pressureImg} alt="血压" />
                      <span className="healthName">血压</span>
                      <span className="healthNum">
                        {item.pressure}
                      </span>
                      mmHg
                    </div>
                  </Col>
                  <Col span="5">
                    <div className="listName">
                      <img src={rateImg} alt="心率" />
                      <span className="healthName">心率</span>
                      <span className="healthNum">
                        {item.rate}
                      </span>
                      次/min
                    </div>
                  </Col>
                  <Col span="5">
                    <div className="listName">
                      <img src={oxygenImg} alt="血氧" />
                      <span className="healthName">血氧</span>
                      <span className="healthNum">
                        {item.oxygen}
                      </span>
                      %
                    </div>
                  </Col>
                  <Col span="1">
                    <img className="imgRotate" src={arrowImg} alt="arrow" />
                  </Col>
                </Row>
              </div>
            </div>
          ))
        }
      </div>
    );
  };

  return (
    <div>
      {
        isShowCharts ? (
          <HealthCharts isShowCharts={isShowCharts} dataSource={listItem} closeCharts={handleCloseCharts} />
        ) : (
          <ResponsiveGrid
            gap={20}
            style={{
              margin: '10px',
              padding: '10px',
              background: '#fff',
            }}
          >
            <Cell colSpan={12}>
              <PageHeader
                style={{
                  margin: '0',
                  paddingBottom: '0',
                }}
                breadcrumbs={[
                  {
                    name: '系统首页',
                  },
                  {
                    name: '健康监控',
                  },
                ]}
              />
            </Cell>
            <Cell colSpan={12}>
              <div className={styles.searchWrap}>
                <Search type="primary" placeholder="请输入姓名" defaultValue={keyword} onSearch={search} className={styles.search}/>
              </div>
            </Cell>
            <Cell colSpan={12}>
              <div className="listWrap">
                {getListData()}
              </div>
              <div className={styles.paginationWrap}>
                <Pagination
                  total={dataSource.total}
                  pageSize={10}
                  onChange={handlePageChange}
                />
              </div>
            </Cell>
          </ResponsiveGrid>
        )
      }
    </div>
  );
};

export default HealthMonitoring;

