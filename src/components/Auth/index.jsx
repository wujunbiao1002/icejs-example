import { useAuth } from 'ice';
import Exception from '@/components/Exception';

function Auth({ children, authKey, fallback }) {
  const [auth] = useAuth();
  // 判断是否有权限
  const hasAuth = auth[authKey];

  // 有权限时直接渲染内容
  if (hasAuth) {
    return children;
  } else {
    // 无权限时显示指定 UI
    return fallback || <Exception statusCode="401" description="抱歉，你没有权限访问该页面" />;
  }
}

export default Auth;
