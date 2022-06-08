import React, { useState } from 'react';
import { Shell, ConfigProvider } from '@alifd/next';
import PageNav from '@/layouts/BasicLayoutAlarm/PageNav';
import GlobalSearch from '@/layouts/BasicLayout/components/GlobalSearch';
import Notice from '@/layouts/BasicLayout/components/Notice';
import SolutionLink from '@/layouts/BasicLayout/components/SolutionLink';
import HeaderAvatar from '@/layouts/BasicLayout/components/HeaderAvatar';
import Logo from '@/layouts/BasicLayout/components/Logo';
import Footer from '@/layouts/BasicLayout/components/Footer';
import heardImg from '@/layouts/BasicLayoutAlarm/images/heardImg.png';

(function () {
  const throttle = function (type, name, obj = window) {
    let running = false;

    const func = () => {
      if (running) {
        return;
      }

      running = true;
      requestAnimationFrame(() => {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };

    obj.addEventListener(type, func);
  };

  if (typeof window !== 'undefined') {
    throttle('resize', 'optimizedResize');
  }
})();

export default function BasicLayout({ children }) {
  const getDevice = (width) => {
    const isPhone = typeof navigator !== 'undefined' && navigator && navigator.userAgent.match(/phone/gi);

    if (width < 680 || isPhone) {
      return 'phone';
    } else if (width < 1280 && width > 680) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  };

  const [device, setDevice] = useState(getDevice(NaN));

  if (typeof window !== 'undefined') {
    window.addEventListener('optimizedResize', (e) => {
      const deviceWidth = (e && e.target && e.target.innerWidth) || NaN;
      setDevice(getDevice(deviceWidth));
    });
  }

  return (
    <ConfigProvider device={device}>
      <Shell
        style={{
          minHeight: '100vh',
        }}
        type="light"
        fixedHeader={false}
      >
        <Shell.Branding>
          <Logo image={heardImg} text="" />
        </Shell.Branding>
        {/* <Shell.Navigation */}
        {/*  direction="hoz" */}
        {/*  style={{ */}
        {/*    marginRight: 10, */}
        {/*  }} */}
        {/* > */}
        {/*  <GlobalSearch /> */}
        {/* </Shell.Navigation> */}
        <Shell.Action>
          {/* <Notice /> */}
          <SolutionLink />
          <HeaderAvatar />
        </Shell.Action>
        <Shell.Navigation style={{ overflow: 'hidden' }}>
          <PageNav />
        </Shell.Navigation>

        <Shell.Content>{children}</Shell.Content>
        {/* <Shell.Footer> */}
        {/*  <Footer /> */}
        {/* </Shell.Footer> */}
      </Shell>
    </ConfigProvider>
  );
}
