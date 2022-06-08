import React from 'react';
import PageHeader from '@/components/PageHeader';
import { ResponsiveGrid, Tab } from '@alifd/next';
import Details from './components/Details';
import mock from './mock';

const { Cell } = ResponsiveGrid;

const ChargingPile = () => {
  const dataList = mock.dataLoist;

  return (
    <ResponsiveGrid>
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
                name: '充电桩',
              },
            ]}
          />
        </div>
      </Cell>

      <Cell colSpan={12}>
        <div className="warningInfo chargingPile">
          <Tab shape="wrapped">
            <Tab.Item title="充电桩1" key="1">
              <Details data={dataList[0]} />
            </Tab.Item>
            <Tab.Item title="充电桩2" key="2">
              <Details data={dataList[1]} />
            </Tab.Item>
            <Tab.Item title="充电桩3" key="3">
              <Details data={dataList[2]} />
            </Tab.Item>
            <Tab.Item title="充电桩4" key="4">
              <Details data={dataList[3]} />
            </Tab.Item>
          </Tab>
        </div>
      </Cell>
    </ResponsiveGrid>
  );
};
ChargingPile.pageConfig = {
  auth: ['admin'],
};
export default ChargingPile;
