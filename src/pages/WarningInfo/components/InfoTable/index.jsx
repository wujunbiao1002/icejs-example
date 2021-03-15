import React from 'react';
import {
  Table,
  Input,
  Button,
  Pagination,
} from '@alifd/next';
import styles from './index.module.scss';


const InfoTable = (props) => {
  const dataList = props.dataSource;

  return (
    <div className={styles.WorkTable}>
      <div className={styles.workerContainor}>
        <div className={styles.searchWrap}>
          <Input
            placeholder="请输入姓名、电话、关联设备号"
          />
          <Button type="primary">查询</Button>
        </div>
        <div className={styles.numWrap}>
          <div>未处理: 1</div>
          <div className={styles.numContent}>已处理: 6</div>
        </div>
        <div className={styles.tableWrap}>
          <Table
            dataSource={dataList}
            hasBorder={false}
            isZebra
            size="medium"
          >
            <Table.Column align="center" title="姓名" dataIndex="name" />
            <Table.Column align="center" title="性别" dataIndex="sex" />
            <Table.Column align="center" title="房间" dataIndex="room" />
            <Table.Column align="center" title="联系电话" dataIndex="tel" />
            <Table.Column align="center" title="设备IMEI" dataIndex="device" />
            <Table.Column align="center" title="发生时间" dataIndex="startTime" />
            <Table.Column align="center" title="状态" dataIndex="state" />
            <Table.Column align="center" title="状态处理人" dataIndex="operator" />
            <Table.Column align="center" title="操作" dataIndex="operation" />
          </Table>
          <div className={styles.paginationWrap}>
            <Pagination pageSize={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTable;
