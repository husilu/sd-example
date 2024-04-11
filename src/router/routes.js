// 导入所需组件
import Demo from '../Views/Demo/index'
import Home from '../Views/Home/index'
import NotFound from "../Views/404"
import UserManagement from "../Views/userManagement"
import {UserOutlined, LaptopOutlined} from "@ant-design/icons";
import Sonohara from "../Views/userManagement/sonohara";
import OceanEyes from "../Views/userManagement/oceanEyes";
import CloudS from "../Views/userManagement/clouds";
import Login from "../Views/Login";
export const routerList = [
    {
        path: '/',
        title: '首页',
        icon: LaptopOutlined,
        isMenu: true,
        element: <Home></Home>
    },
    {
        path: '/userLogin',
        title: '登录',
        isMenu: false,
        icon: UserOutlined,
        element: <Login></Login>
    },
    {
        path: '*',
        title: '404页面',
        isMenu: false,
        element: <NotFound></NotFound>
    },
    {
        path: '/userManagement',
        title: '成员中心',
        isMenu: true,
        icon: UserOutlined,
        element: <UserManagement />,
        children: [
            {
                path: '/oceanEyes',
                title: 'OceanEyes',
                isMenu: true,
                element: <OceanEyes />,
            },
            {
                path: '/sonohara',
                title: 'sonohara',
                isMenu: true,
                element: <Sonohara />,
            },
            {
                path: '/clouds',
                title: 'clouds',
                isMenu: true,
                element: <CloudS />,
            }
        ]
    }
]
