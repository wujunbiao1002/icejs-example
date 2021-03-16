import React, { useEffect, useState } from 'react';
import {
  Table,
  Input,
  Button,
  Pagination, Message,
} from '@alifd/next';
import styles from './index.module.scss';
import { listPageCallingList } from './service/api';

const EmergencyCallInfo = (props) => {
  const [dataSource, setDataSource] = useState({
    data: [],
    pageSize: 10,
    current: 1,
    total: 0,
  });
  const [keyword, setKeyword] = useState();
  const { untreated, setUntreated } = props;
  const [processed, setProcessed] = useState(12);

  useEffect(() => {
    setDataSource(listPageCallingList(1, 10, ''));
  }, []);

  const handlePageChange = (value) => {
    setDataSource(listPageCallingList(value, 10, ''));
  };
  const search = () => {
    setDataSource(listPageCallingList(1, 10, keyword));
  };
  const onchangeKeyword = (value) => {
    setKeyword(value);
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
          setDataSource(listPageCallingList(1, 10, keyword));
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
          <Input
            placeholder="请输入姓名、电话、关联设备号"
            onChange={onchangeKeyword}
          />
          <Button type="primary" onClick={search}>查询</Button>
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
            <Table.Column align="center" title="姓名" dataIndex="name"/>
            <Table.Column align="center" title="性别" dataIndex="sex"/>
            <Table.Column align="center" title="房间" dataIndex="room"/>
            <Table.Column align="center" title="联系电话" dataIndex="tel"/>
            <Table.Column align="center" title="设备IMEI" dataIndex="deviceNo"/>
            <Table.Column align="center" title="发生时间" dataIndex="startTime"/>
            <Table.Column align="center" title="状态" dataIndex="state"/>
            <Table.Column align="center" title="状态处理人" dataIndex="operator"/>
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
