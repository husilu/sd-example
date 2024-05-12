import { Tabs } from 'antd';
import CreateDom from './CreateDom/index.js';
import SelectDom from './SelectDom/index.js';
import { useRef } from 'react';
const App = () => {
    const selectRef = useRef()
    const onChange = (key) => {
        if (key === 'Select') {
            selectRef.current?.getRandom()
        }
    };
    const items = [
        {
            key: 'Select',
            label: 'Select',
            children: <SelectDom childRef={selectRef}></SelectDom>,
        },
        {
            key: 'Create',
            label: 'Create',
            children: <CreateDom></CreateDom>,
        }
    ];
    return (
        <div>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange}></Tabs>
        </div>
    )
}
export default App
