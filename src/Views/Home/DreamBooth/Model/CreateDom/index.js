import { Button, Form, Input, Select } from "antd"
import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import {useState} from "react";
import Api from '../../../../../api/home'
const { Option } = Select;

const App = () => {
  const modelConfig = useSelector(state => state.home.modelConfig);
  const [modelName,setModelName]=useState('');
  const [modelType,setModelType]=useState('');
  const [source,setSource]=useState('');


  const createModel = () => {
    let model={
      newModelName:modelName,
      newModelSrc:source,
      modelType:modelType
    }
    debugger;
    Api.createDBModel(model).then(res => {
      debugger;
      if(res.responseCode==='000'){
        alert("创建成功");
      }
      console.log(res)
    })
  }
  const onFinish = () => {

  }

  const onFinishFailed = () => {

  }

  const getRandom = () => {
  }

  const typeOptions = [
    {label: "v1x", value: "v1x"},
    {label: "v2x-512", value: "v2x-512"},
    {label: "v2x", value: "v2x"},
    {label: "SDXL", value: "SDXL"},
    {label: "ControlNet", value: "ControlNet"}
  ]

  return (
    <>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout='vertical'
      >
        <Button onClick={createModel} htmlType="submit" className={styles.createBtn}>Create Model</Button>
        <Form.Item
          label="Name"
          name="model_name"
        >
          <Input type="textarea" value={modelName} onChange={(e) => setModelName(e.target.value)}/>
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
                onChange={(e)=>setModelType(e)}
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
                onChange={(e)=>setSource(e)}
            >
          </Select>
          
        </Form.Item>
    </Form>
    </>
  )
}

export default App