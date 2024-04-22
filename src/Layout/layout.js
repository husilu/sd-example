import Router from '../router'
import { routerList } from '../router/routes'
import { Layout, Menu, theme } from 'antd';
import CustomHeader from '../Header/header';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './styles.module.scss';

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
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <Layout>
            <Header className={styles.header}>
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
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                        className={styles.content} // Add the CSS class from the styles module
                    >
                        <Router></Router>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default LayoutPage;
