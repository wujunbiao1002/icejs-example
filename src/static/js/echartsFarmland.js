import { gridNumFun, setAxisTooltip, setXAxis, setYAxis } from '@/static/js/echartsConf';

// 逆变器效率
export const farmlandEfficiency = {
  series: [{
    type: 'gauge',
    min: 0,
    max: 200,
    splitNumber: 10,
    axisLine: {
      lineStyle: {
        width: 6,
        color: [
          [0.2, '#008500'],
          [0.8, '#2f7bb1'],
          [1, '#ff3400'],
        ],
      },
    },
    pointer: {
      itemStyle: {
        color: 'auto',
      },
    },
    axisTick: {
      length: 0,
    },
    splitLine: {
      distance: -6,
      length: 14,
      lineStyle: {
        color: 'auto',
        width: 2,
      },
    },
    axisLabel: {
      color: 'auto',
      distance: 10,
      fontSize: 12,
    },
    detail: {
      valueAnimation: true,
      formatter: '{value} %',
      color: '#333',
      fontSize: 20,
      fontWeight: 'normal',
      offsetCenter: [0, '100%'],
    },
    data: [{
      value: 96.12,
    }],
  }],
};

// 发电量
export const generatingCapacity = {
  tooltip: {
    ...setAxisTooltip,
  },
  grid: {
    ...gridNumFun('2%', '4%', '3%', '3%'),
  },
  xAxis: [{
    data: ['50~59', '60~69', '70~79', '80~89', '90岁以上'],
    ...setXAxis,
  }],
  yAxis: {
    ...setYAxis,
  },
  series: [
    {
      name: '发电量',
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
      data: [45, 72, 30, 22, 12],
    },
  ],
};

// 发电功率
export const farmlandElectricityPower = {
  grid: {
    ...gridNumFun('8%', '6%', '3%', '12%'),
  },
  tooltip: {
    ...setAxisTooltip,
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
      name: '发电功率',
      type: 'line',
      smooth: true,
      symbol: 'none',
      sampling: 'average',
      itemStyle: {
        color: '#2ed4ff',
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
            color: 'rgb(226,249,255)', // 0% 处的颜色
          }, {
            offset: 1,
            color: 'rgba(226,249,255, 0.3)', // 100% 处的颜色
          }],
        },
      },
      data: [128, 92, 100, 130, 94, 129, 104, 121],
    },
  ],
};

// CO2减排量
export const emissionReduction = {
  grid: {
    ...gridNumFun('8%', '6%', '3%', '12%'),
  },
  tooltip: {
    ...setAxisTooltip,
  },
  xAxis: {
    type: 'category',
    ...setXAxis,
    data: ['一月', '二月', '三月', '四月', '五月', '一月', '一月'],
  },
  yAxis: {
    type: 'value',
    ...setYAxis,
  },
  series: [{
    name: 'CO2减排量',
    data: [150, 230, 224, 218, 135, 147, 260],
    type: 'line',
    symbol: 'none',
  }],
};

// 告警次数统计
export const warningAnalysis = {
  grid: {
    ...gridNumFun('8%', '6%', '3%', '12%'),
  },
  tooltip: {
    ...setAxisTooltip,
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
      name: '告警次数',
      type: 'line',
      smooth: false,
      symbol: 'none',
      sampling: 'average',
      itemStyle: {
        color: '#ffdf5e',
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
            color: 'rgb(255,250,232)', // 0% 处的颜色
          }, {
            offset: 1,
            color: 'rgba(255,250,232, 0.3)', // 100% 处的颜色
          }],
        },
      },
      data: [128, 92, 100, 130, 94, 129, 104, 121],
    },
  ],
};
// 告警次数统计
export const warningAnalysisTest = {
  grid: {
    ...gridNumFun('8%', '6%', '3%', '12%'),
  },
  tooltip: {
    ...setAxisTooltip,
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
      name: '告警次数',
      type: 'line',
      smooth: false,
      symbol: 'none',
      sampling: 'average',
      itemStyle: {
        color: '#ffdf5e',
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
            color: 'rgb(255,250,232)', // 0% 处的颜色
          }, {
            offset: 1,
            color: 'rgba(255,250,232, 0.3)', // 100% 处的颜色
          }],
        },
      },
      data: [128, 92, 100, 130, 94, 129, 104, 121],
    },
  ],
};

