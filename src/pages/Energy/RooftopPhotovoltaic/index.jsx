import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { ResponsiveGrid, Nav } from '@alifd/next';
import RoofStatic from '@/pages/Energy/RooftopPhotovoltaic/components/RoofStatic';
import ElectricityCharts from '@/pages/Energy/FarmlandPhotovoltaic/components/ElectricityCharts';
import RoofWarning from '@/pages/Energy/RooftopPhotovoltaic/components/RoofWarning';
import EmergencyCallInfo from '@/pages/Alarm/WarningInfo/components/EmergencyCallInfo';

const { Cell } = ResponsiveGrid;
const { Item, SubNav } = Nav;

const RooftopPhotovoltaic = () => {
  const [emergencyCallUntreated, setEmergencyCallUntreated] = useState(1);

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
                name: '屋顶光伏',
              },
            ]}
          />
        </div>
      </Cell>

      <Cell colSpan={12}>
        <div className="roof-static">
          <div>
            <Nav
              style={{ width: 160 }}
              openMode="single"
              defaultOpenKeys={['0-0']}
            >
              <SubNav label="小岗村">
                <Item>屋顶光伏1</Item>
                <Item>屋顶光伏2</Item>
              </SubNav>
            </Nav>
          </div>

          <div className="centerGap" />

          <div className="roof-static-num">
            <RoofStatic untreated={emergencyCallUntreated} setUntreated={setEmergencyCallUntreated} />

            <div className="levelGap" />

            <div className="roof-electricity">
              <ElectricityCharts />
            </div>

            <div className="levelGap" />

            <div className="roof-warning">
              <RoofWarning />
            </div>
          </div>
        </div>
      </Cell>
    </ResponsiveGrid>
  );
};
RooftopPhotovoltaic.pageConfig = {
  auth: ['admin'],
};
export default RooftopPhotovoltaic;
