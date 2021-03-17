import React from 'react';
import PageHeader from '@/components/PageHeader';
import { ResponsiveGrid } from '@alifd/next';
import FarmlandTop from '@/pages/FarmlandPhotovoltaic/components/farmlandTop';

const { Cell } = ResponsiveGrid;

const FarmlandPhotovoltaic = () => {
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
                name: '农田光伏',
              },
            ]}
          />
        </div>
      </Cell>

      <Cell colSpan={12}>
        <FarmlandTop />
      </Cell>
    </ResponsiveGrid>
  );
};

export default FarmlandPhotovoltaic;
