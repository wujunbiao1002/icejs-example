import * as React from 'react';
import { runApp, logger, getSearchParams } from 'ice';
import { Message } from '@alifd/next';
import LocaleProvider from '@/components/LocaleProvider';
import { getLocale } from '@/utils/locale';
import LoadingProvider from '@/components/LoadingProvider';
import Exception from '@/components/Exception';

const locale = getLocale();
const appConfig = {
  request: {
    // 可选的，全局设置 request 是否返回 response 对象，默认为 false
    withFullResponse: false,
    baseURL: '/api',
    headers: {
      a: '',
    },
    // ...RequestConfig 其他参数
    // 拦截器
    interceptors: {
      request: {
        onConfig: (config) => {
          // 发送请求前：可以对 RequestConfig 做一些统一处理
          // eslint-disable-next-line no-param-reassign
          config.headers = { b: '' };
          return config;
        },
        onError: (error) => {
          return Promise.reject(error);
        },
      },
      response: {
        onConfig: (response) => {
          if (response.data.status !== 200) {
            // 请求成功：可以做全局的 toast 展示，或者对 response 做一些格式化
            let message = '';
            switch (response.data.status) {
              case 400:
                message = '请求错误';
                break;
              case 401:
                message = '未授权';
                break;
              case 403:
                message = '拒绝访问';
                break;
              case 404:
                message = '请求出错';
                break;
              case 408:
                message = '请求超时';
                break;
              case 500:
                message = '服务器错误';
                break;
              case 501:
                message = '服务未实现';
                break;
              case 502:
                message = '网络错误';
                break;
              case 503:
                message = '服务不可用';
                break;
              case 504:
                message = '网络超时';
                break;
              default:
                message = `连接出错(${response.data.status})!`;
            }
            logger.info(message);
            Message.error(message);
          }
          return response;
        },
        onError: (error) => {
          // 请求出错：服务端返回错误状态码
          logger.info(error.response.data);
          logger.info(error.response.status);
          logger.info(error.response.headers);
          return Promise.reject(error);
        },
      },
    },
  },
  logger: {
    smartLoglevel: true,
  },
  router: {
    fallback: <LoadingProvider />,
  },
  app: {
    getInitialData: async () => {
      const searchParams = getSearchParams();
      logger.debug('app');
      logger.debug(searchParams);
      // 模拟服务端返回的数据
      // const data = await request('/api/auth');
      // const { role, starPermission, followPermission } = data;

      // 约定权限必须返回一个 auth 对象
      // 返回的每个值对应一条权限
      // return {
      //   auth: {
      //     superAdmin: role === 'superAdmin',
      //     admin: role === 'admin',
      //     guest: role === 'guest',
      //     starRepo: starPermission,
      //     followRepo: followPermission,
      //   },
      // };
      return {
        auth: {
          admin: true,
          guest: false,
        },
      };
    },
    auth: {
      // 可选的，设置无权限时的展示组件，默认为 null
      NoAuthFallback: () => <Exception statusCode={'401'} description={'无访问权限'} />,
      // 或者传递一个函数组件
      // NoAuthFallback: () => <div>没有权限..</div>
    },
    rootId: 'ice-container',
    addProvider: ({ children }) => <LocaleProvider locale={locale}>{children}</LocaleProvider>,
  },
};
runApp(appConfig);
