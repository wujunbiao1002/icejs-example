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
