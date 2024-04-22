import { Button, Form, Input, Select } from 'antd';
import { useImperativeHandle } from 'react';
import Api from '../../api/user';
const { Option } = Select;

const App = (props) => {
    const { childRef } = props;

    useImperativeHandle(childRef, () => ({
        resetForm
    }))

    const onFinish = (values) => {
        Api.loginApi(values).then((res)=>{
            localStorage.setItem('token', '1')
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const resetForm = () => {
        console.log('register reset')
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
                defaultValue="86"
            >
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );
    return <>
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <h3>请注册</h3>
            <Form.Item
                label="用户名"
                name="name"
                rules={[
                    {
                        required: true,
                        message: '请输入用户名!',
                    },
                    {
                        pattern: /^[A-Za-z0-9]+$/,
                        message: '用户名只允许输入数字和字母!',
                    }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="密码"
                name="password"
                rules={[
                    {
                        required: true,
                        message: '请输入密码!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                name="phone"
                label="手机号"
                rules={[
                    {
                        type: 'number'
                    },
                ]}
            >
                <Input
                    addonBefore={prefixSelector}
                    style={{
                        width: '100%',
                    }}
                />
            </Form.Item>
            <Form.Item
                name="email"
                label="邮箱"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    注册
                </Button>
            </Form.Item>
        </Form>
    </>
}

export default App;