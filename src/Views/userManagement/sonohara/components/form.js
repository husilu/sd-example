import React, {useState} from "react";
import './index.css'
import { Input, Form, Row, Col, Select, Button, Radio } from 'antd';
const { Option } = Select
const { Search } = Input
const sexOptions = [
    {
        label:" 男",
        value: '0'
    },
    {
        label:" 女",
        value: '1'
    }
]

export default function UserForm(props) {
    const [params, updateParams] = useState({
        name: undefined,
        sex: undefined,
        status: undefined // 启用状态 1启用0禁用
    })
    const {getFilterParam} = props
    function searchClick() {
        getFilterParam(params)
    }
    function searchClear() {
    }
    function updateFn(name, value) {
        console.log(name, value)
        params[name] =value
    }
    return(
        <React.Fragment>
            <Form
                name="basic"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 16,
                }}
                layout="horizontal"
                style={{
                    maxWidth: '100%'
                }}
            >
                <Row>
                    <Col span={6}>
                        <Form.Item
                            label="姓名"
                            name="name"
                        >
                            <Input
                                placeholder="输入姓名查询"
                                value={params.name}
                                onChange={e=> updateFn('name', e.target.value)} />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="性别"
                            name="username"
                        >
                            <Select
                                placeholder="请选择性别"
                                onChange={val=> updateFn('sex', val)}
                                value={params.sex}
                                allowClear
                            >
                                {sexOptions.map((item)=>
                                 (<Option value={item.value} key={item.value}>{item.label}</Option>)
                            )}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label="启用状态"
                            name="status"
                        >
                            <Radio.Group onChange={val=> updateFn('status', val.target.value)} value={params.status}>
                                <Radio value={1}>启用</Radio>
                                <Radio value={0}>禁用</Radio>
                                <Radio value={undefined}>全部</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Button type="primary" onClick={searchClick}>搜索</Button>
                        <Button style={{marginLeft: '8px'}} onClick={searchClear}>重置</Button>
                    </Col>
                </Row>
            </Form>

        </React.Fragment>
    )
}



