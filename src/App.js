import './App.css';
import LayoutPage from "./Layout/layout";
import Login from './Views/Login';
// 设置全局主题色
import { ConfigProvider } from 'antd';
// 导入路由依赖
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import Api from './api/user'
import { getUser } from './store/reducers/authReducer'; // 导入loginSuccess action
function App() {
    const isLoggedIn = useSelector(state => state.auth.token);
    const dispatch = useDispatch(); // 获取dispatch函数
    if (isLoggedIn) {
        Api.userDetail().then(res => {
            dispatch(getUser({ user: res.data }));
        })
    }
    // const isLoggedIn = false;
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#007bff',
                },
            }}
        >
            <div>
                <BrowserRouter>
                    {/* 使用/配置路由默认页；exact严格匹配 */}
                    <Routes>
                        <Route path="/*" element={isLoggedIn ? <LayoutPage /> : <Navigate to="/login" replace />} />
                        <Route path="/login" element={isLoggedIn ? <Navigate to="/" replace /> : <Login />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </ConfigProvider>
    );
}

export default App;
