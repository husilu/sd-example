import {Col, Form, Input, InputNumber, Row, Slider, Tabs} from "antd";
import styles from './styles.module.scss';
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getDreamModelInfo, editDreamModelInfo} from "../../../../store/reducers/homeReducer";


const { TextArea } = Input;
const App = () => {
  const dispatch = useDispatch(); // 获取dispatch函数
  const [form1] = Form.useForm();

  const [form2] = Form.useForm();
  const [form3] = Form.useForm();
  const dreamModelInfo = useSelector(state => state.home.dreamModelInfo);
  const dreamModel = useSelector(state => state.home.dreamModel);

  const setFormObjDataHandler = (val, key) => {
    dispatch(editDreamModelInfo({dreamModelInfo: {...dreamModelInfo, conceptsList: [val]}}))
}

useEffect(() => {
    form1.setFieldsValue({...dreamModelInfo});
    form2.setFieldsValue({...dreamModelInfo});
    form3.setFieldsValue({...dreamModelInfo});  
}, [dreamModelInfo]);
  
  const onChange = () => {
  //   console.log('onChange',preInstance);
  //   dispatch(getDreamModelInfo({ dreamModelInfo: {
  //       conceptsList:[{
  //         instancePrompt: prompt,
  //         instanceDataDir: directory,
  //         instanceToken: instanceToken,
  //         classToken: classToken,
  //         classDataDir: classDirectory,
  //         classPrompt: classPrompt,
  //         classNegativePrompt: negativePrompt,
  //         saveSamplePrompt: sampleImagePrompt,
  //         saveSampleTemplate: samplePromptTemplateFile,
  //         numClassImagesPer: preInstance,
  //         classGuidanceScale: cfgScale,
  //         classInferSteps: steps,
  //         nSaveSample:GenerateVal
  //       }]
  //     } }));
  }

  const items = [
    {
      key: 'Instance Images',
      label: 'Instance Images',
      children: (<Form
        name="basic"
        layout="vertical"
        disabled={!dreamModel}
        form={form1}
      >
        <Form.Item
          label="Directory"
          name="Directory"
        >
          <TextArea rows={2} placeholder="Path to directory with input images" onChange={(e) => setFormObjDataHandler(e.target.value, 'instanceDataDir')}/>
        </Form.Item>

        <Form.Item
          label="Prompt"
          name="Prompt"
        >
          <TextArea rows={2} onChange={(e) => setFormObjDataHandler(e.target.value, 'instancePrompt')}/>
        </Form.Item>
        <div className={styles.tip}>
          Use [filewords] here to read prompts from caption files/filename, or a prompt to describe your training images.
        </div>
        <div className={styles.tip}>
          If using [filewords], your instance and class tokens will be inserted into the prompt as necessary for training.
        </div>

        <Form.Item
          label="Instance Token"
          name="Instance Token"
        >
          <TextArea rows={2} onChange={(e) => setFormObjDataHandler(e.target.value, 'instanceToken')}/>
        </Form.Item>

        <div className={styles.tip}>
          If using [filewords] above, this is the unique word used for your subject, like 'fydodog' or 'ohwx'.
        </div>

        <Form.Item
          label="Class Token"
          name="Class Token"
        >
          <TextArea rows={2} onChange={(e) => setFormObjDataHandler(e.target.value, 'classToken')}/>
        </Form.Item>
        <div className={styles.tip}>
          If using [filewords] above, this is the generic word used for your subject, like 'dog' or 'person'.
        </div>
      </Form>),
    },
    {
      key: 'Class Images',
      label: 'Class Images',
      children: (<Form
      name="basic"
      layout="vertical"
      disabled={!dreamModel}
      form={form2}
      >
        <Form.Item
          label="Directory"
          name="Directory"
        >
          <TextArea rows={2} placeholder="(Optional) Path to directory with classification/regularization images" onChange={(e) => setFormObjDataHandler(e.target.value, 'classDataDir')}/>
        </Form.Item>

        <Form.Item
          label="Prompt"
          name="Prompt"
          initialValue={'[filewords]'}
        >
          <TextArea rows={2} onChange={(e) => setFormObjDataHandler(e.target.value, 'classPrompt')}/>
        </Form.Item>
        <div className={styles.tip}>
          Use [filewords] here to read prompts from caption files/filename, or a prompt to describe your training images.
        </div>
        <div className={styles.tip}>
          If using [filewords], your class token will be inserted into the file prompts if it is not found.
        </div>

        <Form.Item
          label="Negative Prompt"
          name="Negative Prompt"
        >
          <TextArea rows={2} onChange={(e) => setFormObjDataHandler(e.target.value, 'classNegativePrompt')}/>
        </Form.Item>

        <Form.Item
          label="Class Images Per Instance Image"
          name="Class Images Per Instance Image"
        >
          <Row gutter={10}>
            <Col span={19}>
            <Slider
                onChange={(e)=> setFormObjDataHandler(e, 'numClassImagesPer')}
                min={0}
                max={100}
            />
            </Col>
            <Col span={3} className={styles.numInput}>
              <InputNumber min={0} max={100}   onChange={(e)=> setFormObjDataHandler(e, 'numClassImagesPer')}/>
            </Col>
            </Row>
        </Form.Item>
        
        <div className={styles.tip}>
          For every instance image, this many classification images will be used/generated. Leave at 0 to disable.
        </div>

        <Form.Item
          label="Classification CFG Scale"
          name="Classification CFG Scale"
        >
          <Row gutter={10}>
            <Col span={19}>
              <Slider
                  onChange={(e)=>setFormObjDataHandler(e, 'classGuidanceScale')}
                  min={1}
                  max={12}
                  step={0.1}
              />
            </Col>
            <Col span={3} className={styles.numInput}>
              <InputNumber min={1} max={12} onChange={(e)=>setFormObjDataHandler(e, 'classGuidanceScale')} step={0.1}/>
            </Col>
            </Row>
        </Form.Item>


        <Form.Item
          label="Classification Steps"
          name="Classification Steps"
        >
          <Row gutter={10}>
            <Col span={19}>
              <Slider
                  onChange={(e)=>setFormObjDataHandler(e, 'classInferSteps')}
                  min={10}
                  max={200}
              />
              </Col>
              <Col span={3} className={styles.numInput}>
              <InputNumber min={10} max={200} onChange={(e)=>setFormObjDataHandler(e, 'classInferSteps')} />
            </Col>
          </Row>
        </Form.Item> 
    </Form>),
    },
    {
      key: 'Sample Images',
      label: 'Sample Images',
      children: (
        <Form
          name="basic"
          layout="vertical"
          disabled={!dreamModel}
          form={form3}
        >
          <Form.Item
            label="Sample Image Prompt"
            name="Sample Image Prompt"
            initialValue={'[filewords]'}
          >
            <TextArea rows={2} onChange={(e) => setFormObjDataHandler(e.target.value, 'saveSamplePrompt')}/>
          </Form.Item>
          <div className={styles.tip}>
            A prompt to generate samples from, or use [filewords] here to randomly select prompts from the existing instance prompt(s).
          </div>
          <Form.Item
            label="Sample Prompt Template File"
            name="Sample Prompt Template File"
            placeholder="Enter the path to a txt file containing sample prompts."
          >
            <TextArea rows={2} onChange={(e) => setFormObjDataHandler(e.target.value, 'saveSampleTemplate')}/>
          </Form.Item>
          <div className={styles.tip}>
            When enabled the above prompt and negative prompt will be ignored.
          </div>
          <Form.Item
          label="Number of Samples to Generate"
          name="Number of Samples to Generate"
        >
          <Row gutter={10}>
            <Col span={19}>
              <Slider
                  onChange={(e)=>setFormObjDataHandler(e, 'nsaveSample')}
                  min={0}
                  max={100}
                  step={1}
              />
            </Col>
            <Col span={3} className={styles.numInput}>
              <InputNumber min={0} max={100} onChange={(e)=>setFormObjDataHandler(e, 'nsaveSample')}/>
            </Col>
            </Row>
        </Form.Item>
      </Form>
      ),
    }
  ];
  return (
    <div>
      <Tabs items={items} onChange={onChange} type="card" className={styles.tabs}>
      </Tabs>
    </div>
  )
}

export default App