import {Col, Row, Tabs, Button, Image, Collapse} from 'antd'
import {useEffect, useState} from 'react';
import Model from './Model/index.js'
import Concepts from './Concepts/index'
import Parameters from './Parameters/index.js'
import styles from './styles.module.scss'
import Api from '../../../api/home';
import {useSelector} from "react-redux";
import {useDispatch} from 'react-redux';
import {getDreamModelInfo} from "../../../store/reducers/homeReducer";

const {Panel} = Collapse;

const App = () => {
    const dispatch = useDispatch(); // 获取dispatch函数
    const dreamModelInfo = useSelector(state => state.home.dreamModelInfo);
    const [attr, setattr] = useState(null);
    const dreamModel = useSelector(state => state.home.dreamModel);
    const [active, setActive] = useState(false);
    const [imgBase64, setImgBase64] = useState('');
    const INTERVAL = 5000; // 每5秒请求一次
    const items = [
        {
            key: 'Model',
            label: 'Model',
            children: <Model></Model>,
        },
        {
            key: 'Concepts',
            label: 'Concepts',
            children: <Concepts></Concepts>
        },
        {
            key: 'Parameters',
            label: 'Parameters',
            children: <Parameters></Parameters>
        },
    ];

    const onChange = () => {

    }

    const LoadingSetting = () => {
        if (dreamModel) {
            // let classPrompt = Concepts.classPrompt;
            console.log(dreamModel);
            Api.getDbModels(dreamModel).then(res => {
                if (res.responseCode === '000') {
                    console.log("res=", res.data)
                    dispatch(getDreamModelInfo({dreamModelInfo: res.data}));
                }
            })
        }
    }

    const SaveSetting = () => {
        if (dreamModel) {
            debugger;
            Api.updateDbModelNames(dreamModelInfo).then(r => {
                if (r.responseCode === '000') {
                    console.log(r.data);
                }
            })
        }
    }

    const Training = () => {
        // debugger;
        console.log(dreamModel);
        if (dreamModel) {
            Api.trainJob(dreamModel).then(r => {
                if (r.responseCode === '000') {
                    setActive(true);
                    console.log(r.data);
                } else {
                    setActive(false);
                    cancelJob();
                }
            })
        }
    }

    const cancelJob = () => {
        // debugger;
        console.log(dreamModel);
        if (dreamModel) {
            Api.cancelJob().then(r => {
                console.log(r.data);
            })
        }
    }

    const getJobStatus = () => {
        Api.getJobStatus().then(res => {
            debugger;
            if (res.responseCode === '000') {
                console.log("res=", res.data)
                debugger;
                let temp = undefined === res.data || null === res.data.data ? false : res.data;
                setActive(temp);
            } else {
                setActive(false);
                cancelJob();
            }
        })
    }

    const getJobImg = () => {
        if (dreamModel) {
            Api.getImage(dreamModel).then(res => {
                // debugger;
                if (res.responseCode === '000') {
                    setImgBase64(res.data);
                }
            })
        }
    }

    useEffect(()=>{
        debugger;
        const intervalId = setInterval(() => {
            if (active) {
                getJobStatus();
            } else {
                getJobImg();
                clearInterval(intervalId);
            }
        }, INTERVAL);
        // 清理函数，虽然在这个场景下可能不需要显式清除定时器，因为我们在interval内部已经做了判断
        return () => {
            clearInterval(intervalId);
        };
    }, [active]);// 依赖数组包含isDone和isFetching，确保状态改变时能重新评估是否继续请求

const GenerateCkpt = () => {

}

return <div>
    <Row style={{marginBottom: '10px'}} gutter={5}>
        <Col span={6}><Button style={{width: '100%'}} onClick={LoadingSetting}>Load Settings</Button></Col>
        <Col span={6}><Button style={{width: '100%'}} onClick={SaveSetting}>Save Settings</Button></Col>
        <Col span={6}><Button style={{width: '100%'}} onClick={Training}>Train</Button></Col>
        <Col span={6}><Button style={{width: '100%'}} onClick={cancelJob}>cancel</Button></Col>
    </Row>
    {attr?.name ?
        <Row>
            <Col span={8}>
                <span></span>
                <span></span>
            </Col>
            <Col span={8}>
                <span></span>
                <span></span>
            </Col>
            <Col span={8}>
                <span></span>
                <span></span>
            </Col>
        </Row> : <></>}
    <Row gutter={20}>
        <Col span={12}>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} type="card" className={styles.tabs}/>
            <Collapse onChange={onChange} defaultActiveKey={['1']}>
                <Panel header="Resources" key="1">
                    <a href="https://github.com/d8ahazard/sd_dreambooth_extension/wiki/ELI5-Training" target="_blank"
                       style={{display: 'block'}}>Beginners guide</a>
                    <a href="https://github.com/d8ahazard/sd_dreambooth_extension/releases/latest" target="_blank">Release
                        notes</a>
                </Panel>
            </Collapse>
        </Col>
        <Col span={12}>
            {/*<div className={styles['flex-sp']}>*/}
            {/*  <div style={{fontSize: '24px'}}>Output</div>*/}
            {/*  <Button>Refresh</Button>*/}
            {/*</div>*/}
            <p>Selected model: {dreamModel}</p>
            <div>
                {/*  这里需要一个任务执行中的状态表示，如果要放图片的话需要一个定时任务一直请求后端接口，直到任务结束拿到图片数据  */}
                <Image
                    width={"100%"}
                    // src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    src={imgBase64}
                />
            </div>
        </Col>
    </Row>
</div>
}

export default App