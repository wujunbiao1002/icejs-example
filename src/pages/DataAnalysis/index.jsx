import React from 'react';
import { ResponsiveGrid, Grid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import calling from '../../static/images/calling.png';
import rate from '../../static/images/rate.png';
import pressure from '../../static/images/pressure.png';
import oxygen from '../../static/images/oxygen.png';
import dealing from '../../static/images/warning.png';
import handled from '../../static/images/num.png';
import WarningCharts from '@/pages/DataAnalysis/components/WarningCharts';
import Statistics from '@/pages/DataAnalysis/components/Statistics';

const { Cell } = ResponsiveGrid;
const { Row, Col } = Grid;

const FormGroup = () => {
  return (
    <ResponsiveGrid
      gap={20}
    >
      <Cell colSpan={12}>
        <div className="analysis-header">
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
                name: '数据分析',
              },
            ]}
          />
        </div>
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
                  <div className="warning-num">3</div>
                  <div className="warning-title">
                    <img src={rate} alt="img" />
                    <span>心率异常</span>
                  </div>
                </Col>
                <Col span="6">
                  <div className="warning-num">3</div>
                  <div className="warning-title">
                    <img src={pressure} alt="img" />
                    <span>血压异常</span>
                  </div>
                </Col>
                <Col span="6">
                  <div className="warning-num">4</div>
                  <div className="warning-title">
                    <img src={oxygen} alt="img" />
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
                  <div className="warning-num">53</div>
                  <div className="warning-title">
                    <img src={dealing} alt="img" />
                    <span>本月预警数</span>
                  </div>
                </Col>
                <Col span="6">
                  <div className="warning-num">44</div>
                  <div className="warning-title">
                    <img src={handled} alt="img" />
                    <span>本月已处理数</span>
                  </div>
                </Col>
                <Col span="6">
                  <div className="warning-num">181</div>
                  <div className="warning-title">
                    <img src={dealing} alt="img" />
                    <span>本年预警数</span>
                  </div>
                </Col>
                <Col span="6">
                  <div className="warning-num">170</div>
                  <div className="warning-title">
                    <img src={handled} alt="img" />
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
