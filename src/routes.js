import { lazy } from 'ice';

import UserLayout from '@/layouts/UserLayout';
import BasicLayout from '@/layouts/BasicLayout';

// 应用路由
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
    ],
  },
  {
    path: '/',
    component: BasicLayout,
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
        redirect: '/warning/info',
      },
    ],
  },
];
export default routerConfig;
