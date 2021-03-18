import React from 'react';
import PageHeader from '@/components/PageHeader';
import { ResponsiveGrid, Nav } from '@alifd/next';
import RoofStatic from '@/pages/Energy/RooftopPhotovoltaic/components/RoofStatic';

const { Cell } = ResponsiveGrid;
const { Item, SubNav } = Nav;

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
                <Item>屋顶光伏3</Item>
                <Item>屋顶光伏4</Item>
                <Item>屋顶光伏5</Item>
              </SubNav>
            </Nav>
          </div>

          <div className="centerGap" />

          <div className="roof-static-num">
            <RoofStatic />
          </div>
        </div>
      </Cell>
    </ResponsiveGrid>
  );
};

export default SurfacePhotovoltaic;
