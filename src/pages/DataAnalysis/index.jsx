import React from 'react';
import { ResponsiveGrid, Grid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import calling from '../../static/images/u97.png';
import dealing from '../../static/images/u99.png';
import WarningCharts from '@/pages/DataAnalysis/components/WarningCharts';
import Statistics from '@/pages/DataAnalysis/components/Statistics';

const { Cell } = ResponsiveGrid;
const { Row, Col } = Grid;

const FormGroup = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <PageHeader
          // title=""
          // description=""
          breadcrumbs={[
            {
              name: '系统首页',
            },
            {
              name: '数据分析',
            },
          ]}
        />
      </Cell>

      <Cell colSpan={12}>
        <div>
          <div className="analysis-top">
            <div className="analysis-warning-wrap">
              <div className="analysis-warning">
                <div className="analysis-title">待处理预警</div>
              </div>
              <Row>
                <Col span="6">
                  <div className="warning-num">1</div>
                  <div className="warning-title">
                    <img src={calling} alt="img" />
                    <span>紧急呼叫</span>
                  </div>
                </Col>
                <Col span="6">
                  <div className="warning-num">23</div>
                  <div className="warning-title">
                    <img src={calling} alt="img" />
                    <span>心率异常</span>
                  </div>
                </Col>
                <Col span="6">
                  <div className="warning-num">14</div>
                  <div className="warning-title">
                    <img src={calling} alt="img" />
                    <span>血压异常</span>
                  </div>
                </Col>
                <Col span="6">
                  <div className="warning-num">11</div>
                  <div className="warning-title">
                    <img src={calling} alt="img" />
                    <span>血氧异常</span>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="centerGap" />

            {/* 概况 */}
            <div className="analysis-warning-wrap">
              <div className="analysis-warning">
                <div className="analysis-title">概况</div>
              </div>
              <Row>
                <Col span="6">
                  <div className="warning-num">10</div>
                  <div className="warning-title">
                    <img src={dealing} alt="img" />
                    <span>本月预警数</span>
                  </div>
                </Col>
                <Col span="6">
                  <div className="warning-num">9</div>
                  <div className="warning-title">
                    <img src={dealing} alt="img" />
                    <span>本月已处理数</span>
                  </div>
                </Col>
                <Col span="6">
                  <div className="warning-num">200</div>
                  <div className="warning-title">
                    <img src={dealing} alt="img" />
                    <span>本年预警数</span>
                  </div>
                </Col>
                <Col span="6">
                  <div className="warning-num">170</div>
                  <div className="warning-title">
                    <img src={dealing} alt="img" />
                    <span>本年已处理数</span>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          <div>
            <WarningCharts />
          </div>

          <div>
            <Statistics />
          </div>
        </div>
      </Cell>
    </ResponsiveGrid>
  );
};

export default FormGroup;
