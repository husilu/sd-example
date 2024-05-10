import { Button, Form, Input, Select, message } from 'antd';
import { useImperativeHandle, useState} from 'react';
import Api from '../../api/user';

const App = (props) => {
    const { childRef, toLogin } = props;
    const [loading, setloading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    useImperativeHandle(childRef, () => ({
        resetForm
    }))

    const onFinish = (values) => {
        setloading(true)
        let obj = {
            name: values.name,
            password: values.password,
            email: values.email,
            phone: values.phone
        }
        Api.registerApi(obj).then((res)=>{
            // localStorage.setItem('token', '1')
            messageApi.open({
                type: 'success',
                content: '注册成功！',
            });
            toLogin(values.name);
            setloading(false)
        })
        // toLogin(values.name);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const resetForm = () => {
        console.log('register reset')
    };

    return <>
     {contextHolder}
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
                        type: 'string'
                    }
                ]}
            >
                <Input
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
                <Button type="primary" htmlType="submit" disabled={loading} loading={loading}>
                    注册
                </Button>
            </Form.Item>
        </Form>
    </>
}

export default App;