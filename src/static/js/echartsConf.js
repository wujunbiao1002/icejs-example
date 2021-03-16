// 设置公共grid
export const gridNumFun = (top, right, left, bottom, containLabel = true) => {
  return {
    top,
    right,
    left,
    bottom,
    containLabel,
  };
};

// y轴--不显示区域中的分隔线splitLine，坐标轴刻度axisTick
export const setYAxis = {
  // 坐标轴刻度
  axisTick: {
    show: false,
  },
  axisLabel: {
    color: '#808080',
  },
  // 坐标轴轴线
  axisLine: {
    show: true,
    lineStyle: {
      color: '#eee',
    },
  },
  splitLine: {
    lineStyle: {
      color: '#eee',
      type: 'dotted',
    },
  },
};

// x轴
export const setXAxis = {
  axisLabel: {
    color: '#808080',
  },
  // 坐标轴刻度
  axisTick: {
    show: false,
  },
  axisLine: {
    lineStyle: {
      color: '#eee',
    },
  },
};

export const setAxisTooltip = {
  trigger: 'axis',
  textStyle: {
    color: '#666',
  },
};
