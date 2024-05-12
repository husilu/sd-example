import { Form, Select, Checkbox, Row, Col, Slider, InputNumber, Collapse, Input } from "antd";
import { useState, useEffect } from 'react';
import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getDreamModelInfo, editDreamModelInfo } from "../../../../store/reducers/homeReducer";

const { Option } = Select;
const { Panel } = Collapse;

const App = () => {
    const dreamModelInfo = useSelector(state => state.home.dreamModelInfo);
    const dreamModel = useSelector(state => state.home.dreamModel);
    const dispatch = useDispatch(); // 获取dispatch函数
    const [form] = Form.useForm();
    const setFormObjDataHandler = (val, key) => {
        console.log( val, key)
        dispatch(editDreamModelInfo({dreamModelInfo: {...dreamModelInfo, [key]: val}}))
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
    // const [MaxResolution, setMaxResolution] = useState(512);
    // const [CustomModelName, setCustomModelName] = useState('');
    // const [saveCkptCancel, setSaveCkptCancel] = useState(false);
    // const [SanitySamplePrompt, setSanitySamplePrompt] = useState('');
    // // const [SanitySampleNegativePrompt, setSanitySampleNegativePrompt] = useState('');
    // const [SanitySampleSeed, setSanitySampleSeed] = useState(420420);
    // const [MaxRes, setMaxRes] = useState(512);
    

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
        // setformObj(dreamModelInfo)
        // for(let key in dreamModelInfo) {
            console.log('dreamModelInfo', dreamModelInfo)
            form.setFieldsValue({...dreamModelInfo});
        // }
        
    //    form.submit()
        
    }, [dreamModelInfo]);

    const onFinish = (values) => {
        console.log('Success:', values);
      };


    // const onChangeStopTextEncoder = (val) => {
    //     setformObj(prevState => ({
    //         ...prevState,
    //         stopTextEncoder: val
    //     }));
    // }

    // const onChangeClipSkip = (val) => {
    //     setformObj(prevState => ({
    //         ...prevState,
    //         ClipSkip: val
    //     }));
    // }
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
        { value: 'Torch AdamW', label: 'Torch AdamW' },
        {
            value: 'Adafactor',
            label: 'Adafactor'
        }, { value: '8bit AdamW', label: '8bit AdamW' }, {
            value: 'Paged 8bit AdamW',
            label: 'Paged 8bit AdamW'
        }, { value: 'AdamW Dadaptation', label: 'AdamW Dadaptation' }, {
            value: 'Adan Dadaptation',
            label: 'Adan Dadaptation'
        }, { value: 'AdanIP Dadaptation', label: 'AdanIP Dadaptation' }, { value: 'Apollo', label: 'Apollo' }, {
            value: 'CAME',
            label: 'CAME'
        }, { value: 'Lion', label: 'Lion' }, { value: '8bit Lion', label: '8bit Lion' }, {
            value: 'Paged 8bit Lion',
            label: 'Paged 8bit Lion'
        }, { value: 'Lion Dadaptation', label: 'Lion Dadaptation' }, {
            value: 'Prodigy',
            label: 'Prodigy'
        }, { value: 'SGD Dadaptation', label: 'SGD Dadaptation' }, { value: 'Sophia', label: 'Sophia' }, {
            value: 'Tiger',
            label: 'Tiger'
        }];

    const precisionOption = [
        { value: 'no', label: 'no' },
        { value: 'fp16', label: 'fp16' },
        { value: 'bf16', label: 'bf16' },]
    return <div>
        <Form
            name="basic"
            layout="vertical"
            disabled={!dreamModel}
            form={form}
            onFinish={onFinish}
        >
            <Collapse defaultActiveKey={['1']}>

                <Panel header="Performance" key="1">

                    <Form.Item
                        label="Optimizer"
                        name="optimizer"
                    >
                        <Select
                            style={{
                                width: '100%',
                            }}
                            options={optimizerOption}
                            onChange={(e) => setFormObjDataHandler(e, 'optimizer')}
                        >
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Mixed Precision"
                        name="mixedPrecision"
                    >
                        <Select
                            style={{
                                width: '100%',
                            }}
                            options={precisionOption}
                            onChange={(e) => setFormObjDataHandler(e, 'mixedPrecision')}
                        >
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Memory Attention"
                        name="attention"
                    >
                        <Select
                            style={{
                                width: '100%',
                            }}
                            onChange={(e) => setFormObjDataHandler(e, 'attention')}
                        >
                            <Option value="default">default</Option>
                            <Option value="xformers">xformers</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label=""
                        name="cacheLatents"
                        valuePropName="checked"
                    >
                        <Checkbox onChange={(e) => setFormObjDataHandler(e.target.checked, 'cacheLatents')}>Cache
                            Latents</Checkbox>
                    </Form.Item>

                    <Form.Item
                        label=""
                        name="trainUnet"
                        valuePropName="checked"
                    >
                        <Checkbox onChange={(e) => setFormObjDataHandler(e.target.checked, 'trainUnet')}>Train
                            UNET</Checkbox>
                    </Form.Item>

                    <Form.Item
                        label="Step Ratio of Text Encoder Training"
                        name="stopTextEncoder"

                    >
                        <Row gutter={10}>
                            <Col span={19}>
                                <Slider
                                    min={0}
                                    max={1}
                                    onChange={(e) => setFormObjDataHandler(e, 'stopTextEncoder')}
                                    step={0.1}
                                />
                            </Col>
                            {/* <Col span={3}>
                                <InputNumber min={0} max={1} step={0.1}
                                    onChange={(e) => setFormObjDataHandler(e, 'stopTextEncoder')} />
                            </Col> */}
                        </Row>
                    </Form.Item>

                    <Form.Item
                        label="Clip Skip"
                        name="clipSkip"
                    >
                        <Row gutter={10}>
                            <Col span={19}>
                                <Slider
                                    min={0}
                                    max={12}
                                    onChange={(e) => setFormObjDataHandler(e, 'clipSkip')}
                                    step={1}
                                />
                            </Col>
                            {/* <Col span={3}>
                                <InputNumber min={0} max={12} step={1}
                                    onChange={(e) => setFormObjDataHandler(e, 'clipSkip')} />
                            </Col> */}
                        </Row>
                    </Form.Item>

                    <Form.Item
                        label=""
                        name="shuffleTags"
                        valuePropName="checked"
                    >
                        <Checkbox onChange={(e) => setFormObjDataHandler(e, 'shuffleTags')}>Shuffle
                            Tags</Checkbox>
                    </Form.Item>


                </Panel>
                <Panel header="Intervals" key="2">
                    {/* <Form
                    disabled={!dreamModel}
                    name="basic"
                    layout="vertical"> */}
                    <Form.Item
                        label="Training Steps Per Image (Epochs)"
                        name="numTrainEpochs"
                    >
                        {/* <Row gutter={10}> */}
                            {/* <Col span={19}> */}
                            <Slider
                                min={0}
                                max={1000}
                                onChange={(e) => setFormObjDataHandler(e, 'numTrainEpochs')}
                                step={1}
                            />
                            {/* </Col> */}
                            {/* <Col span={3}>
                                <InputNumber min={0} max={1}  step={1}
                                    onChange={(e) => setFormObjDataHandler(e, 'numTrainEpochs')} />
                            </Col> */}
                        {/* </Row> */}
                    </Form.Item>
                    <Form.Item
                        label="Save Model Frequency (Epochs)"
                        name="saveEmbeddingEvery"
                    >
                        {/* <Row gutter={10}>
                            <Col span={19}> */}
                                <Slider
                                    min={0}
                                    max={1000}
                                    onChange={(e) => setFormObjDataHandler(e, 'saveEmbeddingEvery')}
                                    step={1}
                                />
                            {/* </Col> */}
                            {/* <Col span={3}>
                                <InputNumber min={0} max={1}  step={1}
                                    onChange={(e) => setFormObjDataHandler(e, 'saveEmbeddingEvery')} />
                            </Col> */}
                        {/* </Row> */}
                    </Form.Item>
                    <Form.Item
                        label="Save Preview(s) Frequency (Epochs)"
                        name="savePreviewEvery"
                    >
                        {/* <Row gutter={10}>
                            <Col span={19}> */}
                                <Slider
                                    min={0}
                                    max={1000}
                                    onChange={(e) => setFormObjDataHandler(e, 'savePreviewEvery')}
                                    step={1}
                                />
                            {/* </Col> */}
                            {/* <Col span={3}>
                                <InputNumber min={0} max={1000}  step={1}
                                    onChange={(e) => setFormObjDataHandler(e, 'savePreviewEvery')} />
                            </Col> */}
                        {/* </Row> */}
                    </Form.Item>
                    {/* </Form> */}
                </Panel>
                <Panel header="Learning Rate" key="3">
                    <Row>
                        <Col span={12}>
                            <Form.Item label="Learning Rate" name="learningRate">
                                <InputNumber 
                                    onChange={(e) => setFormObjDataHandler(e, 'learningRate')}></InputNumber>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Text Encoder Learning Rate" name="learningRate">
                                <InputNumber  onChange={(e) => setFormObjDataHandler(e, 'learningRateMin')}></InputNumber>
                            </Form.Item>
                        </Col>
                    </Row>
                </Panel>
                <Panel header="Lora" key="4">
                    {/* <Form disabled={!dreamModel} layout="vertical"> */}
                    <Form.Item
                        label=""
                        name="useLora"
                        valuePropName="checked"
                    >
                        <Checkbox onChange={(e) => setFormObjDataHandler(e.target.checked, 'useLora')}>Use LORA</Checkbox>
                    </Form.Item>
                    <Form.Item
                        label={
                            <div className={`${styles.flex} ${styles.flexbs}`} style={{width: '100%'}}>
                                <span>Lora UNET Rank</span>
                                {/* <span>{dreamModelInfo.loraUnetRank}</span> */}
                                {/* <InputNumber min={2} max={128}  step={2} value={dreamModelInfo.loraUnetRank}
                                    onChange={(e) => setFormObjDataHandler(e, 'loraUNETRank')} /> */}
                            </div>
                        }
                        name="loraUnetRank"
                    >
                        {/* <Row gutter={10}>
                            <Col span={19}> */}
                                <Slider
                                    min={2}
                                    max={128}
                                    onChange={(e) => setFormObjDataHandler(e, 'loraUnetRank')}
                                    step={2}
                                />
                            {/* </Col> */}
                            {/* <Col span={3}>
                                <InputNumber min={2} max={128}  step={2}
                                    onChange={(e) => setFormObjDataHandler(e, 'loraUNETRank')} />
                            </Col> */}
                        {/* </Row> */}
                    </Form.Item>
                    <Form.Item
                        label="Lora Text Encoder Rank"
                        name="loraTxtRank"
                    >
                        {/* <Row gutter={10}>
                            <Col span={19}> */}
                                <Slider
                                    min={0}
                                    max={128}
                                    onChange={(e) => setFormObjDataHandler(e, 'loraTxtRank')}
                                    step={2}
                                />
                            {/* </Col> */}
                            {/* <Col span={3}>
                                <InputNumber min={0} max={128}  step={2}
                                    onChange={(e) => setFormObjDataHandler(e, 'loraTxtRank')} />
                            </Col> */}
                        {/* </Row> */}
                    </Form.Item>
                    <Form.Item
                        label="Lora Weight (Alpha)"
                        name="loraWeight"
                    >
                        {/* <Row gutter={10}>
                            <Col span={19}> */}
                                <Slider
                                    min={0.1}
                                    max={1}
                                    onChange={(e) => setFormObjDataHandler(e, 'loraWeight')}
                                    step={0.1}
                                />
                            {/* </Col> */}
                            {/* <Col span={3}>
                                <InputNumber min={0.1} max={1} step={0.1}
                                    onChange={(e) => setFormObjDataHandler(e, 'loraWeight')} />
                            </Col> */}
                        {/* </Row> */}
                    </Form.Item>
                    {/* </Form> */}
                </Panel>
                <Panel header="Image Processing" key="5">
                    <Form.Item
                        label="Max Resolution"
                        name="resolution"
                    >
                        {/* <Row gutter={10}>
                            <Col span={19}> */}
                                <Slider
                                    min={128}
                                    max={2048}
                                    onChange={(e) => setFormObjDataHandler(e, 'resolution')}
                                    step={64}
                                    disabled={!dreamModel}
                                />
                            {/* </Col> */}
                            {/* <Col span={3}>
                                <InputNumber min={2} max={2048} step={64} disabled={!dreamModel}
                                    onChange={(e) => setFormObjDataHandler(e, 'resolution')} />
                            </Col> */}
                        {/* </Row> */}
                    </Form.Item>
                </Panel>
                <Panel header="Saving" key="6">
                    <div className={styles.prose}>General</div>

                    <Form.Item
                        label="Custom Model Name"
                        name="customModelName"
                    >
                        <Input type="textarea" onChange={(e) => setFormObjDataHandler(e, 'customModelName')}
                            placeholder="Enter a model name for saving checkpoints and lora models." />
                    </Form.Item>

                    <Form.Item
                        label=""
                        name="saveCkptCancel"
                        valuePropName="checked"
                    >
                        <Checkbox onChange={(e) => setFormObjDataHandler(e.target.checked, 'saveCkptCancel')}>
                            Generate a .ckpt file when training is canceled.</Checkbox>
                    </Form.Item>
                </Panel>
                <Panel header="Extra" key="7">
                    <div className={styles.prose}>Sanity Samples</div>
                    <Form.Item
                        label="Sanity Sample Prompt"
                        name="sanityPrompt"
                    >
                        <Input type="textarea" onChange={(e) => setFormObjDataHandler(e, 'sanityPrompt')}
                            placeholder="A generic prompt used to generate a sample image to verify model fidelity." />
                    </Form.Item>

                    <Form.Item
                        label="Sanity Sample Seed"
                        name="sanitySeed"
                    >
                        <InputNumber step={1} onChange={(e) => setFormObjDataHandler(e, 'sanitySeed')} />
                    </Form.Item>
                </Panel>
            </Collapse>
        </Form>
    </div>
}

export default App