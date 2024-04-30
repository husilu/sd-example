import { Col, Row, Tabs, Button, Image, Collapse } from 'antd'
import {useState} from 'react';
import Model from './Model/index.js'
import Concepts from './Concepts/index'
import Parameters from './Parameters/index.js'
import styles from './styles.module.scss'
const { Panel } = Collapse;

const App = () => {
    const [attr, setattr] = useState(null);
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
          children: <Parameters></Parameters>
        },
    ];

    const onChange = () => {

    }

    const LoadingSetting = () => {

    }

    const SaveSetting = () => {

    }

    const Training = () => {

    }

    const GenerateCkpt = () => {

    }

    return <div>
        <Row style={{marginBottom: '10px'}} gutter={5}>
          <Col span={6}><Button style={{width: '100%'}} onClick={LoadingSetting}>Load Settings</Button></Col>
          <Col span={6}><Button style={{width: '100%'}} onClick={SaveSetting}>Save Settings</Button></Col>
          <Col span={6}><Button style={{width: '100%'}} onClick={Training}>Train</Button></Col>
        </Row>
        {attr?.name ? 
        <Row>
          <Col span={8}>
            <span></span>
            <span></span>
          </Col>
          <Col span={8}>
            <span></span>
            <span></span>
          </Col>
          <Col span={8}>
            <span></span>
            <span></span>
          </Col>
        </Row> : <></>}
        <Row gutter={20}>
            <Col span={12}>
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} type="card" className={styles.tabs}/>
                <Collapse onChange={onChange} defaultActiveKey={['1']}>
                  <Panel header="Resources" key="1">
                      <a href="https://github.com/d8ahazard/sd_dreambooth_extension/wiki/ELI5-Training" target="_blank" style={{display: 'block'}}>Beginners guide</a>
                      <a href="https://github.com/d8ahazard/sd_dreambooth_extension/releases/latest" target="_blank">Release notes</a>
                  </Panel>
              </Collapse>
            </Col>
            <Col span={12}>
                <div className={styles['flex-sp']}>
                  <div style={{fontSize: '24px'}}>Output</div>
                  <Button>Refresh</Button>
                </div>
                <p>Selected model: </p>
                <div>
                <Image
                  width={"100%"}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                </div>
            </Col>
     </Row>
    </div>
}

export default App