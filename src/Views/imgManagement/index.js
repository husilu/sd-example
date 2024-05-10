import { Col, Row, Slider, Card, Select, message, Spin } from 'antd';
import { CloudDownloadOutlined, DeleteOutlined } from '@ant-design/icons';
import Api from '../../api/img.js';
import { useEffect, useState } from 'react';
const baseURL =  'http://124.71.223.180:8088'


const { Meta } = Card;
export default function App() {
    const [value, setvalue] = useState("txt2img");
    const [list, setlist] = useState([]);
    const [loading, setloading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        setloading(true)
        Api.imglist(value).then(res => {
            if (res.responseDesc === 'SUCCESS') {
                setlist(res.data.list)
                setloading(false)
            }
        })
    }, [value]);
    const downLoadHandler = (fileName) => {
        Api.download(value, fileName).then(res => {
            debugger;
            console.log("res", res)
        })
    }

    const onChange = (val) => {
        setvalue(val)
    }
    const deleteHandler = (fileName) => {
        setloading(true)
       Api.delImg(value, fileName).then(res => {
            if (res.data) {
                messageApi.open({
                    type: 'success',
                    content: '删除成功！',
                });
                Api.imglist(value).then(res => {
                    if (res.responseDesc === 'SUCCESS') {
                        setlist(res.data.list)
                        setloading(false)
                    }
                })
            }
       })
    }

    const options = [
        {
            value: 'txt2img',
            label: '文生图',
        },
        {
            value: 'img2img',
            label: '图生图',
        }
        // {
        //     value: 'booth',
        //     label: 'Dreambooth',
        // }
    ]
    return (
        <div>
            {contextHolder}
            <Row>
                <Col>
                    <Select
                        onChange={onChange}
                        value={value}
                        style={{
                            width: 120,
                            marginBottom: 20
                        }}

                        options={options}
                    />
                </Col>
            </Row>
            <Spin spinning={loading}>
            <Row gutter={16}>
                    {list.map(item => {
                        return <Col span={6}>
                            <Card
                            key={item.fileName}
                            bordered={false}
                            hoverable
                            style={{
                                width: '100%',
                                marginBottom: '15px'
                            }}
                            actions={[
                                <a href={`${baseURL}/img/download/${value}?fileName=${item.fileName}`}>
                                    <CloudDownloadOutlined key="CloudDownloadOutlined" title="下载"/>
                                </a>,
                                <DeleteOutlined key="DeleteOutlined" onClick={() => deleteHandler(item.fileName)} title="删除"/>
                            ]}
                            cover={<img alt="example" style={{ 'objectFit': 'cover' }} src={item.imgUrl} />}
                        >
                            <Meta title={item.fileName}/>
                        </Card>
                        </Col>
                    })}
                
            </Row>
            </Spin>
        </div>
    )
}
