import warningInfo from '../BasicLayout/images/warningInfo.png';
import videoMonitoring from '../BasicLayout/images/videoMonitoring.png';
import healthMonitoring from '../BasicLayout/images/healthMonitoring.png';
import dataAnalysis from '../BasicLayout/images/dataAnalysis.png';
import keyAlarm from '../BasicLayout/images/keyAlarm.png';

const headerMenuConfig = [];
const asideMenuConfig = [
  {
    name: '智慧能源',
    path: '/',
    // icon: 'toggle-right',
    imageIcon: keyAlarm,
    children: [
      {
        name: '农田光伏',
        path: '/energy/farmland/photovoltaic',
        imageIcon: warningInfo,
      },
      {
        name: '水面光伏',
        path: '/energy/surface/photovoltaic',
        imageIcon: healthMonitoring,
      },
      {
        name: '屋顶光伏',
        path: '/energy/rooftop/photovoltaic',
        imageIcon: videoMonitoring,
      },
      {
        name: '入户光伏',
        path: '/energy/home/photovoltaic',
        imageIcon: dataAnalysis,
      },
      {
        name: '充电桩',
        path: '/energy/charging/pile',
        imageIcon: warningInfo,
      },
      {
        name: '植物工厂',
        path: '/energy/plant/factory',
        imageIcon: healthMonitoring,
      },
    ],
  },
];
export { headerMenuConfig, asideMenuConfig };
