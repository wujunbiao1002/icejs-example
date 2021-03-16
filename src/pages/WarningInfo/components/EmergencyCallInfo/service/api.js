import dataList from './dataSource';


export const listPageData = (current, pageSize, keyword) => {
  if (keyword) {
    const searchData = dataList.dataList.filter(item => item.name.includes(keyword) || item.tel.includes(keyword));
    const data = searchData.slice((current - 1) * pageSize, pageSize * current);
    return {
      data,
      pageSize,
      total: searchData.length,
      current,
    };
  } else {
    const data = dataList.dataList.slice((current - 1) * pageSize, pageSize * current);
    return {
      data,
      pageSize,
      total: dataList.dataList.length,
      current,
    };
  }
};
