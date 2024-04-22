import { Col, Row, Tabs } from 'antd'
import Model from './Model/index.js'
import Concepts from './Concepts/index'

export default () => {
    const items = [
        {
          key: 'Model',
          label: 'Model',
          children: <Model></Model>,
        },
        {
          key: 'Concepts',
          label: 'Concepts',
          children: <Concepts></Concepts>
        },
        {
          key: 'Parameters',
          label: 'Parameters',
          children: <span>Model</span>
        },
    ];

    const onChange = () => {

    }

    return <div>
        <Row>
            <Col span={12}>
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} type="card"/>
            </Col>
            <Col span={12}>
                
            </Col>
     </Row>
    </div>
}