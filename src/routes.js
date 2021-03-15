import DataAnalysis from '@/pages/DataAnalysis';
import HealthMonitoring from '@/pages/HealthMonitoring';
import VideoMonitoring from '@/pages/VideoMonitoring';
import WarningInfo from '@/pages/WarningInfo';

// Template
import UserLayout from '@/layouts/UserLayout';
import Login from '@/pages/Template/Login';
import Register from '@/pages/Template/Register';
import BasicLayout from '@/layouts/BasicLayout';
import Solution from '@/pages/Template/Solution';
import Analysis from '@/pages/Template/Analysis';
import Monitor from '@/pages/Template/Monitor';
import Workplace from '@/pages/Template/Workplace';
import FormBasic from '@/pages/Template/FormBasic';
import FormTwo from '@/pages/Template/FormTwo';
import FormThree from '@/pages/Template/FormThree';
import FormFour from '@/pages/Template/FormFour';
import FormStep from '@/pages/Template/FormStep';
import FormClassified from '@/pages/Template/FormClassified';
import FormHierarchical from '@/pages/Template/FormHierarchical';
import FormGroup from '@/pages/Template/FormGroup';
import FlowGroup from '@/pages/Template/FlowGroup';
import BasicDetailPage from '@/pages/Template/BasicDetailPage';
import Advanced from '@/pages/Template/Advanced';
import BasicListPage from '@/pages/Template/BasicListPage';
import CardListPage from '@/pages/Template/CardListPage';
import FusionFilterTable from '@/pages/Template/FusionFilterTable';
import FusionMutilcolTable from '@/pages/Template/FusionMutilcolTable';
import FusionSinglecolTable from '@/pages/Template/FusionSinglecolTable';
import FusionExpandTable from '@/pages/Template/FusionExpandTable';
import FusionActionTable from '@/pages/Template/FusionActionTable';
import FusionMergecellTable from '@/pages/Template/FusionMergecellTable';
import FusionSingletreeTable from '@/pages/Template/FusionSingletreeTable';
import FusionDialogTable from '@/pages/Template/FusionDialogTable';
import TableListPage from '@/pages/Template/TableListPage';
import FeedbackFail from '@/pages/Template/FeedbackFail';
import FeedbackSuccess from '@/pages/Template/FeedbackSuccess';
import FeedbackForbidden from '@/pages/Template/FeedbackForbidden';
import FeedbackNotFound from '@/pages/Template/FeedbackNotFound';
import FeedbackServerError from '@/pages/Template/FeedbackServerError';
import Settings from '@/pages/Template/Settings';
import Person from '@/pages/Template/Person';

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
      // Template
      {
        path: '/solution',
        component: Solution,
      },
      {
        path: '/dashboard/analysis',
        component: Analysis,
      },
      {
        path: '/dashboard/monitor',
        component: Monitor,
      },
      {
        path: '/dashboard/workplace',
        component: Workplace,
      },
      {
        path: '/form/basic',
        component: FormBasic,
      },
      {
        path: '/form/two',
        component: FormTwo,
      },
      {
        path: '/form/three',
        component: FormThree,
      },
      {
        path: '/form/four',
        component: FormFour,
      },
      {
        path: '/form/step',
        component: FormStep,
      },
      {
        path: '/form/classified',
        component: FormClassified,
      },
      {
        path: '/form/hierarchical',
        component: FormHierarchical,
      },
      {
        path: '/form/group',
        component: FormGroup,
      },
      {
        path: '/form/flow',
        component: FlowGroup,
      },
      {
        path: '/detail/basic',
        component: BasicDetailPage,
      },
      {
        path: '/detail/advanced',
        component: Advanced,
      },
      {
        path: '/list/basic',
        component: BasicListPage,
      },
      {
        path: '/list/card',
        component: CardListPage,
      },
      {
        path: '/list/table/filter',
        component: FusionFilterTable,
      },
      {
        path: '/list/table/mutilcol',
        component: FusionMutilcolTable,
      },
      {
        path: '/list/table/singlecol',
        component: FusionSinglecolTable,
      },
      {
        path: '/list/table/expand',
        component: FusionExpandTable,
      },
      {
        path: '/list/table/action',
        component: FusionActionTable,
      },
      {
        path: '/list/table/mergecell',
        component: FusionMergecellTable,
      },
      {
        path: '/list/table/singletree',
        component: FusionSingletreeTable,
      },
      {
        path: '/list/table/dialog',
        component: FusionDialogTable,
      },
      {
        path: '/list/table',
        component: TableListPage,
      },
      {
        path: '/feedback/fail',
        component: FeedbackFail,
      },
      {
        path: '/feedback/success',
        component: FeedbackSuccess,
      },
      {
        path: '/feedback/403',
        component: FeedbackForbidden,
      },
      {
        path: '/feedback/404',
        component: FeedbackNotFound,
      },
      {
        path: '/feedback/500',
        component: FeedbackServerError,
      },
      {
        path: '/settings',
        component: Settings,
      },
      {
        path: '/person',
        component: Person,
      },
      {
        path: '/',
        redirect: '/warning/info',
      },
    ],
  },
];
export default routerConfig;
