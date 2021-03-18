import React from 'react';
import PageHeader from '@/components/PageHeader';
import { ResponsiveGrid } from '@alifd/next';
import HomePhotovoltaic from '@/pages/Energy/HomePhotovoltaic';

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
                name: '屋顶光伏',
              },
            ]}
          />
        </div>
      </Cell>

      <Cell colSpan={12}>
        屋顶光伏
      </Cell>
    </ResponsiveGrid>
  );
};
SurfacePhotovoltaic.pageConfig = {
  auth: ['admin'],
};
export default SurfacePhotovoltaic;
