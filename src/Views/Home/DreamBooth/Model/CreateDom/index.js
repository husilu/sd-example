import { Button, Form, Input, Select } from "antd"
import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux';
const { Option } = Select;

const App = () => {
  const modelConfig = useSelector(state => state.home.modelConfig);

  const createModel = () => {

  }
  const onFinish = () => {

  }

  const onFinishFailed = () => {

  }

  const getRandom = () => {

  }

  const typeOptions = [
    {label: "v1x", value: "v1x  "},
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
          <Input type="textarea"/>
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
            >
          </Select>
          
        </Form.Item>
    </Form>
    </>
  )
}

export default App