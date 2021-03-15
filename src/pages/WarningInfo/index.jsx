import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';

const { Cell } = ResponsiveGrid;

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
              name: '预警信息管理',
            },
          ]}
        />
      </Cell>

      <Cell colSpan={12}>
        数据分析
      </Cell>
    </ResponsiveGrid>
  );
};

export default FormGroup;
