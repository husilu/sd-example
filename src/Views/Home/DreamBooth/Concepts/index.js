import { Tabs, Form, Input, Slider, InputNumber, Col, Row } from "antd";
import styles from './styles.module.scss';
import {useState} from 'react'
import {useSelector} from 'react-redux'
const { TextArea } = Input;
const App = () => {
  const [preInstance, setpreInstance] = useState(0);
  const [cfgScale, setcfgScale] = useState(0);
  const [steps, setsteps] = useState(0);
  const [GenerateVal, setGenerateVal] = useState(1);
  const dreamModel = useSelector(state => state.home.dreamModel);

  const [directory, setDirectory] = useState('');
  const [prompt, setPrompt] = useState(0);
  const [instanceToken, setpreInstanceToken] = useState('');
  const [classToken, setClassToken] = useState('');
  const [classDirectory, setClassDirectory] = useState('');
  const [classPrompt, setClassPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');
  const [sampleImagePrompt, setSampleImagePrompt] = useState('');
  const [samplePromptTemplateFile, setSamplePromptTemplateFile] = useState('');


  const onChange = () => {

  }

  const items = [
    {
      key: 'Instance Images',
      label: 'Instance Images',
      children: (<Form
        name="basic"
        layout="vertical"
        disabled={!dreamModel}
      >
        <Form.Item
          label="Directory"
          name="Directory"
        >
          <TextArea rows={2} placeholder="Path to directory with input images" onChange={(e) => setDirectory(e)}/>
        </Form.Item>

        <Form.Item
          label="Prompt"
          name="Prompt"
          initialValue={'[filewords]'}
        >
          <TextArea rows={2} onChange={(e) => setPrompt(e)}/>
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
          initialValue={'[filewords]'}
        >
          <TextArea rows={2} onChange={(e) => setpreInstanceToken(e)}/>
        </Form.Item>

        <div className={styles.tip}>
          If using [filewords] above, this is the unique word used for your subject, like 'fydodog' or 'ohwx'.
        </div>

        <Form.Item
          label="Class Token"
          name="Class Token"
        >
          <TextArea rows={2} onChange={(e) => setClassToken(e)}/>
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
      >
        <Form.Item
          label="Directory"
          name="Directory"
        >
          <TextArea rows={2} placeholder="(Optional) Path to directory with classification/regularization images" onChange={(e) => setClassDirectory(e)}/>
        </Form.Item>

        <Form.Item
          label="Prompt"
          name="Prompt"
          initialValue={'[filewords]'}
        >
          <TextArea rows={2} onChange={(e) => setClassPrompt(e)}/>
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
          <TextArea rows={2} onChange={(e) => setNegativePrompt(e)}/>
        </Form.Item>

        <Form.Item
          label="Class Images Per Instance Image"
          name="Class Images Per Instance Image"
        >
          <Row gutter={10}>
            <Col span={19}>
            <Slider
                onChange={(e)=>setpreInstance(e)}
                min={0}
                max={100}
                value={typeof preInstance === 'number' ? preInstance : 0}
            />
            </Col>
            <Col span={3} className={styles.numInput}>
              <InputNumber min={0} max={100} value={preInstance} onChange={onChange} />
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
                  onChange={(e)=>setcfgScale(e)}
                  min={1}
                  max={12}
                  value={typeof cfgScale === 'number' ? cfgScale : 0}
                  step={0.1}
              />
            </Col>
            <Col span={3} className={styles.numInput}>
              <InputNumber min={1} max={12} value={cfgScale} onChange={onChange} step={0.1}/>
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
                  onChange={(e)=>setsteps(e)}
                  min={10}
                  max={200}
                  value={typeof steps === 'number' ? steps : 0}
              />
              </Col>
              <Col span={3} className={styles.numInput}>
              <InputNumber min={10} max={200} value={cfgScale} onChange={onChange} />
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
        >
          <Form.Item
            label="Sample Image Prompt"
            name="Sample Image Prompt"
            initialValue={'[filewords]'}
          >
            <TextArea rows={2} onChange={(e) => setSampleImagePrompt(e)}/>
          </Form.Item>
          <div className={styles.tip}>
            A prompt to generate samples from, or use [filewords] here to randomly select prompts from the existing instance prompt(s).
          </div>
          <Form.Item
            label="Sample Prompt Template File"
            name="Sample Prompt Template File"
            placeholder="Enter the path to a txt file containing sample prompts."
          >
            <TextArea rows={2} onChange={(e) => setSamplePromptTemplateFile(e)}/>
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
                  onChange={(e)=>setGenerateVal(e)}
                  min={0}
                  max={100}
                  value={typeof GenerateVal === 'number' ? GenerateVal : 0}
                  step={1}
              />
            </Col>
            <Col span={3} className={styles.numInput}>
              <InputNumber min={0} max={100} value={GenerateVal} onChange={onChange}/>
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