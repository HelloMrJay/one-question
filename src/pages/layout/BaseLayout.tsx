import React, { useState, useEffect } from 'react';
import { Layout, Avatar } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import './index.less';
import Menu from '../../components/menu'
const { Header, Sider, Content } = Layout;

interface Prop {
  children: React.ReactNode;
}

const BaseLayout: React.FC<Prop> = (props) => {
  const [collapsed, toggleCollapsed] = useState(false);
  const [userInfo, setUserInfo] = useState({ avatar: '', name: '' });
  useEffect(() => {
    const userInfo = localStorage.getItem('USER_INFO')
    if (typeof userInfo === "string") {
      setUserInfo(JSON.parse(userInfo))
    }
  }, [])
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="global-sider-menu-logo">
          <span className="project-title">One Question</span>
        </div>
        <Menu />
      </Sider>
      <Layout>
        <Header className="site-layout-background-header" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => {
                toggleCollapsed(!collapsed);
              },
            }
          )}
          <span>
            <span className="user-info-name" style={{ paddingRight: '15px' }}>{userInfo.name}</span>
            <Avatar size={30} src={userInfo.avatar} />
          </span>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
