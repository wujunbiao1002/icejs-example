import warningInfo from '../BasicLayout/images/warningInfo.png';
import videoMonitoring from '../BasicLayout/images/videoMonitoring.png';
import healthMonitoring from '../BasicLayout/images/healthMonitoring.png';
import dataAnalysis from '../BasicLayout/images/dataAnalysis.png';
import keyAlarm from '../BasicLayout/images/keyAlarm.png';

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
        path: '/alarm/warning/info',
        imageIcon: warningInfo,
      },
      {
        name: '健康监控',
        path: '/alarm/health/monitoring',
        imageIcon: healthMonitoring,
      },
      {
        name: '视频监控',
        path: '/alarm/video/monitoring',
        imageIcon: videoMonitoring,
      },
      {
        name: '数据分析',
        path: '/alarm/data/analysis',
        imageIcon: dataAnalysis,
      },
    ],
  },
];
export { headerMenuConfig, asideMenuConfig };
