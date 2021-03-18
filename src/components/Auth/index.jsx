import { useAuth, logger } from 'ice';

function Auth({ children, authKeys, fallback }) {
  const [auth] = useAuth();
  logger.debug('权限数据', auth);
  logger.debug('需要的权限', authKeys);
  // 判断是否有权限
  let hasAuth = false;
  for (const authKey in authKeys) {
    if (auth[authKeys[authKey]]) {
      hasAuth = true;
      break;
    }
  }
  logger.debug('权限结果', hasAuth);
  // 有权限时直接渲染内容
  if (hasAuth) {
    return children;
  } else {
    // 无权限时显示指定 UI
    return fallback || null;
  }
}

export default Auth;
