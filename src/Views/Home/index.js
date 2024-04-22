import { Tabs, Select } from "antd";
import { useEffect, useState } from 'react';
import DreamBooth from './DreamBooth';
import TxtToImg from './txtToImg'; // Add the missing import statement
import ImgToImg from './imgToImg';
import Api from '../../api/home';

const Home = () => {
  useEffect(() => {
    Api.getModels().then(res => {
      console.log('res', res)
    })
  }, []); // 第二个参数是一个空数组，表示effect仅在组件挂载和卸载时执行
  const onChange = (key) => {
    // console.log(key);
  };

  const handleChange = (val) => {

  }

  const items = [
    {
      key: 'txt2img',
      label: 'txt2img',
      children: <TxtToImg></TxtToImg>,
    },
    {
      key: 'img2img',
      label: 'img2img',
      children: <ImgToImg></ImgToImg>,
    }
  ];


  return <>
    <Select
      defaultValue="lucy"
      style={{
        width: 120,
        marginBottom: 10
      }}
      onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
        {
          value: 'disabled',
          label: 'Disabled',
          disabled: true,
        },
      ]}
    />
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} type="card"/>
  </>
}

export default Home
