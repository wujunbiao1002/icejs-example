import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'ice';
import { Nav } from '@alifd/next';
import { asideMenuConfig } from '../menuConfig';
import Img from '@icedesign/img';
import navFooter from '../images/navFooter.png';

const { SubNav } = Nav;
const NavItem = Nav.Item; // mock the auth object
// Ref: https://ice.work/docs/guide/advance/auth#%E5%88%9D%E5%A7%8B%E5%8C%96%E6%9D%83%E9%99%90%E6%95%B0%E6%8D%AE

const AUTH_CONFIG = {
  admin: true,
  guest: false,
};

function getNavMenuItems(menusData, initIndex, auth) {
  if (!menusData) {
    return [];
  }

  return menusData
    .filter((item) => {
      let roleAuth = true; // if item.roles is [] or undefined, roleAuth is true

      if (auth && item.auth && item.auth instanceof Array) {
        if (item.auth.length) {
          roleAuth = item.auth.some((key) => auth[key]);
        }
      }

      return item.name && !item.hideInMenu && roleAuth;
    })
    .map((item, index) => {
      return getSubMenuOrItem(item, `${initIndex}-${index}`, auth);
    });
}

function getSubMenuOrItem(item, index, auth) {
  if (item.children && item.children.some((child) => child.name)) {
    const childrenItems = getNavMenuItems(item.children, index, auth);
    if (childrenItems && childrenItems.length > 0) {
      const name = item.imageIcon ? (<div><Img
        src={item.imageIcon}
        height="15"
        style={{
          marginRight: 20,
          position: 'relative',
          bottom: -2,
        }}
      />{item.name}</div>) : <div>{item.name}</div>;

      const subNav = (
        <SubNav key={item.name} icon={item.icon} label={name}>
          {childrenItems}
        </SubNav>
      );
      return subNav;
    }

    return null;
  }
  const navItem = (
    <NavItem key={item.path} icon={item.icon}>
      {item.imageIcon ? <Img
        src={item.imageIcon}
        height="12"
        style={{
          marginRight: 15,
        }}
      /> : null}
      <Link to={item.path}>{item.name}</Link>
    </NavItem>
  );
  return navItem;
}

const Navigation = (props, context) => {
  const [openKeys, setOpenKeys] = useState([]);
  const { location } = props;
  const { pathname } = location;
  const { isCollapse } = context;
  useEffect(() => {
    const curSubNav = asideMenuConfig.find((menuConfig) => {
      return menuConfig.children && checkChildPathExists(menuConfig);
    });

    function checkChildPathExists(menuConfig) {
      return menuConfig.children.some((child) => {
        return child.children ? checkChildPathExists(child) : child.path === pathname;
      });
    }

    if (curSubNav && !openKeys.includes(curSubNav.name)) {
      setOpenKeys([...openKeys, curSubNav.name]);
    }
  }, [pathname]);
  return (
    <Nav
      type="normal"
      openKeys={openKeys}
      selectedKeys={[pathname]}
      defaultSelectedKeys={[pathname]}
      embeddable
      activeDirection="right"
      iconOnly={isCollapse}
      hasArrow={false}
      mode={isCollapse ? 'popup' : 'inline'}
      onOpen={setOpenKeys}
    >
      {getNavMenuItems(asideMenuConfig, 0, AUTH_CONFIG)}
      <Img height={165} style={{ position: 'absolute', bottom: 0 }} src={navFooter} />
    </Nav>
  );
};

Navigation.contextTypes = {
  isCollapse: PropTypes.bool,
};
const PageNav = withRouter(Navigation);
export default PageNav;
