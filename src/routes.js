import { lazy } from 'ice';

import UserLayout from '@/layouts/UserLayout';
import BasicLayoutAlarm from '@/layouts/BasicLayoutAlarm';
import BasicLayoutEnergy from '@/layouts/BasicLayoutEnergy';

// 应用路由
const Exception = lazy(() => import('@/components/Exception'));
const Login = lazy(() => import('@/pages/Login'));
const Register = lazy(() => import('@/pages/Register'));
const WarningInfo = lazy(() => import('@/pages/WarningInfo'));
const DataAnalysis = lazy(() => import('@/pages/DataAnalysis'));
const HealthMonitoring = lazy(() => import('@/pages/HealthMonitoring'));
const VideoMonitoring = lazy(() => import('@/pages/VideoMonitoring'));

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
        path: '/energy',
        component: Exception,
      },
      {
        path: '/health/monitoring',
        component: Exception,
      },
      {
        path: '/video/monitoring',
        component: Exception,
      },
      {
        path: '/data/analysis',
        component: Exception,
      },
      {
        path: '/exception',
        component: Exception,
      },
      {
        path: '/',
        redirect: '/energy/energy',
      },
    ],
  },
];
export default routerConfig;
