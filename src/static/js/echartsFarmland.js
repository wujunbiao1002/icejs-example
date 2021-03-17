export const farmlandEfficiency = {
  series: [{
    type: 'gauge',
    min: 0,
    max: 200,
    splitNumber: 10,
    axisLine: {
      lineStyle: {
        width: 10,
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
      distance: -10,
      length: 20,
      lineStyle: {
        color: 'auto',
        width: 4,
      },
    },
    axisLabel: {
      color: 'auto',
      distance: 20,
      fontSize: 14,
    },
    detail: {
      valueAnimation: true,
      formatter: '{value} %',
      color: '#868686',
      fontWeight: 'normal',
      offsetCenter: [0, '100%'],
    },
    data: [{
      value: 96.12,
    }],
  }],
};
