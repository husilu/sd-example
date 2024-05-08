import {Form, Select, Checkbox, Row, Col, Slider, InputNumber, Collapse, Input} from "antd";
import {useState, useEffect} from 'react';
import styles from './styles.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import {getDreamModelInfo} from "../../../../store/reducers/homeReducer";

const {Option} = Select;
const {Panel} = Collapse;

const App = () => {
    const [formObj, setformObj] = useState({

        stopTextEncoder: 0,
        clipSkip: 0,
        numTrainEpochs:0,
        saveEmbeddingEvery: 0,
        savePreviewEvery: 0,
        optimizer: '',
        sanityPrompt: '',
        attention: '',
        sanitySeed: '',
        trainUnet: true,
        // shuffleTags: true,
        learningRate: 0.000002,
        learningRateMin: 0.000001,
        useLora: false,
        loraUNETRank: 0,
        loraTxtRank: 0,
        loraWeight: 0,
        resolution: 512,
        customModelName: '',
        saveCkptCancel: false,
        mixedPrecision: "",
        cacheLatents: true,
        shuffleTags: true
    });

    const setFormObjDataHandler = (val, key) => {
        setformObj(prevState => ({
            ...prevState,
            [key]: val
        }));
    }


    // const [stopTextEncoder, setstopTextEncoder] = useState(0);
    // const [ClipSkip, setClipSkip] = useState(0);
    // const [numTrainEpochs, setNumTrainEpochs] = useState(0);
    // const [saveEmbeddingEvery, setSaveEmbeddingEvery] = useState(0);
    // const [savePreviewEvery, setSavePreviewEvery] = useState(0);
    // // const [bucketStepsVal, setbucketStepsVal] = useState(8);

    

    // const [optimizer, setOptimizer] = useState('');
    // const [MixedPrecision, setMixedPrecision] = useState('');
    // const [MemoryAttention, setMemoryAttention] = useState('');
    // const [CacheLatents, setCacheLatents] = useState(true);
    // const [TrainUNET, setTrainUNET] = useState(true);
    // const [ShuffleTags, setShuffleTags] = useState(true);
    // const [LearningRate, setLearningRate] = useState(0.000002);
    // const [learningRateMin, setLearningRateMin] = useState(0.000001);
    // const [UseLora, setUseLora] = useState(false);
    // const [LoraUNETRank, setLoraUNETRank] = useState(0);
    // const [loraTxtRank, setLoraTxtRank] = useState(0);
    // const [LoraWeight, setLoraWeight] = useState(0);
    const [MaxResolution, setMaxResolution] = useState(512);
    // const [CustomModelName, setCustomModelName] = useState('');
    // const [saveCkptCancel, setSaveCkptCancel] = useState(false);
    const [SanitySamplePrompt, setSanitySamplePrompt] = useState('');
    // // const [SanitySampleNegativePrompt, setSanitySampleNegativePrompt] = useState('');
    const [SanitySampleSeed, setSanitySampleSeed] = useState(420420);
    // const [MaxRes, setMaxRes] = useState(512);
    const dreamModel = useSelector(state => state.home.dreamModel);
    const dispatch = useDispatch(); // 获取dispatch函数
    const dreamModelInfo = useSelector(state => state.home.dreamModelInfo);

    // useEffect(() => {
    //     let conceptsList = dreamModelInfo.conceptsList;
    //     console.log("conceptsList=", conceptsList)
    //     dispatch(getDreamModelInfo({
    //         dreamModelInfo: {
    //             "conceptsList": conceptsList,
    //             "attention": MemoryAttention,
    //             "cacheLatents": CacheLatents,
    //             "clipSkip": ClipSkip,
    //             "customModelName": CustomModelName,
    //             "learningRate": LearningRate,
    //             "learningRateMin": learningRateMin,
    //             "loraTxtRank": loraTxtRank,
    //             "loraUnetRank": LoraUNETRank,
    //             "loraWeight": LoraWeight,
    //             "mixedPrecision": MixedPrecision,
    //             "numTrainEpochs": numTrainEpochs,
    //             "optimizer": optimizer,
    //             "resolution": MaxResolution,
    //             "sanityPrompt": SanitySamplePrompt,
    //             "sanitySeed": SanitySampleSeed,
    //             "saveCkptCancel": saveCkptCancel,
    //             "saveEmbeddingEvery": saveEmbeddingEvery,
    //             "savePreviewEvery": savePreviewEvery,
    //             "shuffleTags": ShuffleTags,
    //             "trainUnet": TrainUNET,
    //             "useLora": UseLora,
    //             "stopTextEncoder": stopTextEncoder
    //         }
    //     }));
    // }, [MemoryAttention, CacheLatents, ClipSkip, CustomModelName, LearningRate, learningRateMin, loraTxtRank, LoraUNETRank, LoraWeight, MixedPrecision, numTrainEpochs, optimizer, MaxResolution, SanitySamplePrompt, SanitySampleSeed, saveCkptCancel, saveEmbeddingEvery, savePreviewEvery]);

    useEffect(() => {
        setformObj(dreamModelInfo)
    }, [dreamModelInfo]);



    
    // const onChangeStopTextEncoder = (val) => {
    //     setformObj(prevState => ({
    //         ...prevState,
    //         stopTextEncoder: val
    //     }));
    // }

    const onChangeClipSkip = (val) => {
        setformObj(prevState => ({
            ...prevState,
            ClipSkip: val
        }));
    }
    // const onChangeNumTrainEpochs = (val) => {
    //     setformObj(prevState => ({
    //         ...prevState,
    //         numTrainEpochs: val
    //     }));
    // }
    // const onChangeSaveEmbeddingEvery = (val) => {
    //     setformObj(prevState => ({
    //         ...prevState,
    //         saveEmbeddingEvery: val
    //     }));
    // }
    // const onChangeSavePreviewEvery = (val) => {
    //     setformObj(prevState => ({
    //         ...prevState,
    //         savePreviewEvery: val
    //     }));
    // }
    // const onChangeLearningRate = (val) => {
    //     setformObj(prevState => ({
    //         ...prevState,
    //         LearningRate: val
    //     }));
    // }
    // const onChangeLearningRateMin = (val) => {
    //     setformObj(prevState => ({
    //         ...prevState,
    //         LearningRateMin: val
    //     }));
    // }
    // const onChangeLoraUNETRank = (val) => {
    //     setformObj(prevState => ({
    //         ...prevState,
    //         LoraUNETRank: val
    //     }));
    // }
    // const onChangeLoraTxtRank = (val) => {
    //     setformObj(prevState => ({
    //         ...prevState,
    //         loraTxtRank: val
    //     }));
    // }
    // const onChangeLoraWeight = (val) => {
    //     setformObj(prevState => ({
    //         ...prevState,
    //         LoraWeight: val
    //     }));
    // }
    // const onChangeMaxResolution = (val) => {
    //     setformObj(prevState => ({
    //         ...prevState,
    //         MaxResolution: val
    //     }));
    // }

    // const onChangeSanitySampleSeed = (val) => {
    //     setformObj(prevState => ({
    //         ...prevState,
    //         SanitySampleSeed: val
    //     }));
    // }

    // const setOptimizerHandler = (val) => {
    //     setformObj(prevState => ({
    //         ...prevState,
    //         optimizer: val
    //     }));
    // }

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
                            defaultValue={undefined === formObj.optimizer || '' === formObj.optimizer || null == formObj.optimizer ? "8bit AdamW" : formObj.optimizer}
                            options={optimizerOption}
                            onChange={(e) => setFormObjDataHandler(e, 'optimizer')}
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
                            defaultValue={undefined === formObj.mixedPrecision || '' === formObj.mixedPrecision || null == formObj.mixedPrecision ? "bf16" : formObj.mixedPrecision}
                            options={precisionOption}
                            onChange={(e) => setFormObjDataHandler(e, 'mixedPrecision')}
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
                            defaultValue={undefined === formObj.MemoryAttention || '' === formObj.MemoryAttention || null == formObj.MemoryAttention ? "xformers" : formObj.MemoryAttention}
                            onChange={(e) => setFormObjDataHandler(e, 'attention')}
                        >
                            <Option value="default">default</Option>
                            <Option value="xformers">xformers</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label=""
                        name="Cache Latents"
                    >
                        <Checkbox checked={formObj.cacheLatents} onChange={(e) => setFormObjDataHandler(e, 'cacheLatents')}>Cache
                            Latents</Checkbox>
                    </Form.Item>

                    <Form.Item
                        label=""
                        name="Train UNET"
                    >
                        <Checkbox checked={formObj.trainUNET} onChange={(e) => setFormObjDataHandler(e.target.checked, 'trainUnet')}>Train
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
                                    value={typeof formObj.stopTextEncoder === 'number' ? formObj.stopTextEncoder : 0}
                                    onChange={(e) => setFormObjDataHandler(e, 'stopTextEncoder')}
                                    step={0.1}
                                />
                            </Col>
                            <Col span={3}>
                                <InputNumber min={0} max={1} value={formObj.stopTextEncoder} step={0.1}
                                    onChange={(e) => setFormObjDataHandler(e, 'stopTextEncoder')}/>
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
                                    value={typeof formObj.clipSkip === 'number' ? formObj.clipSkip : 0}
                                    step={1}
                                />
                            </Col>
                            <Col span={3}>
                                <InputNumber min={0} max={12} value={formObj.clipSkip} step={1}
                                             onChange={(e) => setFormObjDataHandler(e, 'clipSkip')}/>
                            </Col>
                        </Row>
                    </Form.Item>

                    <Form.Item
                        label=""
                        name="Shuffle Tags"
                    >
                        <Checkbox checked={formObj.shuffleTags} onChange={(e) => setFormObjDataHandler(e, 'shuffleTags')}>Shuffle
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
                                    value={typeof formObj.numTrainEpochs === 'number' ? formObj.numTrainEpochs : 0}
                                    onChange={(e) => setFormObjDataHandler(e, 'numTrainEpochs')}
                                    step={1}
                                />
                            </Col>
                            <Col span={3}>
                                <InputNumber min={0} max={1} value={formObj.numTrainEpochs} step={1}
                                             onChange={(e) => setFormObjDataHandler(e, 'numTrainEpochs')}/>
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
                                    value={typeof formObj.saveEmbeddingEvery === 'number' ? formObj.saveEmbeddingEvery : 0}
                                    onChange={(e) => setFormObjDataHandler(e, 'saveEmbeddingEvery')}
                                    step={1}
                                />
                            </Col>
                            <Col span={3}>
                                <InputNumber min={0} max={1} value={formObj.saveEmbeddingEvery} step={1}
                                             onChange={(e) => setFormObjDataHandler(e, 'saveEmbeddingEvery')}/>
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
                                    value={typeof formObj.savePreviewEvery === 'number' ? formObj.savePreviewEvery : 0}
                                    onChange={(e) => setFormObjDataHandler(e, 'savePreviewEvery')}
                                    step={1}
                                />
                            </Col>
                            <Col span={3}>
                                <InputNumber min={0} max={1000} value={formObj.savePreviewEvery} step={1}
                                             onChange={(e) => setFormObjDataHandler(e, 'savePreviewEvery')}/>
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
                                <InputNumber value={formObj.learningRate}
                                             onChange={(e) => setFormObjDataHandler(e, 'learningRate')}></InputNumber>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Text Encoder Learning Rate" name="Text Encoder Learning Rate">
                                <InputNumber value={formObj.learningRateMin} onChange={(e) => setFormObjDataHandler(e, 'learningRateMin')}></InputNumber>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Panel>
            <Panel header="Lora" key="4">
                <Form disabled={!dreamModel} layout="vertical">
                    <Form.Item
                        label=""
                        name="Use LORA"
                    >
                        <Checkbox checked={formObj.useLora} onChange={(e) => setFormObjDataHandler(e.target.checked, 'useLora')}>Use LORA</Checkbox>
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
                                    value={typeof formObj.loraUNETRank === 'number' ? formObj.loraUNETRank : 0}
                                    onChange={(e) => setFormObjDataHandler(e, 'loraUNETRank')}
                                    step={2}
                                />
                            </Col>
                            <Col span={3}>
                                <InputNumber min={2} max={128} value={formObj.loraUNETRank} step={2}
                                onChange={(e) => setFormObjDataHandler(e, 'loraUNETRank')}/>
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
                                    value={typeof formObj.loraTxtRank === 'number' ? formObj.loraTxtRank : 0}
                                    onChange={(e) => setFormObjDataHandler(e, 'loraTxtRank')}
                                    step={2}
                                />
                            </Col>
                            <Col span={3}>
                                <InputNumber min={0} max={128} value={formObj.loraTxtRank} step={2}
                                             onChange={(e) => setFormObjDataHandler(e, 'loraTxtRank')}/>
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
                                    value={typeof formObj.loraWeight === 'number' ? formObj.loraWeight : 0}
                                    onChange={(e) => setFormObjDataHandler(e, 'loraWeight')}
                                    step={0.1}
                                />
                            </Col>
                            <Col span={3}>
                                <InputNumber min={0.1} max={1} value={formObj.loraWeight} step={0.1}
                                             onChange={(e) => setFormObjDataHandler(e, 'loraWeight')}/>
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
                            onChange={(e) => setMaxResolution(e)}
                            step={64}
                            disabled={!dreamModel}
                        />
                    </Col>
                    <Col span={3}>
                        <InputNumber min={2} max={2048} value={MaxResolution} step={64} disabled={!dreamModel}
                                     onChange={(e) => setMaxResolution(e)}/>
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
                        <Input type="textarea" value={formObj.customModelName} onChange={(e) => setFormObjDataHandler(e, 'customModelName')}
                               placeholder="Enter a model name for saving checkpoints and lora models."/>
                    </Form.Item>

                    <Form.Item
                        label=""
                        name="save_ckpt_cancel"
                    >
                        <Checkbox checked={formObj.saveCkptCancel} onChange={(e) => setFormObjDataHandler(e.target.checked, 'saveCkptCancel')}>
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
                        <InputNumber value={SanitySampleSeed} step={1} onChange={(e) => setSanitySampleSeed(e)}/>
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