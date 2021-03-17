import warningInfo from './images/warningInfo.png';
import videoMonitoring from './images/videoMonitoring.png';
import healthMonitoring from './images/healthMonitoring.png';
import dataAnalysis from './images/dataAnalysis.png';
import keyAlarm from './images/keyAlarm.png';


const headerMenuConfig = [];
const asideMenuConfig = [
  {
    name: '一键报警',
    path: '/',
    // icon: 'toggle-right',
    imageIcon: keyAlarm,
    children: [
      {
        name: '预警信息管理',
        path: '/warning/info',
        imageIcon: warningInfo,
      },
      {
        name: '健康监控',
        path: '/health/monitoring',
        imageIcon: healthMonitoring,
      },
      {
        name: '视频监控',
        path: '/video/monitoring',
        imageIcon: videoMonitoring,
      },
      {
        name: '数据分析',
        path: '/data/analysis',
        imageIcon: dataAnalysis,
      },
    ],
  },
  {
    name: '智慧能源',
    path: '/',
    // icon: 'toggle-right',
    imageIcon: keyAlarm,
    children: [
      {
        name: '农田光伏',
        path: '/farmland/photovoltaic',
        imageIcon: warningInfo,
      },
      {
        name: '水面光伏',
        path: '/health',
        imageIcon: healthMonitoring,
      },
      {
        name: '屋顶光伏',
        path: '/video',
        imageIcon: videoMonitoring,
      },
      {
        name: '入户光伏',
        path: '/data',
        imageIcon: dataAnalysis,
      },
    ],
  },
];
export { headerMenuConfig, asideMenuConfig };
