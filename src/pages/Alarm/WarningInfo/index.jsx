import React, { useState } from 'react';
import { ResponsiveGrid, Tab, Badge } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import EmergencyCallInfo from './components/EmergencyCallInfo';
import BloodOxygenInfo from './components/BloodOxygenInfo';
import BloodPressureInfo from './components/BloodPressureInfo';
import HeartRateInfo from './components/HeartRateInfo';
import '../../../global.scss';

const { Cell } = ResponsiveGrid;

const FormGroup = () => {
  const [emergencyCallUntreated, setEmergencyCallUntreated] = useState(1);
  const [heartReteUntreated, setHeartReteUntreated] = useState(3);
  const [bloodPressureUntreated, setBloodPressureUntreated] = useState(3);
  const [bloodOxygenUntreated, setBloodOxygenUntreated] = useState(4);

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
            <Tab.Item title={renderTitle('紧急呼叫', emergencyCallUntreated)} key="1">
              <EmergencyCallInfo untreated={emergencyCallUntreated} setUntreated={setEmergencyCallUntreated} />
            </Tab.Item>
            <Tab.Item title={renderTitle('心率异常', heartReteUntreated)} key="2">
              <HeartRateInfo untreated={heartReteUntreated} setUntreated={setHeartReteUntreated} />
            </Tab.Item>
            <Tab.Item title={renderTitle('血压异常', bloodPressureUntreated)} key="3">
              <BloodPressureInfo untreated={bloodPressureUntreated} setUntreated={setBloodPressureUntreated} />
            </Tab.Item>
            <Tab.Item title={renderTitle('血氧异常', bloodOxygenUntreated)} key="4">
              <BloodOxygenInfo untreated={bloodOxygenUntreated} setUntreated={setBloodOxygenUntreated} />
            </Tab.Item>
          </Tab>
        </div>
      </Cell>
    </ResponsiveGrid>
  );
};

export default FormGroup;
