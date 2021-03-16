import { setYAxis, gridNumFun, setXAxis, setAxisTooltip } from '@/static/js/echartsConf';

// 健康监控--血压
export const healthPressure = {
  grid: {
    ...gridNumFun('10%', '4%', '3%', '6%'),
  },
  tooltip: {
    ...setAxisTooltip,
  },
  xAxis: [{
    boundaryGap: false,
    type: 'category',
    data: ['2021-03-14', '2021-03-15', '2021-03-16', '2021-03-17', '2021-03-18', '2021-03-19', '2021-03-20'],
    ...setXAxis,
  }],
  yAxis: [{
    name: 'mmHg',
    nameGap: 8,
    nameTextStyle: {
      align: 'center',
      color: '#999',
      padding: 4,
    },
    type: 'value',
    boundaryGap: [0, '100%'],
    // splitNumber: [20],
    data: [462, 654, 356, 239],
    ...setYAxis,
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

// 健康监控--心率
export const rate = {
  grid: {
    ...gridNumFun('10%', '4%', '3%', '6%'),
  },
  tooltip: {
    ...setAxisTooltip,
  },
  xAxis: [{
    boundaryGap: false,
    type: 'category',
    data: ['2031/3/2', '2021/3/3', '2021/3/4', '2021/3/5', '2021/3/6', '2021/3/7'],
    ...setXAxis,
  }],
  yAxis: [{
    name: '次',
    nameGap: 8,
    nameTextStyle: {
      align: 'center',
      color: '#999',
      padding: 4,
    },
    type: 'value',
    boundaryGap: [0, '100%'],
    ...setYAxis,
    data: [462, 654, 356, 239],
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

