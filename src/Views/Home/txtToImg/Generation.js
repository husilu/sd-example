import { Form } from "antd";


import { InputNumber, Slider, Col, Row, Image, Spin } from 'antd';

import React, { useState } from 'react';

import styles from './style.module.scss';

import { Button } from 'antd';

import Api from '../../../api/img'

const App = (props) => {

    const { imgSrc, valueLoading, inputWidth, inputHeight, setInputWidthHandler, setInputHeightHandler, type } = props;

    const [donwLoading, setdonwLoading] = useState(false);

    const imgDownloadHrefStr = imgSrc.split('/')
    const imgDownloadHref = imgDownloadHrefStr[imgDownloadHrefStr.length - 1]

    const downLoadHandler = () => {
        // console.log('下载')
        setdonwLoading(true)
        Api.download(type, '1714032806933.png').then(res => {
            console.log("res", res)
            setdonwLoading(false)
        })
    }

    const onChange = (newValue) => {
        setInputWidthHandler(newValue);
    }

    const onChange2 = (newValue) => {
        setInputHeightHandler(newValue);
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
                <Button type="primary" onClick={() => downLoadHandler(imgDownloadHref)} style={{ marginBottom: "10px"}} loading={donwLoading} disabled={donwLoading}>下载</Button>
                <Spin tip="Loading" spinning={valueLoading}>
                    {imgSrc ? <Image
                        width={'100%'}
                        src={imgSrc}
                    /> : <div className={styles.imgbox}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                        </div>}
                </Spin>
            </Col>
        </Row>

    </div>
}

export default App