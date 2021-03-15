import callingData from './dataSource';


export const listPageCallingList = (current, pageSize, keyword) => {
  if (keyword) {
    const searchData = callingData.dataList.filter(item => item.name.includes(keyword) || item.tel.includes(keyword));
    const data = searchData.slice((current - 1) * pageSize, pageSize * current);
    return {
      data,
      pageSize,
      total: searchData.length,
      current,
    };
  } else {
    const data = callingData.dataList.slice((current - 1) * pageSize, pageSize * current);
    return {
      data,
      pageSize,
      total: callingData.dataList.length,
      current,
    };
  }
};
