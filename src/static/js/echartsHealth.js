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
    data: ['2021-03-14', '2021-03-15', '2021-03-16', '2021-03-17', '2021-03-18', '2021-03-19', '2021-03-20'],
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
      data: [120, 125, 130, 128, 119, 117, 133],
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
      data: [78, 75, 77, 86, 78, 85, 90],
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
    data: ['2021-03-14', '2021-03-15', '2021-03-16', '2021-03-17', '2021-03-18', '2021-03-19', '2021-03-20'],
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
      data: [68, 70, 78, 72, 73, 75, 69],
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
    bottom: '12%',
    top: '3%',
    containLabel: true,
  },
  tooltip: {
    trigger: 'axis',
    textStyle: {
      color: '#ccc',
    },
  },
  legend: {
    data: ['血氧异常', '血压异常', '紧急呼叫', '心率异常'],
    bottom: '0',
    icon: 'circle',
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
      name: '血氧异常',
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
      name: '血压异常',
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
      name: '紧急呼叫',
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
      name: '心率异常',
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

// 年龄段分布
export const age = {
  tooltip: {
    trigger: 'axis',
    textStyle: {
      color: '#ccc',
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: '2%',
    containLabel: true,
  },
  xAxis: [{
    data: ['50~59', '60~69', '60~69', '60~69', '60~69'],
    axisLabel: { // 文字倾斜
      interval: 0,
      rotate: 0,
      color: '#ccc',
    },
    axisLine: {
      lineStyle: {
        color: '#ccc',
      },
    },
    axisTick: {
      show: false,
    },
  }],
  yAxis: {
    axisLine: {
      lineStyle: {
        color: '#ccc',
      },
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      textStyle: {
        color: '#ccc',
      },
    },
    // 坐标轴在 grid 区域中的分隔线
    splitLine: {
      lineStyle: {
        color: '#ccc',
      },
    },
  },
  series: [
    {
      type: 'bar',
      barWidth: '15%',
      barGap: 6,
      barMaxWidth: '30%',
      itemStyle: {
        normal: {
          show: true,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#50b7ff', // 0% 处的颜色
            }, {
              offset: 1, color: '#347bff', // 100% 处的颜色
            }],
          },
        },
      },
      data: [610, 822, 500, 210, 88],
    },
  ],
};

// 紧急呼叫统计
export const callingStatistics = {
  title: {
    text: '4837',
    subtext: '总预警数',
    left: 'center',
    top: '36%',
  },
  tooltip: {
    trigger: 'item',
  },
  series: [
    {
      type: 'pie',
      radius: [60, 80],
      center: ['50%', '42%'],
      data: [
        {
          value: 3399,
          name: 'invisible',
          tooltip: {
            show: false,
          },
          itemStyle: {
            normal: {
              color: '#f2f6fc',
            },
            emphasis: {
              color: '#f2f6fc',
            },
          },
        },
        {
          value: 1438,
          name: '紧急呼叫',
          itemStyle: {
            normal: {
              color: '#97cefc',
              shadowBlur: 0,
            },
          },
        },
      ],
    },
  ],
};

// 心率异常统计
export const rateStatistics = {
  title: {
    text: '2000',
    subtext: '总预警数',
    left: 'center',
    top: '36%',
  },
  tooltip: {
    trigger: 'item',
  },
  series: [
    {
      type: 'pie',
      radius: [60, 80],
      center: ['50%', '42%'],
      data: [
        {
          value: 1200,
          name: 'invisible',
          tooltip: {
            show: false,
          },
          itemStyle: {
            normal: {
              color: '#f2f6fc',
            },
            emphasis: {
              color: '#f2f6fc',
            },
          },
        },
        {
          value: 800,
          name: '心率异常',
          itemStyle: {
            normal: {
              color: '#94d376',
            },
          },
        },
      ],
    },
  ],
};

// 血压异常统计
export const pressureStatistics = {
  title: {
    text: '1000',
    subtext: '总预警数',
    left: 'center',
    top: '36%',
  },
  tooltip: {
    trigger: 'item',
  },
  series: [
    {
      type: 'pie',
      radius: [60, 80],
      center: ['50%', '42%'],
      data: [
        {
          value: 500,
          name: 'invisible',
          tooltip: {
            show: false,
          },
          itemStyle: {
            normal: {
              color: '#f2f6fc',
            },
            emphasis: {
              color: '#f2f6fc',
            },
          },
        },
        {
          value: 1000,
          name: '血压异常',
          itemStyle: {
            normal: {
              color: '#ffdf5e',
            },
          },
        },
      ],
    },
  ],
};

// 血氧异常统计
export const oxygenStatistics = {
  title: {
    text: '1000',
    subtext: '总预警数',
    left: 'center',
    top: '36%',
  },
  tooltip: {
    trigger: 'item',
  },
  series: [
    {
      type: 'pie',
      radius: [60, 80],
      center: ['50%', '42%'],
      data: [
        {
          value: 500,
          name: 'invisible',
          tooltip: {
            show: false,
          },
          itemStyle: {
            normal: {
              color: '#f2f6fc',
            },
            emphasis: {
              color: '#f2f6fc',
            },
          },
        },
        {
          value: 500,
          name: '血氧异常',
          itemStyle: {
            normal: {
              color: '#b5a2ff',
            },
          },
        },
      ],
    },
  ],
};
