import { gridNumFun, setAxisTooltip, setXAxis, setYAxis } from '@/static/js/echartsConf';

// 数据检测--异常数据统计
export const warning = {
  grid: {
    ...gridNumFun('10%', '4%', '3%', '12%'),
  },
  tooltip: {
    ...setAxisTooltip,
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
    ...setXAxis,
  }],
  yAxis: [{
    type: 'value',
    boundaryGap: [0, '100%'],
    ...setYAxis,
    data: [462, 654, 356, 239],
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
    ...setAxisTooltip,
  },
  grid: {
    ...gridNumFun('2%', '4%', '3%', '3%'),
  },
  xAxis: [{
    data: ['50~59', '60~69', '60~69', '60~69', '60~69'],
    ...setXAxis,
  }],
  yAxis: {
    ...setYAxis,
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
    text: '总预警数: 4837',
    bottom: '40',
    left: 'center',
    textStyle: {
      fontWeight: 'normal',
    },
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
          label: {
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
          label: {
            position: 'center',
            color: '#666',
            formatter: '{value|{c}}\n{name|{b}}',
            fontSize: '16',
            rich: {
              value: {
                fontWeight: 'bold',
                fontSize: '20',
                lineHeight: '30',
              },
            },
          },
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
    text: '总预警数: 2000',
    bottom: '40',
    left: 'center',
    textStyle: {
      fontWeight: 'normal',
    },
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
          label: {
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
          label: {
            position: 'center',
            color: '#666',
            formatter: '{value|{c}}\n{name|{b}}',
            fontSize: '16',
            rich: {
              value: {
                fontWeight: 'bold',
                fontSize: '20',
                lineHeight: '30',
              },
            },
          },
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
    text: '总预警数: 1500',
    bottom: '40',
    left: 'center',
    textStyle: {
      fontWeight: 'normal',
    },
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
          label: {
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
          label: {
            position: 'center',
            color: '#666',
            formatter: '{value|{c}}\n{name|{b}}',
            fontSize: '16',
            rich: {
              value: {
                fontWeight: 'bold',
                fontSize: '20',
                lineHeight: '30',
              },
            },
          },
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
    text: '总预警数: 1000',
    bottom: '40',
    left: 'center',
    textStyle: {
      fontWeight: 'normal',
    },
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
          label: {
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
          label: {
            position: 'center',
            color: '#666',
            formatter: '{value|{c}}\n{name|{b}}',
            fontSize: '16',
            rich: {
              value: {
                fontWeight: 'bold',
                fontSize: '20',
                lineHeight: '30',
              },
            },
          },
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
