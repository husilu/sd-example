
import { Select } from 'antd';
import { useState } from 'react';
import styles from './styles.module.scss'
export default function App() {
  const [value, setvalue] = useState("jack");
  const handleChange = () => {

  }
  const getRandom = () => {
    console.log('随机参数')
  }

  const onChange = () => {

  }

  const modelOptions = [
    {
      value: 'jack',
      label: 'Jack',
    },
    {
      value: 'jack',
      label: 'Jack',
    },
    {
      value: 'jack',
      label: 'Jack',
    }
  ]

  return (
    <>
      <div>Model</div>
      <div className={`${styles['flex-center']} ${styles['mb10']}`}>
        <Select
          value={value}
          style={{
            width: '90%'
          }}
          onChange={handleChange}
          options={modelOptions}
        />
        <div onClick={getRandom} className={styles['r-btn']}>
          🔄
        </div>
    </div>
    </>
  )
}
