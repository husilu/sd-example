import './App.css';
import LayoutPage from "./Layout/layout";
import Login from './Views/Login';
// 设置全局主题色
import { ConfigProvider } from 'antd';
// 导入路由依赖
import { Route,BrowserRouter, Routes, Navigate } from 'react-router-dom'
import { useState } from 'react'

function App() {
  // 是否登录
  const isLoggedIn = true;
  return (
      <ConfigProvider
          theme={{
              token: {
                  colorPrimary: '#00b96b',
              },
          }}
      >
          <div>
              <BrowserRouter>
                  {/* 使用/配置路由默认页；exact严格匹配 */}
                  <Routes>
                      <Route path="/*" element={isLoggedIn ? <LayoutPage /> : <Navigate to="/login" replace />} />
                      <Route path="login" element={isLoggedIn ? <Navigate to="/" replace /> : <Login />} />
                  </Routes>
              </BrowserRouter>
          </div>
      </ConfigProvider>

  );
}

export default App;
