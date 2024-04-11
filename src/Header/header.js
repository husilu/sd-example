import './header.css'
import logo from '../assets/images/logo.png'
import { Popover, Radio, Avatar } from 'antd'
import {useState} from 'react'
const users = [
    {
        code: 1,
        name: 'OceanEyes',
        avatar: require('../assets/images/user-avatar1.jpg')
    },
    {
        code: 2,
        name: 'Sonohara',
        avatar: require('../assets/images/user-avatar2.jpg')
    },
    {
        code: 3,
        name: 'CloudS',
        avatar: require('../assets/images/user-avatar3.png')
    },
    {
        code: 4,
        name: '路过的小学生',
        avatar: require('../assets/images/logo.png')
    }
]
function Userlist() {
    return (
        users.map(i=> <Radio value={i.code}>{i.name}</Radio>)
    )
}
function CustomHeader () {
    const [value, setValue] = useState(4); // 默认值
    const content = <Radio.Group onChange={onChange} value={value}>
        <Userlist />
    </Radio.Group>

    function onChange(e) {
        console.log('radio checked', e.target.value);
        setValue(e.target.value); // 修改state
    }
    return (
        <div className="header-title display-f-s">
            <div className="display-f-a">
                <img src={logo} className="mr16" alt=""/>
                <span className="font18 font-700 mr16">我们能力有限公司</span>
                <span className="font12">欢迎{users.filter(i=> i.code === value)[0].name}使用wuli系统, 祝你今天没有bug，也没有shopify :D</span>
            </div>
            <Popover placement="bottom" title="我是" content={content} trigger="click">
                <div className="user-button cursor">
                    <i className="iconfont icon-yonghu font16" />
                    <span className="ml8 mr8">{users.filter(i=> i.code === value)[0].name}</span>
                    <Avatar src={<img src={users.filter(i=> i.code === value)[0].avatar} alt="avatar" />} />
                </div>
            </Popover>

        </div>
    )
}
export default CustomHeader
