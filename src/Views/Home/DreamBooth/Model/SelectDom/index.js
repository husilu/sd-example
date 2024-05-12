
import { Select, Spin } from 'antd';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles.module.scss'
import Api from '../../../../../api/home'
import { changeModel,getDreamModelInfo } from '../../../../../store/reducers/homeReducer'; // 导入loginSuccess action

export default function App() {
  const dreamModel = useSelector(state => state.home.dreamModel);
  const user = useSelector(state => state.auth.user);
  const [spinning, setspinning] = useState(false);
  const [modelOptions, setmodelOptions] = useState([])
  const dispatch = useDispatch(); // 获取dispatch函数
  // const [modelInfo, setModelInfo] =useState()
  const handleChange = (val) => {
    dispatch(changeModel({ dreamModel: val }));
    setspinning(true)
    Api.getDbModels(val).then(res => {
      console.log('res', res)
        if (res.data){
            dispatch(getDreamModelInfo({ dreamModelInfo:res.data }));
        }
    }).finally(() => {
      setspinning(false)
    })
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
    getRandom();
  }, []); // 第二个参数是一个空数组，表示effect仅在组件挂载和卸载时执

  return (
    <>
      <Spin spinning={spinning} fullscreen="true" />
      <div>Model</div>
      <div className={`${styles['flex-center']} ${styles['mb10']}`}>
        <Select
          value={dreamModel}
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
