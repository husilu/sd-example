import { Button, Form, Input } from 'antd';
import Api from '../../api/user';
import { useImperativeHandle, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'; // 导入useDispatch hook
import { loginSuccess, getUser } from '../../store/reducers/authReducer'; // 导入loginSuccess action

const App = (props) => {
    const dispatch = useDispatch(); // 获取dispatch函数
    const { childRef, name } = props;
    const [loading, setloading] = useState(false);
    const [form] = Form.useForm();
    const onFinish = (values) => {
        setloading(true)
    Api.loginApi(values).then((res)=> {
        if (res.responseDesc === 'SUCCESS') {
            dispatch(loginSuccess({ token: res.data.token }));
            dispatch(getUser({user: res.data }))
            setloading(false)
        }
    }).catch(() => {
        setloading(false)
    })
}

useImperativeHandle(childRef, () => ({
    resetForm
}))

const onFinishFailed = (errorInfo) => {
};

const resetForm = () => {
};

useEffect(() => {
    form.setFieldsValue({
        name: name // 设置初始值
    });
}, [name]);

return <>
    <Form
        form={form}
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
        <h3>请登录</h3>
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
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
        >
            <Button type="primary" htmlType="submit" loading={loading}>
                登录
            </Button>
        </Form.Item>
    </Form>
</>
}

export default App;