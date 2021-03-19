import React from 'react';
import { Avatar, Overlay, Menu, Icon } from '@alifd/next';
import styles from './index.module.scss';
import avatarImg from '../../../BasicLayoutAlarm/images/avatar.png';
import { Link } from 'ice';

const { Item } = Menu;
const { Popup } = Overlay;

const HeaderAvatar = (props) => {
  const {
    name,
    avatar,
  } = props;
  return (
    <Popup
      trigger={
        <div className={styles.headerAvatar}>
          <Avatar size="small" src={avatar} alt="用户头像" />
          <span
            style={{
              marginLeft: 10,
            }}
          >
            {name}
          </span>
          &nbsp;&nbsp;
          {/* <Button><Link to={'/'}>退出</Link></Button> */}
        </div>
      }
      triggerType="click"
    >
      <div className={styles.avatarPopup}>
        {/* <UserProfile {...props} /> */}
        <Menu className={styles.menu}>
          {/* <Item> */}
          {/*  <Icon size="small" type="account"/> */}
          {/*  个人设置 */}
          {/* </Item> */}
          <Item>
            <Link to={'/'} title={'修改密码'}>
              <Icon size="small" type="set" />
              修改密码
            </Link>
          </Item>
          <Item>
            <Link to={'/'} title={'退出登录'}>
              <Icon size="small" type="exit" />
              退出登录
            </Link>
          </Item>
        </Menu>
      </div>
    </Popup>
  );
};

HeaderAvatar.defaultProps = {
  name: JSON.parse(localStorage.getItem('userInfo')) ? JSON.parse(localStorage.getItem('userInfo')).loginName : 'Admin',
  mail: 'Admin@gmail.com',
  avatar: avatarImg,
};
export default HeaderAvatar;
