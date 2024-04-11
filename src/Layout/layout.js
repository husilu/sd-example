import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import Router from '../router'
import { routerList } from '../router/routes'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import CustomHeader from '../Header/header';
import React from 'react';
// import history from "../utils/history";
import { useNavigate, useInRouterContext } from 'react-router-dom';
const { Header, Content, Sider } = Layout;

const menu = routerList.filter(route => route.isMenu).map((route, index) => {
    const key = String(index + 1);
    return {
        key: route.path,
        icon: React.createElement(route.icon),
        label: route.title,
        children: route.children ? route.children.map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: _.path,
                label: _.title,
            };
        }) : null
    };
});
const LayoutPage = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const navigate = useNavigate()
    function clickMenu({keyPath, key}) {
        navigate({pathname: key})
    }
    return (
        <Layout>
            <Header className="header">
                <CustomHeader />
            </Header>
            <Layout>
                <Sider
                    width={200}
                    style={{
                        background: colorBgContainer,
                    }}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: 'calc(100vh - 64px)',
                            borderRight: 0,
                        }}
                        items={menu}
                        onClick={clickMenu}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        <Router></Router>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default LayoutPage;
