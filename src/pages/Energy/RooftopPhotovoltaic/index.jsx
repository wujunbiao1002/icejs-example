import React, { useEffect, useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { ResponsiveGrid, Nav } from '@alifd/next';
import RoofStatic from '@/pages/Energy/RooftopPhotovoltaic/components/RoofStatic';
import ElectricityCharts from '@/pages/Energy/RooftopPhotovoltaic/components/ElectricityCharts';
import RoofWarning from '@/pages/Energy/RooftopPhotovoltaic/components/RoofWarning';
import dataSource from './mock';

const { Cell } = ResponsiveGrid;
const { Item, SubNav } = Nav;

const RooftopPhotovoltaic = () => {
  const [dataSourceList, setDataSourceList] = useState({});
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    setDataSourceList(dataSource.roof1);
  }, []);

  const handleRoofClick = (option) => {
    setIsChange(true);
    if (option === 1) {
      setDataSourceList(dataSource.roof1);
    } else {
      setDataSourceList(dataSource.roof2);
    }
  };

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
              defaultSelectedKeys={['0-0-0']}
            >
              <SubNav label="小岗村">
                <Item onClick={() => { handleRoofClick(1); }}>屋顶光伏1</Item>
                <Item onClick={() => { handleRoofClick(2); }}>屋顶光伏2</Item>
              </SubNav>
            </Nav>
          </div>

          <div className="centerGap" />

          <div className="roof-static-num">
            <RoofStatic dataSource={dataSourceList} />

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
