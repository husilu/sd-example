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
    const [nameVal, setnameVal] = useState("");
    const settabValuetoLogin = (val) => {
        setnameVal(val)
        settabValue('login')
    }
    const items = [
        {
            key: 'login',
            label: '登录',
            children: <Login childRef={loginRef} name={nameVal}></Login>,
          },
          {
            key: 'register',
            label: '注册',
            children: <Register childRef={registerRef} toLogin={settabValuetoLogin}></Register>,
        },
    ]
    
    const onChange = (activeKey) => {
        settabValue(activeKey)
        if (activeKey === 'login') {
            loginRef.current?.resetForm()
        } else if (activeKey === 'register') {
            registerRef.current?.resetForm()
        }
    }
  return (
      <div className="login-page">
           <div className="login-form">
                <Tabs activeKey={tabValue} items={items} onChange={onChange} type="card"/>
           </div>
      </div>
  )
};
