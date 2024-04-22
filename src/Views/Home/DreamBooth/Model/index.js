import { Tabs } from 'antd';
import CreateDom from './CreateDom/index.js';
import SelectDom from './SelectDom/index.js';
const App = () => {
    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: 'Select',
            label: 'Select',
            children: <SelectDom></SelectDom>,
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
