
import { Select } from 'antd';
import { useState, useEffect } from 'react';
import styles from './styles.module.scss'
import Api from '@/api/home'
export default function App() {
  const [value, setvalue] = useState("jack");
  const [modelOptions, setmodelOptions] = useState([])
  const handleChange = () => {
    
  }
  const getRandom = () => {
    Api.getDbModelNames().then(res => {
      let list = res.data.list
      list = list.map(item => {
       return {
        value: item,
        label: item,
       }
      })
      setmodelOptions(list)
    })
  }

  useEffect(() => {
    Api.getDbModelNames().then(res => {
      let list = res.data.list
      list = list.map(item => {
       return {
        value: item,
        label: item,
       }
      })
      setmodelOptions(list)
      setvalue(list[0].value)
    })
  }, []); // 第二个参数是一个空数组，表示effect仅在组件挂载和卸载时执行


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
