import React, { useEffect, useState } from 'react';
import {
  Table,
  Button,
  Pagination, Message, Search,
} from '@alifd/next';
import styles from './index.module.scss';
import { listPageData } from './services/api';

const EmergencyCallInfo = (props) => {
  const [dataSource, setDataSource] = useState({
    data: [],
    pageSize: 10,
    current: 1,
    total: 0,
  });
  const { untreated, setUntreated } = props;
  const [keyword, setKeyword] = useState();
  const [processed, setProcessed] = useState(12);

  useEffect(() => {
    setDataSource(listPageData(1, 10, ''));
  }, []);

  const handlePageChange = (value) => {
    setDataSource(listPageData(value, 10, ''));
  };
  const search = (value) => {
    setKeyword(value);
    setDataSource(listPageData(1, 10, value));
  };

  const renderOperation = (value, index, record) => {
    if (record.operation === '已处理') {
      return '已处理';
    } else {
      return (<Button
        type="primary"
        text
        onClick={() => {
          Message.success(`${record.name} - 紧急呼叫已处理`);
          const data = dataSource.data.map((item) => {
            if (item.id === record.id) {
              item.operator = '王金国';
              item.state = '已处理';
              item.operation = '已处理';
            }
            return item;
          });
          setDataSource(listPageData(1, 10, keyword));
          setUntreated(untreated - 1);
          setProcessed(processed + 1);
        }}
      >处理
      </Button>);
    }
  };
  return (
    <div className={styles.WorkTable}>
      <div className={styles.workerContainor}>
        <div className={styles.searchWrap}>
          <Search type="primary" placeholder="请输入姓名/手机号码" onSearch={search} className={styles.search} />
        </div>
        <div className={styles.numWrap}>
          <div>未处理: {untreated}</div>
          <div className={styles.numContent}>已处理: {processed}</div>
        </div>
        <div className={styles.tableWrap}>
          <Table
            dataSource={dataSource.data}
            hasBorder={false}
            isZebra
            size="medium"
          >
            <Table.Column align="center" title="姓名" dataIndex="name" />
            <Table.Column align="center" title="性别" dataIndex="sex" />
            <Table.Column align="center" title="房间" dataIndex="room" />
            <Table.Column align="center" title="联系电话" dataIndex="tel" />
            <Table.Column align="center" title="设备IMEI" dataIndex="deviceNo" />
            <Table.Column align="center" title="发生时间" dataIndex="startTime" />
            <Table.Column align="center" title="状态" dataIndex="state" />
            <Table.Column align="center" title="状态处理人" dataIndex="operator" />
            <Table.Column align="center" title="操作" cell={renderOperation} />
          </Table>
          <div className={styles.paginationWrap}>
            <Pagination
              total={dataSource.total}
              pageSize={10}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyCallInfo;
