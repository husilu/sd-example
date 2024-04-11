import { Button, Checkbox, Form, Input } from 'antd';
import React from "react";
import {useNavigate} from 'react-router-dom'
import './index.css'

const onFinish = (values) => {
  console.log('Success:', values);
    window.location.href = window.location.origin + '/'
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
export default function Login() {
    const navigate = useNavigate()
  return (
      <div className="login-page">
          <Form
              name="basic"
              className="login-form"
              labelCol={{
                  span: 8,
              }}
              wrapperCol={{
                  span: 16,
              }}
              style={{
                  maxWidth: 600,
              }}
              initialValues={{
                  remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
          >
              <h3>请登录</h3>
              <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                      {
                          required: true,
                          message: 'Please input your username!',
                      },
                  ]}
              >
                  <Input />
              </Form.Item>

              <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                      {
                          required: true,
                          message: 'Please input your password!',
                      },
                  ]}
              >
                  <Input.Password />
              </Form.Item>

              <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                      offset: 8,
                      span: 16,
                  }}
              >
                  <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                  wrapperCol={{
                      offset: 8,
                      span: 16,
                  }}
              >
                  <Button type="primary" htmlType="submit">
                      Submit
                  </Button>
              </Form.Item>
          </Form>
      </div>

  )
};
