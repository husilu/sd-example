import {Form, Select, Checkbox, Row, Col, Slider, InputNumber, Collapse, Input} from "antd";
import {useState, useEffect} from 'react';
import styles from './styles.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import {getDreamModelInfo} from "../../../../store/reducers/homeReducer";

const {Option} = Select;
const {Panel} = Collapse;

const App = () => {
    const [stopTextEncoder, setstopTextEncoder] = useState(0);
    const [ClipSkip, setClipSkip] = useState(0);
    const [numTrainEpochs, setNumTrainEpochs] = useState(0);
    const [saveEmbeddingEvery, setSaveEmbeddingEvery] = useState(0);
    const [savePreviewEvery, setSavePreviewEvery] = useState(0);
    // const [bucketStepsVal, setbucketStepsVal] = useState(8);

    const [optimizer, setOptimizer] = useState('');
    const [MixedPrecision, setMixedPrecision] = useState('');
    const [MemoryAttention, setMemoryAttention] = useState('');
    const [CacheLatents, setCacheLatents] = useState(true);
    const [TrainUNET, setTrainUNET] = useState(true);
    const [ShuffleTags, setShuffleTags] = useState(true);
    const [LearningRate, setLearningRate] = useState(0.000002);
    const [learningRateMin, setLearningRateMin] = useState(0.000001);
    const [UseLora, setUseLora] = useState(false);
    const [LoraUNETRank, setLoraUNETRank] = useState(0);
    const [loraTxtRank, setLoraTxtRank] = useState(0);
    const [LoraWeight, setLoraWeight] = useState(0);
    const [MaxResolution, setMaxResolution] = useState(512);
    const [CustomModelName, setCustomModelName] = useState('');
    const [saveCkptCancel, setSaveCkptCancel] = useState(false);
    const [SanitySamplePrompt, setSanitySamplePrompt] = useState('');
    // const [SanitySampleNegativePrompt, setSanitySampleNegativePrompt] = useState('');
    const [SanitySampleSeed, setSanitySampleSeed] = useState(420420);
    // const [MaxRes, setMaxRes] = useState(512);
    const dreamModel = useSelector(state => state.home.dreamModel);
    const dispatch = useDispatch(); // 获取dispatch函数
    const dreamModelInfo = useSelector(state => state.home.dreamModelInfo);


    useEffect(() => {
        let conceptsList = dreamModelInfo.conceptsList;
        console.log("conceptsList=", conceptsList)
        dispatch(getDreamModelInfo({
            dreamModelInfo: {
                "conceptsList": conceptsList,
                "attention": MemoryAttention,
                "cacheLatents": CacheLatents,
                "clipSkip": ClipSkip,
                "customModelName": CustomModelName,
                "learningRate": LearningRate,
                "learningRateMin": learningRateMin,
                "loraTxtRank": loraTxtRank,
                "loraUnetRank": LoraUNETRank,
                "loraWeight": LoraWeight,
                "mixedPrecision": MixedPrecision,
                "numTrainEpochs": numTrainEpochs,
                "optimizer": optimizer,
                "resolution": MaxResolution,
                "sanityPrompt": SanitySamplePrompt,
                "sanitySeed": SanitySampleSeed,
                "saveCkptCancel": saveCkptCancel,
                "saveEmbeddingEvery": saveEmbeddingEvery,
                "savePreviewEvery": savePreviewEvery,
                "shuffleTags": ShuffleTags,
                "trainUnet": TrainUNET,
                "useLora": UseLora,
                "stopTextEncoder": stopTextEncoder
            }
        }));
    }, [MemoryAttention, CacheLatents, ClipSkip, CustomModelName, LearningRate, learningRateMin, loraTxtRank, LoraUNETRank, LoraWeight, MixedPrecision, numTrainEpochs, optimizer, MaxResolution, SanitySamplePrompt, SanitySampleSeed, saveCkptCancel, saveEmbeddingEvery, savePreviewEvery]);

    useEffect(() => {
        // debugger;
        console.log("paramters 读取查询数据")
        if (dreamModelInfo) {
            setstopTextEncoder(dreamModelInfo.stopTextEncoder);
            setClipSkip(dreamModelInfo.clipSkip);
            setNumTrainEpochs(dreamModelInfo.numTrainEpochs);
            setSaveEmbeddingEvery(dreamModelInfo.saveEmbeddingEvery);
            setSavePreviewEvery(dreamModelInfo.saveEmbeddingEvery);
            setOptimizer(dreamModelInfo.optimizer);
            setMixedPrecision(dreamModelInfo.mixedPrecision);
            setMemoryAttention(dreamModelInfo.attention);
            setCacheLatents(dreamModelInfo.cacheLatents);
            setTrainUNET(dreamModelInfo.trainUNET);
            setShuffleTags(dreamModelInfo.shuffleTags);
            setLearningRate(dreamModelInfo.learningRate);
            setLearningRateMin(dreamModelInfo.learningRateMin);
            setUseLora(dreamModelInfo.useLora);
            setLoraUNETRank(dreamModelInfo.loraUnetRank);
            setLoraTxtRank(dreamModelInfo.loraTxtRank);
            setLoraWeight(dreamModelInfo.loraWeight);
            setMaxResolution(dreamModelInfo.resolution);
            setCustomModelName(dreamModelInfo.customModelName);
            setSaveCkptCancel(dreamModelInfo.saveCkptCancel);
            setSanitySamplePrompt(dreamModelInfo.sanityPrompt);
            setSanitySampleSeed(dreamModelInfo.sanitySeed);
        }
    }, [dreamModelInfo]);


    console.log("----------------------------------------------------------------")
    console.log("dreamModelInfo.conceptsList=", dreamModelInfo.conceptsList)
    console.log("dreamModelInfo=", dreamModelInfo)
    const onChangeStopTextEncoder = (val) => {
        setstopTextEncoder(val);
    }

    const onChangeClipSkip = (val) => {
        setClipSkip(val);
    }
    const onChangeNumTrainEpochs = (val) => {
        setNumTrainEpochs(val);
    }
    const onChangeSaveEmbeddingEvery = (val) => {
        setSaveEmbeddingEvery(val);
    }
    const onChangeSavePreviewEvery = (val) => {
        setSavePreviewEvery(val);
    }
    const onChangeLearningRate = (val) => {
        setLearningRate(val);
    }
    const onChangeLearningRateMin = (val) => {
        setLearningRateMin(val);
    }
    const onChangeLoraUNETRank = (val) => {
        setLoraUNETRank(val);
    }
    const onChangeLoraTxtRank = (val) => {
        setLoraTxtRank(val);
    }
    const onChangeLoraWeight = (val) => {
        setLoraWeight(val);
    }
    const onChangeMaxResolution = (val) => {
        setMaxResolution(val);
    }

    const onChangeSanitySampleSeed = (val) => {
        setSanitySampleSeed(val);
    }

    const optimizerOption = [
        {value: 'Torch AdamW', label: 'Torch AdamW'},
        {
            value: 'Adafactor',
            label: 'Adafactor'
        }, {value: '8bit AdamW', label: '8bit AdamW'}, {
            value: 'Paged 8bit AdamW',
            label: 'Paged 8bit AdamW'
        }, {value: 'AdamW Dadaptation', label: 'AdamW Dadaptation'}, {
            value: 'Adan Dadaptation',
            label: 'Adan Dadaptation'
        }, {value: 'AdanIP Dadaptation', label: 'AdanIP Dadaptation'}, {value: 'Apollo', label: 'Apollo'}, {
            value: 'CAME',
            label: 'CAME'
        }, {value: 'Lion', label: 'Lion'}, {value: '8bit Lion', label: '8bit Lion'}, {
            value: 'Paged 8bit Lion',
            label: 'Paged 8bit Lion'
        }, {value: 'Lion Dadaptation', label: 'Lion Dadaptation'}, {
            value: 'Prodigy',
            label: 'Prodigy'
        }, {value: 'SGD Dadaptation', label: 'SGD Dadaptation'}, {value: 'Sophia', label: 'Sophia'}, {
            value: 'Tiger',
            label: 'Tiger'
        }];

    const precisionOption = [
        {value: 'no', label: 'no'},
        {value: 'fp16', label: 'fp16'},
        {value: 'bf16', label: 'bf16'},]
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
                            defaultValue={undefined === optimizer || '' === optimizer || null == optimizer ? "8bit AdamW" : optimizer}
                            options={optimizerOption}
                            onChange={(e) => setOptimizer(e)}
                        >
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
                            defaultValue={undefined === MixedPrecision || '' === MixedPrecision || null == MixedPrecision ? "bf16" : MixedPrecision}
                            options={precisionOption}
                            onChange={(e) => setMixedPrecision(e)}
                        >
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
                            defaultValue={undefined === MemoryAttention || '' === MemoryAttention || null == MemoryAttention ? "xformers" : MemoryAttention}
                            onChange={(e) => setMemoryAttention(e)}
                        >
                            <Option value="default">default</Option>
                            <Option value="xformers">xformers</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label=""
                        name="Cache Latents"
                    >
                        <Checkbox checked={CacheLatents} onChange={(e) => setCacheLatents(e.target.checked)}>Cache
                            Latents</Checkbox>
                    </Form.Item>

                    <Form.Item
                        label=""
                        name="Train UNET"
                    >
                        <Checkbox checked={TrainUNET} onChange={(e) => setTrainUNET(e.target.checked)}>Train
                            UNET</Checkbox>
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
                                    value={typeof stopTextEncoder === 'number' ? stopTextEncoder : 0}
                                    onChange={(e) => onChangeStopTextEncoder(e)}
                                    step={0.1}
                                />
                            </Col>
                            <Col span={3}>
                                <InputNumber min={0} max={1} value={stopTextEncoder} step={0.1}
                                             onChange={(e) => onChangeStopTextEncoder(e)}/>
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
                                    onChange={(e) => onChangeClipSkip(e)}
                                    value={typeof ClipSkip === 'number' ? ClipSkip : 0}
                                    step={1}
                                />
                            </Col>
                            <Col span={3}>
                                <InputNumber min={0} max={12} value={ClipSkip} step={1}
                                             onChange={(e) => onChangeClipSkip(e)}/>
                            </Col>
                        </Row>
                    </Form.Item>

                    <Form.Item
                        label=""
                        name="Shuffle Tags"
                    >
                        <Checkbox checked={ShuffleTags} onChange={(e) => setShuffleTags(e.target.checked)}>Shuffle
                            Tags</Checkbox>
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
                                    value={typeof numTrainEpochs === 'number' ? numTrainEpochs : 0}
                                    onChange={(e) => onChangeNumTrainEpochs(e)}
                                    step={1}
                                />
                            </Col>
                            <Col span={3}>
                                <InputNumber min={0} max={1} value={numTrainEpochs} step={1}
                                             onChange={(e) => onChangeNumTrainEpochs(e)}/>
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
                                    value={typeof saveEmbeddingEvery === 'number' ? saveEmbeddingEvery : 0}
                                    onChange={(e) => onChangeSaveEmbeddingEvery(e)}
                                    step={1}
                                />
                            </Col>
                            <Col span={3}>
                                <InputNumber min={0} max={1} value={saveEmbeddingEvery} step={1}
                                             onChange={(e) => onChangeSaveEmbeddingEvery(e)}/>
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
                                    value={typeof savePreviewEvery === 'number' ? savePreviewEvery : 0}
                                    onChange={(e) => onChangeSavePreviewEvery(e)}
                                    step={1}
                                />
                            </Col>
                            <Col span={3}>
                                <InputNumber min={0} max={1000} value={savePreviewEvery} step={1}
                                             onChange={(e) => onChangeSavePreviewEvery(e)}/>
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
                            <Form.Item label="Learning Rate" name="Learning Rate">
                                <InputNumber value={LearningRate}
                                             onChange={(e) => onChangeLearningRate(e)}></InputNumber>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Text Encoder Learning Rate" name="Text Encoder Learning Rate">
                                <InputNumber value={learningRateMin} onChange={(e) => {
                                    onChangeLearningRateMin(e)
                                }}></InputNumber>
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
                        <Checkbox checked={UseLora} onChange={(e) => setUseLora(e.target.checked)}>Use LORA</Checkbox>
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
                                    value={typeof LoraUNETRank === 'number' ? LoraUNETRank : 0}
                                    onChange={(e) => onChangeLoraUNETRank(e)}
                                    step={2}
                                />
                            </Col>
                            <Col span={3}>
                                <InputNumber min={2} max={128} value={LoraUNETRank} step={2}
                                             onChange={(e) => onChangeLoraUNETRank(e)}/>
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
                                    value={typeof loraTxtRank === 'number' ? loraTxtRank : 0}
                                    onChange={(e) => onChangeLoraTxtRank(e)}
                                    step={2}
                                />
                            </Col>
                            <Col span={3}>
                                <InputNumber min={0} max={128} value={loraTxtRank} step={2}
                                             onChange={(e) => onChangeLoraTxtRank(e)}/>
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
                                    value={typeof LoraWeight === 'number' ? LoraWeight : 0}
                                    onChange={(e) => onChangeLoraWeight(e)}
                                    step={0.1}
                                />
                            </Col>
                            <Col span={3}>
                                <InputNumber min={0.1} max={1} value={LoraWeight} step={0.1}
                                             onChange={(e) => onChangeLoraWeight(e)}/>
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
                            value={typeof MaxResolution === 'number' ? MaxResolution : 0}
                            onChange={(e) => onChangeMaxResolution(e)}
                            step={64}
                            disabled={!dreamModel}
                        />
                    </Col>
                    <Col span={3}>
                        <InputNumber min={2} max={2048} value={MaxResolution} step={64} disabled={!dreamModel}
                                     onChange={(e) => onChangeMaxResolution(e)}/>
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
                        <Input type="textarea" value={CustomModelName} onChange={(e) => setCustomModelName(e)}
                               placeholder="Enter a model name for saving checkpoints and lora models."/>
                    </Form.Item>

                    <Form.Item
                        label=""
                        name="save_ckpt_cancel"
                    >
                        <Checkbox checked={saveCkptCancel} onChange={(e) => setSaveCkptCancel(e.target.checked)}>
                            Generate a .ckpt file when training is canceled.</Checkbox>
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
                        <Input type="textarea" value={SanitySamplePrompt} onChange={(e) => setSanitySamplePrompt(e)}
                               placeholder="A generic prompt used to generate a sample image to verify model fidelity."/>
                    </Form.Item>
                    {/*<Form.Item*/}
                    {/*    label="Sanity Sample Negative Prompt"*/}
                    {/*    name="Sanity Sample Negative Prompt"*/}
                    {/*>*/}
                    {/*    <Input type="textarea" value={SanitySampleNegativePrompt} onChange={(e)=>setSanitySampleNegativePrompt(e.target.value)}*/}
                    {/*           placeholder="A negative prompt for the generic sample image."/>*/}
                    {/*</Form.Item>*/}

                    <Form.Item
                        label="Sanity Sample Seed"
                        name="Sanity Sample Seed"
                    >
                        <InputNumber value={SanitySampleSeed} step={1} onChange={(e) => onChangeSanitySampleSeed(e)}/>
                    </Form.Item>

                    {/*<Form.Item*/}
                    {/*    label="Max Res"*/}
                    {/*    name="Max Res"*/}
                    {/*>*/}
                    {/*    <Row gutter={10}>*/}
                    {/*        <Col span={19}>*/}
                    {/*            <Slider*/}
                    {/*                min={0}*/}
                    {/*                max={2048}*/}
                    {/*                value={typeof maxResVal === 'number' ? maxResVal : 0}*/}
                    {/*                step={64}*/}
                    {/*            />*/}
                    {/*        </Col>*/}
                    {/*        <Col span={3}>*/}
                    {/*            <InputNumber min={0} max={2048} value={maxResVal} step={64}/>*/}
                    {/*        </Col>*/}
                    {/*    </Row>*/}
                    {/*</Form.Item>*/}

                    {/*<Form.Item*/}
                    {/*    label="Bucket Steps"*/}
                    {/*    name="Bucket Steps"*/}
                    {/*>*/}
                    {/*    <Row gutter={10}>*/}
                    {/*        <Col span={19}>*/}
                    {/*            <Slider*/}
                    {/*                min={0}*/}
                    {/*                max={512}*/}
                    {/*                value={typeof bucketStepsVal === 'number' ? bucketStepsVal : 0}*/}
                    {/*                step={8}*/}
                    {/*            />*/}
                    {/*        </Col>*/}
                    {/*        <Col span={3}>*/}
                    {/*            <InputNumber min={0} max={512} value={bucketStepsVal} step={8}/>*/}
                    {/*        </Col>*/}
                    {/*    </Row>*/}
                    {/*</Form.Item>*/}
                </Form>
            </Panel>
        </Collapse>
    </div>
}

export default App