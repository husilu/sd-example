import { Form, Select, Checkbox, Row, Col, Slider, InputNumber, Collapse } from "antd";
import { useState } from 'react';
const { Option } = Select;
const { Panel}  = Collapse;
const App = () => {
    const [trainingVal, settrainingVal] = useState(0);
    const [skipVal, setskipVal] = useState(0);
    const [traStepVal, settraStepVal] = useState(0);
    const [ModelVal, setModelVal] = useState(0);
    const [FrequencyVal, setFrequencyVal] = useState(0);
    const [rankVal, setrankVal] = useState(0);
    return <div>
        <Collapse defaultActiveKey={['2']}>
            <Panel header="Performance" key="1">
                <Form
                    name="basic"
                    layout="vertical"
                >
                <Form.Item
                    label="Optimizer"
                    name="Optimizer"
                >
                    <Select
                        style={{
                            width: '100%',
                        }}
                    defaultValue="86"
                >
                    <Option value="86">+86</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Mixed Precision"
                    name="Mixed Precision"
                >
                    <Select
                        style={{
                            width: '100%',
                        }}
                    defaultValue="86"
                >
                    <Option value="86">+86</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Memory Attention"
                    name="Memory Attention"
                >
                    <Select
                        style={{
                            width: '100%',
                        }}
                    defaultValue="86"
                >
                    <Option value="86">+86</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label=""
                    name="Cache Latents"
                >
                    <Checkbox>Cache Latents</Checkbox>
                </Form.Item>

                <Form.Item
                    label=""
                    name="Train UNET"
                >
                    <Checkbox>Train UNET</Checkbox>
                </Form.Item>

                <Form.Item
                    label="Step Ratio of Text Encoder Training"
                    name="Step Ratio of Text Encoder Training"
                >
                    <Row gutter={10}>
                        <Col span={19}>
                            <Slider
                                min={0}
                                max={1}
                                value={typeof trainingVal === 'number' ? trainingVal : 0}
                                step={0.1}
                            />
                        </Col>
                        <Col span={3}>
                            <InputNumber min={0} max={1} value={trainingVal} step={0.1} />
                        </Col>
                    </Row>
                </Form.Item>

                <Form.Item
                    label="Clip Skip"
                    name="Clip Skip"
                >
                <Row gutter={10}>
                        <Col span={19}>
                            <Slider
                                min={0}
                                max={12}
                                value={typeof skipVal === 'number' ? skipVal : 0}
                                step={1}
                            />
                        </Col>
                        <Col span={3}>
                            <InputNumber min={0} max={12} value={skipVal} step={1} />
                        </Col>
                    </Row>
                </Form.Item>

                <Form.Item
                    label=""
                    name="Shuffle Tags"
                >
                        <Checkbox>Shuffle Tags</Checkbox>
                </Form.Item>

                </Form>
            </Panel>
            <Panel header="Intervals" key="2">
                <Form  
                    name="basic"
                    layout="vertical">
                    <Form.Item
                        label="Training Steps Per Image (Epochs)"
                        name="Training Steps Per Image (Epochs)"
                    >
                        <Row gutter={10}>
                            <Col span={19}>
                                <Slider
                                    min={0}
                                    max={1000}
                                    value={typeof traStepVal === 'number' ? traStepVal : 0}
                                    step={1}
                                />
                            </Col>
                            <Col span={3}>
                                <InputNumber min={0} max={1} value={traStepVal} step={1} />
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item
                        label="Save Model Frequency (Epochs)"
                        name="Save Model Frequency (Epochs)"
                    >
                        <Row gutter={10}>
                            <Col span={19}>
                                <Slider
                                    min={0}
                                    max={1000}
                                    value={typeof ModelVal === 'number' ? ModelVal : 0}
                                    step={1}
                                />
                            </Col>
                            <Col span={3}>
                                <InputNumber min={0} max={1} value={ModelVal} step={1} />
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item
                        label="Save Preview(s) Frequency (Epochs)"
                        name="Save Preview(s) Frequency (Epochs)"
                    >
                        <Row gutter={10}>
                            <Col span={19}>
                                <Slider
                                    min={0}
                                    max={1000}
                                    value={typeof FrequencyVal === 'number' ? FrequencyVal : 0}
                                    step={1}
                                />
                            </Col>
                            <Col span={3}>
                                <InputNumber min={0} max={1000} value={FrequencyVal} step={1} />
                            </Col>
                        </Row>
                    </Form.Item>
                </Form>
            </Panel>
            <Panel header="Learning Rate" key="3">
                <Form
                    name="basic"
                    layout="vertical">
                        <Row>
                            <Col span={12}>
                                <Form.Item>
                                    <InputNumber></InputNumber>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item>
                                    <InputNumber></InputNumber>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>   
            </Panel>
            <Panel header="Lora" key="4">
                <Form>
                    <Form.Item
                        label=""
                        name="Use LORA"
                    >
                        <Checkbox>Use LORA</Checkbox>
                    </Form.Item>
                    <Form.Item
                        label="Lora UNET Rank"
                        name="Lora UNET Rank"
                    >
                        <Row gutter={10}>
                            <Col span={19}>
                                <Slider
                                    min={2}
                                    max={128}
                                    value={typeof rankVal === 'number' ? rankVal : 0}
                                    step={2}
                                />
                            </Col>
                            <Col span={3}>
                                <InputNumber min={2} max={128} value={rankVal} step={2} />
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item
                        label="Lora Text Encoder Rank"
                        name="Lora Text Encoder Rank"
                    >
                        <Row gutter={10}>
                            <Col span={19}>
                                <Slider
                                    min={0}
                                    max={128}
                                    value={typeof rankVal === 'number' ? rankVal : 0}
                                    step={2}
                                />
                            </Col>
                            <Col span={3}>
                                <InputNumber min={0} max={128} value={rankVal} step={2} />
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item
                        label="Lora Weight (Alpha)"
                        name="Lora Weight (Alpha)"
                    >
                        <Row gutter={10}>
                            <Col span={19}>
                                <Slider
                                    min={0.1}
                                    max={1}
                                    value={typeof rankVal === 'number' ? rankVal : 0}
                                    step={0.1}
                                />
                            </Col>
                            <Col span={3}>
                                <InputNumber min={0.1} max={1} value={rankVal} step={0.1} />
                            </Col>
                        </Row>
                    </Form.Item>
                </Form>
            </Panel>
            <Panel header="Image Processing" key="5">
                <div>Max Resolution</div>
                <Row gutter={10}>
                    <Col span={19}>
                        <Slider
                            min={128}
                            max={2048}
                            value={typeof rankVal === 'number' ? rankVal : 0}
                            step={64}
                        />
                    </Col>
                    <Col span={3}>
                        <InputNumber min={2} max={2048} value={rankVal} step={64} />
                    </Col>
                </Row>
            </Panel>
            <Panel header="Saving" key="6">

            </Panel>
            <Panel header="Extra" key="7">

            </Panel>
        </Collapse>
    </div>
}

export default App