import warningInfo from './images/warningInfo.png';
import videoMonitoring from './images/videoMonitoring.png';
import healthMonitoring from './images/healthMonitoring.png';
import dataAnalysis from './images/dataAnalysis.png';
import keyAlarm from './images/keyAlarm.png';

const headerMenuConfig = [];
const asideMenuConfig = [
  {
    name: '智慧能源',
    path: '/energy',
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
      {
        name: '充电桩',
        path: '/data',
        imageIcon: warningInfo,
      },
      {
        name: '植物工厂',
        path: '/data',
        imageIcon: healthMonitoring,
      },
    ],
  },
];
export { headerMenuConfig, asideMenuConfig };
