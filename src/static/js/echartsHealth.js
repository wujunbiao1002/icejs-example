/**
 * 房屋类别统计
 */
export const houseType = {
  grid: {
    left: '3%',
    right: '4%',
    bottom: '6%',
    containLabel: true,
  },
  tooltip: {
    trigger: 'axis',
    textStyle: {
      color: '#ccc',
    },
  },
  title: {
    left: 'center',
    padding: [20, 0, 10, 0],
    text: '出租屋人口数量统计',
    textStyle: { // 主标题文本样式
      fontSize: 18,
      fontWeight: '500',
      color: '#fff',
    },
  },
  xAxis: [{
    boundaryGap: false,
    type: 'category',
    data: ['2031/3/2', '2021/3/3', '2021/3/4', '2021/3/5', '2021/3/6', '2021/3/7'],
    axisLabel: {
      color: '#ccc',
    },
    // 坐标轴刻度
    axisTick: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        color: '#ccc',
      },
    },
  }],
  yAxis: [{
    type: 'value',
    boundaryGap: [0, '100%'],
    axisLabel: {
      color: '#ccc',
    },
    splitLine: {
      lineStyle: {
        color: '#ccc',
      },
    },
    // splitNumber: [20],
    // 坐标轴轴线
    axisLine: {
      show: true,
      lineStyle: {
        color: '#ccc',
      },
    },
    data: [462, 654, 356, 239],
    // 坐标轴刻度
    axisTick: {
      show: false,
    },
  }],
  series: [
    {
      name: '高压',
      type: 'line',
      smooth: true,
      symbol: 'none',
      sampling: 'average',
      itemStyle: {
        color: '#ff6e3a',
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: 'rgb(255,243,236)', // 0% 处的颜色
          }, {
            offset: 1,
            color: 'rgba(255, 244, 239, 0.3)', // 100% 处的颜色
          }],
        },
      },
      data: [118, 132, 180, 158, 134, 199],
    },
    {
      name: '低压',
      type: 'line',
      smooth: true,
      symbol: 'none',
      sampling: 'average',
      itemStyle: {
        color: '#00caff',
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: 'rgba(197, 238, 251, 1)', // 0% 处的颜色
          }, {
            offset: 1,
            color: 'rgba(197, 238, 251, 0.5)', // 100% 处的颜色
          }],
        },
      },
      data: [60, 51, 77, 86, 55, 66],
    },
  ],
};

/**
 * 房屋类别统计
 */
export const rate = {
  grid: {
    left: '3%',
    right: '4%',
    bottom: '6%',
    containLabel: true,
  },
  tooltip: {
    trigger: 'axis',
    textStyle: {
      color: '#ccc',
    },
  },
  title: {
    left: 'center',
    padding: [20, 0, 10, 0],
    text: '出租屋人口数量统计',
    textStyle: { // 主标题文本样式
      fontSize: 18,
      fontWeight: '500',
      color: '#fff',
    },
  },
  xAxis: [{
    boundaryGap: false,
    type: 'category',
    data: ['2031/3/2', '2021/3/3', '2021/3/4', '2021/3/5', '2021/3/6', '2021/3/7'],
    axisLabel: {
      color: '#ccc',
    },
    // 坐标轴刻度
    axisTick: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        color: '#ccc',
      },
    },
  }],
  yAxis: [{
    type: 'value',
    boundaryGap: [0, '100%'],
    axisLabel: {
      color: '#ccc',
    },
    splitLine: {
      lineStyle: {
        color: '#ccc',
      },
    },
    // splitNumber: [20],
    // 坐标轴轴线
    axisLine: {
      show: true,
      lineStyle: {
        color: '#ccc',
      },
    },
    data: [462, 654, 356, 239],
    // 坐标轴刻度
    axisTick: {
      show: false,
    },
  }],
  series: [
    {
      name: '心率',
      type: 'line',
      smooth: true,
      symbol: 'none',
      sampling: 'average',
      itemStyle: {
        color: '#00e9b2',
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: 'rgb(236,255,252)', // 0% 处的颜色
          }, {
            offset: 1,
            color: 'rgba(236,255,252, 0.3)', // 100% 处的颜色
          }],
        },
      },
      data: [108, 82, 90, 100, 84, 119],
    },
  ],
};

/**
 * 房屋类别统计
 */
export const warning = {
  grid: {
    left: '3%',
    right: '4%',
    bottom: '6%',
    containLabel: true,
  },
  tooltip: {
    trigger: 'axis',
    textStyle: {
      color: '#ccc',
    },
  },
  title: {
    left: 'center',
    padding: [20, 0, 10, 0],
    text: '出租屋人口数量统计',
    textStyle: { // 主标题文本样式
      fontSize: 18,
      fontWeight: '500',
      color: '#fff',
    },
  },
  xAxis: [{
    boundaryGap: false,
    type: 'category',
    data: ['一月', '二月', '二月', '二月', '二月', '二月', '二月', '二月'],
    axisLabel: {
      color: '#ccc',
    },
    // 坐标轴刻度
    axisTick: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        color: '#ccc',
      },
    },
  }],
  yAxis: [{
    type: 'value',
    boundaryGap: [0, '100%'],
    axisLabel: {
      color: '#ccc',
    },
    splitLine: {
      lineStyle: {
        color: '#ccc',
      },
    },
    // splitNumber: [20],
    // 坐标轴轴线
    axisLine: {
      show: true,
      lineStyle: {
        color: '#ccc',
      },
    },
    data: [462, 654, 356, 239],
    // 坐标轴刻度
    axisTick: {
      show: false,
    },
  }],
  series: [
    {
      name: '心率',
      type: 'line',
      smooth: true,
      symbol: 'none',
      sampling: 'average',
      itemStyle: {
        color: '#d5db00',
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: 'rgb(246,249,207)', // 0% 处的颜色
          }, {
            offset: 1,
            color: 'rgba(246,249,207, 0.3)', // 100% 处的颜色
          }],
        },
      },
      data: [218, 182, 190, 210, 184, 219, 201, 199],
    },
    {
      name: '心率',
      type: 'line',
      smooth: true,
      symbol: 'none',
      sampling: 'average',
      itemStyle: {
        color: '#82cb5e',
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: 'rgb(249,253,245,1)', // 0% 处的颜色
          }, {
            offset: 1,
            color: 'rgba(249,253,245, 0.3)', // 100% 处的颜色
          }],
        },
      },
      data: [128, 182, 190, 98, 83, 129, 99, 123],
    },
    {
      name: '心率',
      type: 'line',
      smooth: true,
      symbol: 'none',
      sampling: 'average',
      itemStyle: {
        color: '#ff6e3a',
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: 'rgb(254,250,244)', // 0% 处的颜色
          }, {
            offset: 1,
            color: 'rgba(254,250,244, 0.3)', // 100% 处的颜色
          }],
        },
      },
      data: [128, 92, 100, 130, 94, 129, 104, 121],
    },
    {
      name: '心率',
      type: 'line',
      smooth: true,
      symbol: 'none',
      sampling: 'average',
      itemStyle: {
        color: '#00caff',
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: 'rgb(239,250,251)', // 0% 处的颜色
          }, {
            offset: 1,
            color: 'rgba(239,250,251, 0.3)', // 100% 处的颜色
          }],
        },
      },
      data: [108, 82, 90, 100, 84, 119, 99, 80],
    },
  ],
};

