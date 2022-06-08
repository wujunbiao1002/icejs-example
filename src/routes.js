import { lazy } from 'ice';

import UserLayout from '@/layouts/UserLayout';
import BasicLayoutAlarm from '@/layouts/BasicLayoutAlarm';
import BasicLayoutEnergy from '@/layouts/BasicLayoutEnergy';

// 应用路由
const Exception = lazy(() => import('@/components/Exception'));
// 一键报警
const Login = lazy(() => import('@/pages/Login'));
const Register = lazy(() => import('@/pages/Register'));
const WarningInfo = lazy(() => import('@/pages/Alarm/WarningInfo'));
const DataAnalysis = lazy(() => import('@/pages/Alarm/DataAnalysis'));
const HealthMonitoring = lazy(() => import('@/pages/Alarm/HealthMonitoring'));
const VideoMonitoring = lazy(() => import('@/pages/Alarm/VideoMonitoring'));
// 智慧能源
const ChargingPile = lazy(() => import('@/pages/Energy/ChargingPile'));
const FarmlandPhotovoltaic = lazy(() => import('@/pages/Energy/FarmlandPhotovoltaic'));
const HomePhotovoltaic = lazy(() => import('@/pages/Energy/HomePhotovoltaic'));
const PlantFactory = lazy(() => import('@/pages/Energy/PlantFactory'));
const RooftopPhotovoltaic = lazy(() => import('@/pages/Energy/RooftopPhotovoltaic'));
const SurfacePhotovoltaic = lazy(() => import('@/pages/Energy/SurfacePhotovoltaic'));

const routerConfig = [
  {
    path: '/user',
    component: UserLayout,
    children: [
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/register',
        component: Register,
      },
      {
        path: '/',
        redirect: '/user/login',
      },
      {
        component: Exception,
      },
    ],
  },
  {
    path: '/alarm',
    component: BasicLayoutAlarm,
    children: [
      {
        path: '/warning/info',
        component: WarningInfo,
      },
      {
        path: '/health/monitoring',
        component: HealthMonitoring,
      },
      {
        path: '/video/monitoring',
        component: VideoMonitoring,
      },
      {
        path: '/data/analysis',
        component: DataAnalysis,
      },
      {
        path: '/',
        redirect: '/alarm/warning/info',
      },
    ],
  },
  {
    path: '/energy',
    component: BasicLayoutEnergy,
    children: [
      {
        path: '/farmland/photovoltaic',
        component: FarmlandPhotovoltaic,
      },
      {
        path: '/surface/photovoltaic',
        component: SurfacePhotovoltaic,
      },
      {
        path: '/rooftop/photovoltaic',
        component: RooftopPhotovoltaic,
      },
      {
        path: '/home/photovoltaic',
        component: HomePhotovoltaic,
      },
      {
        path: '/charging/pile',
        component: ChargingPile,
      },
      {
        path: '/plant/factory',
        component: PlantFactory,
      },
      {
        path: '/',
        redirect: '/energy/farmland/photovoltaic',
      },
    ],
  },
  {
    path: '/',
    component: Exception,
  },
];
export default routerConfig;
