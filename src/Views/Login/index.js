import { useRef, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { Tabs } from "antd";
import './index.css'
import Login from './loginForm'
import Register from './registerForm'

export default function LoginOrRegister() {
    const navigate = useNavigate()
    const loginRef = useRef()
    const registerRef = useRef()
    const [tabValue, settabValue] = useState("login");
    const items = [
        {
            key: 'login',
            label: '登录',
            children: <Login childRef={loginRef} ></Login>,
          },
          {
            key: 'register',
            label: '注册',
            children: <Register childRef={registerRef} toLogin={useState("login")}></Register>,
        },
    ]
    const onChange = (activeKey) => {
        // Execute methods in Login and Register components based on the activeKey
        if (activeKey === 'login') {
            loginRef.current?.resetForm()
        } else if (activeKey === 'register') {
            registerRef.current?.resetForm()
        }
    }
  return (
      <div className="login-page">
           <div className="login-form">
                <Tabs value={tabValue} items={items} onChange={onChange} type="card"/>
           </div>
      </div>
  )
};
