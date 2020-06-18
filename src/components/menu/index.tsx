import {
  UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import React from "react";
import { useHistory } from 'react-router-dom';

const MenuComponent: React.FC = () => {
  const history = useHistory();
  return (
    <Menu theme="dark" mode="inline" defaultOpenKeys={['user']} defaultSelectedKeys={['list']}>
      <Menu.SubMenu
        key="user"
        title={
          <span>
            <UserOutlined />
            <span>用户信息</span>
          </span>
        }
      >
        <Menu.Item key="list" onClick={() => history.push("/user/list")}>
          用户列表
        </Menu.Item>
        <Menu.Item key="2">发布统计</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}

export default MenuComponent;
