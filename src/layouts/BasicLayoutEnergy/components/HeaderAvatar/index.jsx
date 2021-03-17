import React from 'react';
import { Avatar, Button, Overlay, Menu, Icon } from '@alifd/next';
import styles from './index.module.scss';
import avatarImg from '../../images/avatar.png';

const { Item } = Menu;
const { Popup } = Overlay;

const UserProfile = ({
  name,
  avatar,
  mail,
}) => {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <Avatar src={avatar} alt="用户头像" />
      </div>
      <div className={styles.content}>
        <h4>{name}</h4>
        <span>{mail}</span>
      </div>
    </div>
  );
};

const HeaderAvatar = (props) => {
  const { name, avatar } = props;
  return (
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
      <Button style={{ borderRadius: 20 }}>退出</Button>
    </div>
  /* <Popup
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
          <Button>退出</Button>
        </div>
      }
      triggerType="click"
    >
      <div className={styles.avatarPopup}>
        <UserProfile {...props} />
        <Menu className={styles.menu}>
          <Item>
            <Icon size="small" type="account" />
            个人设置
          </Item>
          <Item>
            <Icon size="small" type="set" />
            系统设置
          </Item>
          <Item>
            <Icon size="small" type="exit" />
            退出
          </Item>
        </Menu>
      </div>
    </Popup> */
  );
};

HeaderAvatar.defaultProps = {
  name: 'Admin，你好',
  mail: 'Admin@gmail.com',
  avatar: avatarImg,
};
export default HeaderAvatar;
