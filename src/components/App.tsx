import React from 'react';
import './App.scss';
import MapComponent from './map/map';
import Timer from './timer/timer';
import Form from '../components/form/form'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Route, Switch, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {RootState} from '../redux/store'

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {

  const [collapsed, setcollapsed] = React.useState<boolean>(true)

  const toggle = () => {
    setcollapsed(!collapsed)
  }

  const coordinates = useSelector((state: RootState) => state.main.coordinates)
  const time = useSelector((state: RootState) => state.main.time)

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
          <NavLink to="/test/">
                <span>Main</span>
              </NavLink>
            </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <NavLink to="/test/map">
                <span>Map</span>
              </NavLink>
            </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
          <NavLink to="/test/timer">
                <span>Timer</span>
              </NavLink>
            </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Switch>
            <Route exact path="/test">
              <Form />
            </Route>
            <Route path="/test/map">
              <MapComponent data={coordinates} />
            </Route>
            <Route path="/test/timer">
              <Timer data={time} />
            </Route>
          </Switch>
          
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
