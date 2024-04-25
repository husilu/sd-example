import { Button, Form, Input, Select, message } from 'antd';
import Api from '../../api/user';
import { useSelector } from 'react-redux';
const { Option } = Select;

const App = () => {
    const user = useSelector(state => state.auth.user);
    const [messageApi, contextHolder] = message.useMessage();
    const onFinish = (values) => {
        Api.EditApi(values).then((res)=>{
            if (res.data) {
                messageApi.open({
                    type: 'success',
                    content: '修改成功！',
                });
            }
        })
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
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
            initialValues={{
                username: user.name,
                email: user.email
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
              <Form.Item
                  label="用户名"
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
                  label="密码"
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
                  wrapperCol={{
                      offset: 8,
                      span: 16,
                  }}
              >
                  <Button type="primary" htmlType="submit">
                      确认
                  </Button>
              </Form.Item>
        </Form>
    </>
}

export default App