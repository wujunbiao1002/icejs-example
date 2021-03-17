import React from 'react';
import PageHeader from '@/components/PageHeader';
import { ResponsiveGrid } from '@alifd/next';

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
                name: '充电桩',
              },
            ]}
          />
        </div>
      </Cell>

      <Cell colSpan={12}>
        充电桩
      </Cell>
    </ResponsiveGrid>
  );
};

export default SurfacePhotovoltaic;
