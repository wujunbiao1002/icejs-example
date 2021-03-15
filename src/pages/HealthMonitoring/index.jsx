import React from 'react';
import { ResponsiveGrid, Grid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import mock from './mock';
import pressureImg from '../../static/images/u677.png';
import rateImg from '../../static/images/u676.png';
import oxygenImg from '../../static/images/u678.png';
import arrowImg from '../../static/images/u684.png';
import HealthCharts from '@/pages/HealthMonitoring/components/HealthCharts';

const { Cell } = ResponsiveGrid;
const { Row, Col } = Grid;

// eslint-disable-next-line @iceworks/best-practices/recommend-functional-component
class FormGroup extends React.Component {
  state = {
    isShowCharts: false,
    listItem: null,
  };

  handleListItem = (data) => {
    this.setState({
      isShowCharts: true,
      listItem: data,
    });
  }

  handleCloseCharts = (isShowCharts) => {
    this.setState({
      isShowCharts,
    });
  }

  getListData = () => {
    const listData = mock.healthList;
    return (
      <div>
        {
          listData.map((item, index) => (
            <div key={Number(index)} className="listContent">
              <div className="listItem" onClick={() => { this.handleListItem(item); }}>
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

  render() {
    return (
      <div>
        {
          this.state.isShowCharts ? (
            <HealthCharts isShowCharts={this.state.isShowCharts} dataSource={this.state.listItem} closeCharts={this.handleCloseCharts} />
          ) : (
            <ResponsiveGrid gap={20} style={{ margin: '10px', padding: '10px', background: '#fff' }}>
              <Cell colSpan={12}>
                <PageHeader
                  style={{ margin: '0', paddingBottom: '0' }}
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
                <div className="listWrap">
                  {this.getListData()}
                </div>
              </Cell>
            </ResponsiveGrid>
          )
        }
      </div>
    );
  }
}

export default FormGroup;

