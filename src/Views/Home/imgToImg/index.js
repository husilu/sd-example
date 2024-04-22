import { Tabs } from "antd";

import { InputNumber, Slider, Col, Row, Input, Image } from 'antd';

import Generation from './Generation';

import styles from './style.module.scss';

const App = () => {
    const items = [{
        key: 'Generation',
        label: 'Generation',
        children: <Generation></Generation>,
    }]
    const onChange = () => {
        
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
            <Image.PreviewGroup
                items={[
                    'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                    'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
                    'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
                ]}
            >
                <Image
                    width={200}
                    src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                />
            </Image.PreviewGroup>   
            </Col>
        </Row>
    </>
}

export default App;