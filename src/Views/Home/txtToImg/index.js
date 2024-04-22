import { Col, Row } from 'antd';

import { Input } from 'antd';

import React, { useState } from 'react';

import styles from './style.module.scss';

import { Tabs } from "antd";

import Generation from './Generation';

import Api from '../../../api/img'

const { TextArea } = Input;


const App = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const actionBts = [
        { name: "", icon: "" }, { name: "", icon: "" }, { name: "", icon: "" }
    ]
    const items = [{
        key: 'Generation',
        label: 'Generation',
        children: <Generation></Generation>,
    }]

    const createPicHandler = () => {
        const param = {
            prompt: value1,
            negativePrompt: value2
        }
        Api.txtToimg(param).then(res => {
            console.log('res', res)
        })
    }

    return <div>
        <Row justify="space-between" gutter={1} className='mb10'>
            <Col span={18} className="gutter-row">
                <TextArea
                    value={value1}
                    onChange={(e) => setValue1(e.target.value)}
                    placeholder="Prompt"
                    autoSize={{ minRows: 3, maxRows: 5 }}
                    className="mb10"
                />
                <TextArea
                    value={value2}
                    onChange={(e) => setValue2(e.target.value)}
                    placeholder="Negative prompt"
                    autoSize={{ minRows: 3, maxRows: 5 }}
                />
            </Col>
            <Col flex="auto" className={styles.generate} onClick={createPicHandler}>
                <div>Generate</div>
            </Col>
        </Row>
        <Tabs defaultActiveKey="1" items={items} type="card" />
    </div>
}

export default App