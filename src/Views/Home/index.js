import { Tabs, Select } from "antd";
import { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import DreamBooth from './DreamBooth';
import TxtToImg from './txtToImg'; // Add the missing import statement
import ImgToImg from './imgToImg';
import Api from '../../api/home';
import { getModelConfig } from '@/store/reducers/homeReducer'; // 导入loginSuccess action

const Home = () => {
  const [modelOptions, setmodelOptions] = useState([]);
  const [value, setvalue] = useState("");
  const [tabValue, settabValue] = useState();
  const dispatch = useDispatch(); // 获取dispatch函数
  useEffect(() => {
    Api.getModels().then(res => {
      let list = res.data.list
      list = list.map(item => {
        return {
          label: item.modelName,
          value: item.modelName
        }
      })
      setmodelOptions(list)
      dispatch(getModelConfig({ modelConfig: list }));
      setvalue(list[0].value)
    })
  }, []); // 第二个参数是一个空数组，表示effect仅在组件挂载和卸载时执行
  const onChange = (key) => {
    console.log('onchange')
    // console.log(key);
    // Api.setModel(key);
  };

  const handleChange = (val) => {
    console.log(val)
    Api.setModel(val).then((res) => {
      console.log(res);
      setvalue(val);
    })
  }

  const items = [
    {
      key: 'txt2img',
      label: 'txt2img',
      children: <TxtToImg type={'txt2img'}></TxtToImg>,
    },
    {
      key: 'img2img',
      label: 'img2img',
      children: <ImgToImg type={'img2img'}></ImgToImg>,
    },
    {
      key: 'dreamBooth',
      label: 'DreamBooth',
      children: <DreamBooth type={'dreamBooth'}></DreamBooth>,
    }
  ];


  return <>
    <Select
      value={value}
      style={{
        width: 320,
        marginBottom: 10
      }}
      onChange={handleChange}
      options={modelOptions}
    />
    <Tabs activeKey={tabValue} items={items} onChange={onChange} type="card"/>
  </>
}

export default Home
