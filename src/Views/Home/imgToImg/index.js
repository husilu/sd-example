import { Tabs } from "antd";

import { InputNumber, Slider, Col, Row, Input, Image, Spin, Button } from 'antd';

import Generation from './Generation';

import styles from './style.module.scss';

import { useState } from 'react';

const App = () => {
    const [imgSrc, setimgSrc] = useState('')
    const [valueLoading, setvalueLoading] = useState(false)
    const [donwLoading, setdonwLoading] = useState(false);
    const items = [{
        key: 'Generation',
        label: 'Generation',
        children: <Generation></Generation>,
    }]
    const onChange = () => {
        
    }

    const downLoadHandler = () => {

    }

    return <>
        <div className={styles.generate}>
            Gengerate
        </div>
        <Row gutter={10}>
            <Col span={12}>
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} type="card"/>
            </Col>
            <Col span={12}>
            <Button type="primary" onClick={() => downLoadHandler()} style={{ marginBottom: "10px"}} loading={donwLoading} disabled={donwLoading}>下载</Button>
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
    </>
}

export default App;