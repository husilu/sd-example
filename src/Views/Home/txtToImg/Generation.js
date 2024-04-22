import { Form } from "antd";


import { InputNumber, Slider, Col, Row, Input, Image } from 'antd';

import React, { useState } from 'react';

import styles from './style.module.scss';

import { Button, Flex } from 'antd';

const downLoadHandler = () => {
    console.log('下载')
}

const App = () => {

    const [inputWidth, setInputWidth] = useState(512)

    const [inputHeight, setInputHeight] = useState(512)

    const onChange = (newValue) => {
        setInputWidth(newValue);
    }

    const onChange2 = (newValue) => {
        setInputHeight(newValue);
    }

    const onFinish = () => {

    }
    const onFinishFailed = () => {

    }
    return <div>
        <Row>
            <Col span={15}>
                <Form
                    name="basic"
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Width"
                        name="Width"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Width!'
                            },
                        ]}
                    >
                        <Row>
                            <Col span={12}>
                                <Slider
                                    onChange={onChange}
                                    min={64}
                                    max={2048}
                                    value={typeof inputWidth === 'number' ? inputWidth : 0}
                                />
                            </Col>
                            <Col span={12}>
                                <InputNumber
                                    onChange={onChange}
                                    min={64}
                                    max={2048}
                                    style={{
                                        margin: '0 16px',
                                    }}
                                    value={inputWidth}
                                />
                            </Col>
                        </Row>
                    </Form.Item>

                    <Form.Item
                        label="Height"
                        name="Height"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Height!'
                            },
                        ]}
                    >
                        <Row>
                            <Col span={12}>
                                <Slider
                                    onChange={onChange2}
                                    min={64}
                                    max={2048}
                                    value={typeof inputHeight === 'number' ? inputHeight : 0}
                                />
                            </Col>
                            <Col span={12}>
                                <InputNumber
                                    onChange={onChange2}
                                    min={64}
                                    max={2048}
                                    style={{
                                        margin: '0 16px',
                                    }}
                                    value={inputHeight}
                                />
                            </Col>
                        </Row>
                    </Form.Item>
                </Form>
            </Col>
            <Col span={9}>
            <Image.PreviewGroup
                items={[
                'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
                'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
                ]}
            >
                <Button type="primary" onClick={() => downLoadHandler(2)} style={{ marginBottom: "10px"}}>下载</Button>
                <Image
                    width={'100%'}
                    src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                />
            </Image.PreviewGroup>               
            </Col>
        </Row>

    </div>
}

export default App