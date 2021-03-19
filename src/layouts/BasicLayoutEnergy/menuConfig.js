import farmland from './images/farmland.png';
import surface from './images/surface.png';
import roof from './images/home.png';
import inHouse from './images/inHouse.png';
import charging from './images/charging.png';
import plant from './images/plant.png';
import keyAlarm from './images/keyAlarm.png';

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
        imageIcon: farmland,
      },
      {
        name: '水面光伏',
        path: '/energy/surface/photovoltaic',
        imageIcon: surface,
      },
      {
        name: '屋顶光伏',
        path: '/energy/rooftop/photovoltaic',
        imageIcon: roof,
      },
      {
        name: '入户光伏',
        path: '/energy/home/photovoltaic',
        imageIcon: inHouse,
      },
      {
        name: '充电桩',
        path: '/energy/charging/pile',
        imageIcon: charging,
      },
      {
        name: '植物工厂',
        path: '/energy/plant/factory',
        imageIcon: plant,
      },
    ],
  },
];
export { headerMenuConfig, asideMenuConfig };
