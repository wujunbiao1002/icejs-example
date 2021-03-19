import React from 'react';
import PageHeader from '@/components/PageHeader';
import { ResponsiveGrid } from '@alifd/next';
import FarmlandTop from '@/pages/Energy/SurfacePhotovoltaic/components/farmlandTop';
import outputImg from '@/static/images/output.png';
import ElectricityCharts from '@/pages/Energy/SurfacePhotovoltaic/components/ElectricityCharts';
import WarningInfo from '@/pages/Energy/SurfacePhotovoltaic/components/WarningInfo';
import WarningAnalysis from '@/pages/Energy/SurfacePhotovoltaic/components/WarningAnalysis';
import modalImg from '@/static/images/modalImg.png';
import COImg from '@/static/images/COImg.png';
import lightingImg from '@/static/images/lightingImg.png';
import outputPower from '@/static/images/ouputPower.png';

const { Cell } = ResponsiveGrid;

const SurfacePhotovoltaic = () => {
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
                name: '水面光伏',
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
                    38.18w
                  </div>
                </div>
              </div>

              <div className="farmland-center-content-item">
                <div className="farmland-center-content-item-img">
                  <img src={outputImg} alt="output" />
                </div>
                <div className="farmland-center-content-item-des">
                  <div className="farmland-center-content-item-des-title">
                    输出总无功绝对值
                  </div>
                  <div className="farmland-center-content-item-des-num">
                    10.11kw
                  </div>
                </div>
              </div>

              <div className="farmland-center-content-item">
                <div className="farmland-center-content-item-img">
                  <img src={modalImg} alt="output" />
                </div>
                <div className="farmland-center-content-item-des">
                  <div className="farmland-center-content-item-des-title">
                    模块1: IGBT温度
                  </div>
                  <div className="farmland-center-content-item-des-num">
                    27.2℃
                  </div>
                </div>
              </div>

              <div className="farmland-center-content-item">
                <div className="farmland-center-content-item-img">
                  <img src={COImg} alt="output" />
                </div>
                <div className="farmland-center-content-item-des">
                  <div className="farmland-center-content-item-des-title">
                    当日CO2减排量
                  </div>
                  <div className="farmland-center-content-item-des-num">
                    0.121kg
                  </div>
                </div>
              </div>

            </div>


            <div className="farmland-center-content">
              <div className="farmland-center-content-item">
                <div className="farmland-center-content-item-img">
                  <img src={lightingImg} alt="output" />
                </div>
                <div className="farmland-center-content-item-des">
                  <div className="farmland-center-content-item-des-title">
                    1MW当日发电量
                  </div>
                  <div className="farmland-center-content-item-des-num">
                    15kwh
                  </div>
                </div>
              </div>

              <div className="farmland-center-content-item">
                <div className="farmland-center-content-item-img">
                  <img src={outputPower} alt="output" />
                </div>
                <div className="farmland-center-content-item-des">
                  <div className="farmland-center-content-item-des-title">
                    输出功率因数
                  </div>
                  <div className="farmland-center-content-item-des-num">
                    2.00
                  </div>
                </div>
              </div>

              <div className="farmland-center-content-item">
                <div className="farmland-center-content-item-img">
                  <img src={modalImg} alt="output" />
                </div>
                <div className="farmland-center-content-item-des">
                  <div className="farmland-center-content-item-des-title">
                    模块2: IGBT温度
                  </div>
                  <div className="farmland-center-content-item-des-num">
                    24.3℃
                  </div>
                </div>
              </div>

              <div className="farmland-center-content-item">
                <div className="farmland-center-content-item-img">
                  <img src={COImg} alt="output" />
                </div>
                <div className="farmland-center-content-item-des">
                  <div className="farmland-center-content-item-des-title">
                    总CO2减排量
                  </div>
                  <div className="farmland-center-content-item-des-num">
                    0.253kg
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
SurfacePhotovoltaic.pageConfig = {
  auth: ['admin'],
};
export default SurfacePhotovoltaic;
