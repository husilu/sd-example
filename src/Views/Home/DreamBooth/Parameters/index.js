import { Form, Select, Checkbox, Row, Col, Slider, InputNumber, Collapse, Input } from "antd";
import { useState } from 'react';
import styles from './styles.module.scss'
import {useSelector} from 'react-redux'
const { Option } = Select;
const { Panel}  = Collapse;

const App = () => {
    const [trainingVal, settrainingVal] = useState(0);
    const [skipVal, setskipVal] = useState(0);
    const [traStepVal, settraStepVal] = useState(0);
    const [ModelVal, setModelVal] = useState(0);
    const [FrequencyVal, setFrequencyVal] = useState(0);
    const [rankVal, setrankVal] = useState(0);
    const [seedVal, setseedVal] = useState(420420);
    const [maxResVal, setmaxResVal] = useState(512);
    const [bucketStepsVal, setbucketStepsVal] = useState(8);
    const dreamModel = useSelector(state => state.home.dreamModel);
    return <div>
        <Collapse defaultActiveKey={['2']}>
            <Panel header="Performance" key="1">
                <Form
                    name="basic"
                    layout="vertical"
                    disabled={!dreamModel}
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
                    disabled={!dreamModel}
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
                    disabled={!dreamModel}
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
                <Form disabled={!dreamModel}>
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
                            disabled={!dreamModel}
                        />
                    </Col>
                    <Col span={3}>
                        <InputNumber min={2} max={2048} value={rankVal} step={64} disabled={!dreamModel}/>
                    </Col>
                </Row>
            </Panel>
            <Panel header="Saving" key="6">
                <div className={styles.prose}>General</div>
                <Form
                    name="basic"
                    layout="vertical"
                    disabled={!dreamModel}
                >
                     <Form.Item
                        label="Custom Model Name"
                        name="Custom Model Name"
                        >
                        <Input type="textarea" placeholder="Enter a model name for saving checkpoints and lora models."/>
                    </Form.Item>

                    <Form.Item
                        label=""
                        name="Custom Model Name"
                        >
                        <Checkbox>Generate a .ckpt file when training is canceled.</Checkbox>
                    </Form.Item>


                </Form>
            </Panel>
            <Panel header="Extra" key="7">
                <div className={styles.prose}>Sanity Samples</div>
                <Form
                    name="basic"
                    layout="vertical"
                    disabled={!dreamModel}
                >
                    <Form.Item
                        label="Sanity Sample Prompt"
                        name="Sanity Sample Prompt"
                        >
                        <Input type="textarea" placeholder="A generic prompt used to generate a sample image to verify model fidelity."/>
                    </Form.Item>
                    <Form.Item
                        label="Sanity Sample Negative Prompt"
                        name="Sanity Sample Negative Prompt"
                        >
                        <Input type="textarea" placeholder="A negative prompt for the generic sample image."/>
                    </Form.Item>

                    <Form.Item
                        label="Sanity Sample Seed"
                        name="Sanity Sample Seed"
                        >
                        <InputNumber value={seedVal} step={1} />
                    </Form.Item>

                    <Form.Item
                        label="Max Res"
                        name="Max Res"
                        >
                         <Row gutter={10}>
                            <Col span={19}>
                                <Slider
                                    min={0}
                                    max={2048}
                                    value={typeof maxResVal === 'number' ? maxResVal : 0}
                                    step={64}
                                />
                            </Col>
                            <Col span={3}>
                                <InputNumber min={0} max={2048} value={maxResVal} step={64} />
                            </Col>
                        </Row>   
                    </Form.Item>

                    <Form.Item
                        label="Bucket Steps"
                        name="Bucket Steps"
                        >
                         <Row gutter={10}>
                            <Col span={19}>
                                <Slider
                                    min={0}
                                    max={512}
                                    value={typeof bucketStepsVal === 'number' ? bucketStepsVal : 0}
                                    step={8}
                                />
                            </Col>
                            <Col span={3}>
                                <InputNumber min={0} max={512} value={bucketStepsVal} step={8} />
                            </Col>
                        </Row>   
                    </Form.Item>
                </Form>
            </Panel>
        </Collapse>
    </div>
}

export default App