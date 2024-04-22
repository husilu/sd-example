// 导入所需组件
import Home from '../Views/Home/index'
import NotFound from "../Views/404"
import ImgManagement from "../Views/imgManagement"
import { UserOutlined, LaptopOutlined } from "@ant-design/icons";
import Login from "../Views/Login";
import UserEdit from '../Views/User/index';
export const routerList = [
    {
        path: '/',
        title: '首页',
        icon: LaptopOutlined,
        isMenu: true,
        element: <Home></Home>
    },
    {
        path: '/login',
        title: '登录',
        isMenu: false,
        icon: UserOutlined,
        element: <Login></Login>
    },
    {
        path: '/register',
        title: '注册',
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
        path: '/imgsManagement',
        title: '图库',
        isMenu: true,
        icon: UserOutlined,
        element: <ImgManagement />,
    },
    {
        path: '/useredit',
        title: '用户编辑',
        icon: UserOutlined,
        element: <UserEdit />,
    }
    // {
    //     path: "/AiDrawer",
    //     title: 'Ai画图',
    //     icon: FormatPainterOutlined,
    //     isMenu: true,
    //     element: <AiDrawer></AiDrawer>
    // }
]
