import { Tabs } from "antd";

import { Col, Row, Image, Spin, Button, message } from 'antd';

import Generation from './Generation';

import styles from './style.module.scss';

import React, { useState } from 'react';

import Api from '../../../api/img';
import store from "../../../store";

const App = () => {
    const [imgSrc, setimgSrc] = useState('')
    const [valueLoading, setvalueLoading] = useState(false)
    const [donwLoading, setdonwLoading] = useState(false);
    const [originImg, setoriginImg] = useState("");
    const setoriginImgHandler = (val) => {
        setoriginImg(val)
    }

    const onChange = () => {
        
    }
    const imgDownloadHrefStr = imgSrc.split('/')
    const imgDownloadHref = imgDownloadHrefStr[imgDownloadHrefStr.length - 1]
    const downLoadHandler = () => {
        if(!imgSrc) {
            return message.error('请先生成图片！')
        }
        setdonwLoading(true)
        Api.download('img2img', imgDownloadHref).then(res => {
            console.log('res', res)
        })
    }

    const getImgHandler = () => {
        if (!originImg) {
            return message.error(`请上传图片!`);
        }
        setvalueLoading(true)
        Api.imgToimg({
            imgUrl: originImg
        }).then(res => {
            setimgSrc(res.data)
            setvalueLoading(false)
        })
    }

    const items = [{
        key: 'Generation',
        label: 'Generation',
        children: <Generation setoriginImgHandler={setoriginImgHandler} getImgHandler={getImgHandler}></Generation>,
    }]

    return <>
        <Spin spinning={valueLoading} onClick={getImgHandler}>
            <div className={styles.generate}>
                Gengerate
            </div>
        </Spin>
        <Row gutter={10}>
            <Col span={12}>
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} type="card"/>
            </Col>
            <Col span={12}>
                <a href={`http://124.71.223.180:8088/img/download/img2img?fileName=${imgDownloadHref}&token=${store.getState().auth.token}`}>
                    <Button type="primary" style={{marginBottom: "10px"}}
                            loading={donwLoading} disabled={donwLoading}>下载</Button>
                </a>

                <Spin tip="Loading" spinning={valueLoading}>
                    {imgSrc ? <Image
                        width={'100%'}
                        src={imgSrc}
                    /> : <div className={styles.imgbox}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"
                             fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                             strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                    </div>}
                </Spin>
            </Col>
        </Row>
    </>
}

export default App;