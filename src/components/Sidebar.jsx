import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { LuLayoutDashboard } from "react-icons/lu";
import { Layout, Menu, Button, theme, Typography } from "antd";
import { Link } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const Sidebar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  console.log(collapsed);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
      key: '1',
      icon: <LuLayoutDashboard />,
      label: 'Dashboard',
      to: '/dashboard',
    },
    {
      key: '2',
      icon: <VideoCameraOutlined />,
      label: 'My Folder',
      to: '/folder',
    },
    {
      key: '3',
      icon: <UploadOutlined />,
      label: 'nav 3',
      to: '/',
    },
  ];

  return (
    <Layout className="h-screen">
      <Sider
        className="px-3 py-4"
        width={250}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="px-3 mb-5 flex justify-center items-center">
          {collapsed ? (
            <h1 className="text-3xl font-bold text-white">FM</h1>
          ) : (
            <h1 className="text-3xl font-bold text-white">File Manager</h1>
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
        {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          {items.map(item => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.to}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu> */}
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </Header>
        <Content
          className='my-6 mx-4'
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
