import React from 'react';
import { ResponsiveGrid, Tab, Badge } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import InfoTable from './components/InfoTable';
import mock from './mock';
import '../../global.scss';

const { Cell } = ResponsiveGrid;
const dataSource = {
  callingList: mock.callingList,
  rateList: mock.rateList,
  pressureList: mock.pressureList,
  oxygenList: mock.oxygenList,
};


const FormGroup = () => {
  const renderTitle = (title, num) => {
    return (
      <span>
        {title}&nbsp;&nbsp;
        <Badge count={num} showZero />
      </span>
    );
  };
  return (
    <ResponsiveGrid gap={20} style={{ margin: '10px', padding: '10px', background: '#fff' }}>
      <Cell colSpan={12} style={{ margin: '0' }}>
        <div>
          <PageHeader
            style={{ margin: '0', paddingBottom: '0' }}
            breadcrumbs={[
              {
                name: '系统首页',
              },
              {
                name: '预警信息管理',
              },
            ]}
          />
        </div>
      </Cell>

      <Cell colSpan={12}>
        <div className="warningInfo">
          <Tab shape="wrapped">
            <Tab.Item title={renderTitle('紧急呼叫', 1)} key="1">
              <InfoTable dataSource={dataSource.callingList} />
            </Tab.Item>
            <Tab.Item title={renderTitle('心率异常', 23)} key="2">
              <InfoTable dataSource={dataSource.rateList} />
            </Tab.Item>
            <Tab.Item title={renderTitle('血压异常', 14)} key="3">
              <InfoTable dataSource={dataSource.pressureList} />
            </Tab.Item>
            <Tab.Item title={renderTitle('血氧异常', 11)} key="4">
              <InfoTable dataSource={dataSource.oxygenList} />
            </Tab.Item>
          </Tab>
        </div>
      </Cell>
    </ResponsiveGrid>
  );
};

export default FormGroup;
