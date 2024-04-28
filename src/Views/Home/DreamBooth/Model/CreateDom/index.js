import { Button, Form, Input, Select } from "antd"
import styles from './styles.module.scss'
const { Option } = Select;

const App = () => {
  const createModel = () => {

  }
  const onFinish = () => {

  }

  const onFinishFailed = () => {

  }

  const getRandom = () => {

  }

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
          name="name"
        >
          <Input type="textarea"/>
        </Form.Item>

        <Form.Item
          label="Model Type"
          name="type"
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
          label="Source Checkpoint"
          name="source"
        >
          <div className={styles['flex-center']}>
            <Select
                style={{
                    width: '100%',
                }}
                defaultValue="86"
            >
                <Option value="86">+86</Option>
          </Select>
          <div onClick={getRandom} className={styles['r-btn']}>
            🔄
          </div>
          </div>
          
        </Form.Item>
    </Form>
      
      
    </>
  )
}

export default App