import React from 'react';
import PageHeader from '@/components/PageHeader';
import { ResponsiveGrid } from '@alifd/next';
import FarmlandTop from '@/pages/Energy/FarmlandPhotovoltaic/components/farmlandTop';
import outputImg from '../../../static/images/output.png';
import ElectricityCharts from '@/pages/Energy/FarmlandPhotovoltaic/components/ElectricityCharts';
import WarningInfo from '@/pages/Energy/FarmlandPhotovoltaic/components/WarningInfo';
import WarningAnalysis from '@/pages/Energy/FarmlandPhotovoltaic/components/WarningAnalysis';
import ChargingPile from '@/pages/Energy/ChargingPile';

const { Cell } = ResponsiveGrid;

const FarmlandPhotovoltaic = () => {
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
                name: '农田光伏',
              },
            ]}
          />
        </div>
      </Cell>

      <Cell colSpan={12}>
        <FarmlandTop />

        <div className="levelGap" />

        <div>
          <div>
            <div className="farmland-center-content top-border-bottom">
              <div className="farmland-center-content-item">
                <div className="farmland-center-content-item-img">
                  <img src={outputImg} alt="output" />
                </div>
                <div className="farmland-center-content-item-des">
                  <div className="farmland-center-content-item-des-title">
                    输出总有功
                  </div>
                  <div className="farmland-center-content-item-des-num">
                    31.35kw
                  </div>
                </div>
              </div>

              <div className="farmland-center-content-item">
                <div className="farmland-center-content-item-img">
                  <img src={outputImg} alt="output" />
                </div>
                <div className="farmland-center-content-item-des">
                  <div className="farmland-center-content-item-des-title">
                    输出总有功
                  </div>
                  <div className="farmland-center-content-item-des-num">
                    31.35kw
                  </div>
                </div>
              </div>

              <div className="farmland-center-content-item">
                <div className="farmland-center-content-item-img">
                  <img src={outputImg} alt="output" />
                </div>
                <div className="farmland-center-content-item-des">
                  <div className="farmland-center-content-item-des-title">
                    输出总有功
                  </div>
                  <div className="farmland-center-content-item-des-num">
                    31.35kw
                  </div>
                </div>
              </div>

              <div className="farmland-center-content-item">
                <div className="farmland-center-content-item-img">
                  <img src={outputImg} alt="output" />
                </div>
                <div className="farmland-center-content-item-des">
                  <div className="farmland-center-content-item-des-title">
                    输出总有功
                  </div>
                  <div className="farmland-center-content-item-des-num">
                    31.35kw
                  </div>
                </div>
              </div>

            </div>


            <div className="farmland-center-content">
              <div className="farmland-center-content-item">
                <div className="farmland-center-content-item-img">
                  <img src={outputImg} alt="output" />
                </div>
                <div className="farmland-center-content-item-des">
                  <div className="farmland-center-content-item-des-title">
                    输出总有功
                  </div>
                  <div className="farmland-center-content-item-des-num">
                    31.35kw
                  </div>
                </div>
              </div>

              <div className="farmland-center-content-item">
                <div className="farmland-center-content-item-img">
                  <img src={outputImg} alt="output" />
                </div>
                <div className="farmland-center-content-item-des">
                  <div className="farmland-center-content-item-des-title">
                    输出总有功
                  </div>
                  <div className="farmland-center-content-item-des-num">
                    31.35kw
                  </div>
                </div>
              </div>

              <div className="farmland-center-content-item">
                <div className="farmland-center-content-item-img">
                  <img src={outputImg} alt="output" />
                </div>
                <div className="farmland-center-content-item-des">
                  <div className="farmland-center-content-item-des-title">
                    输出总有功
                  </div>
                  <div className="farmland-center-content-item-des-num">
                    31.35kw
                  </div>
                </div>
              </div>

              <div className="farmland-center-content-item">
                <div className="farmland-center-content-item-img">
                  <img src={outputImg} alt="output" />
                </div>
                <div className="farmland-center-content-item-des">
                  <div className="farmland-center-content-item-des-title">
                    输出总有功
                  </div>
                  <div className="farmland-center-content-item-des-num">
                    31.35kw
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <ElectricityCharts />

        <WarningInfo />

        <WarningAnalysis />
      </Cell>
    </ResponsiveGrid>
  );
};
FarmlandPhotovoltaic.pageConfig = {
  auth: ['admin'],
};
export default FarmlandPhotovoltaic;
