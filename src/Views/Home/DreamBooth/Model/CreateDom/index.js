import { Button, Form, Input, Select, message, Spin } from "antd"
import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import Api from '../../../../../api/home'
const { Option } = Select;

const App = (props) => {
  const modelConfig = useSelector(state => state.home.modelConfig);
  const [modelName, setModelName] = useState('');
  const [modelType, setModelType] = useState('');
  const [source, setSource] = useState('');
  const [ceateLoading, setceateLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();


  const createModel = async() => {
    let model = {
      newModelName: modelName,
      newModelSrc: source,
      modelType: modelType
    }
    setceateLoading(true)
    // debugger;
    let res = await Api.createDBModel(model) 
    if (res.responseCode === '000') {
      messageApi.open({
        type: 'success',
        content: '创建成功!',
      });
    }
    setceateLoading(false)
  }

  const typeOptions = [
    { label: "v1x", value: "v1x" },
    { label: "v2x-512", value: "v2x-512" },
    { label: "v2x", value: "v2x" },
    { label: "SDXL", value: "SDXL" },
    { label: "ControlNet", value: "ControlNet" }
  ]

  return (
    <>
      {contextHolder}
      <Form
        name="basic"
        onFinish={createModel}
        autoComplete="off"
        layout='vertical'
      >
        <Spin spinning={ceateLoading} >
          <Button htmlType="submit" className={styles.createBtn} >Create Model</Button>
        </Spin>
        <Form.Item
          label="Name"
          name="model_name"
        >
          <Input type="textarea" value={modelName} onChange={(e) => setModelName(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Model Type"
          name="model_type"
        >
          <Select
            style={{
              width: '100%',
            }}
            options={typeOptions}
            onChange={(e) => setModelType(e)}
          >

          </Select>

        </Form.Item>

        <Form.Item
          label="Source Checkpoint"
          name="src"
        >
          <Select
            style={{
              width: '100%',
            }}
            options={modelConfig}
            onChange={(e) => setSource(e)}
          >
          </Select>

        </Form.Item>
      </Form>
    </>
  )
}

export default App