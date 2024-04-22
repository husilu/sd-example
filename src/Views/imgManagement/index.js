import { Col, Row, Slider, Card, Select } from 'antd';
import { CloudDownloadOutlined, DeleteOutlined } from '@ant-design/icons';
import Api from '../../api/img.js';

const { Meta } = Card;
export default function index() {
    const downLoadHandler = () => {
        console.log('下载')
    }
    const deleteHandler = () => {
        console.log('删除')
    }
    const handleChange = (val) => {
        const obj = {
            type: val,
            account: 'admin'
        }
        Api.imglist({ obj }).then(res => {
            if (res.responseDesc === 'SUCCESS') {
                // console.log('res', res)
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
        },
        {
            value: 'booth',
            label: 'Dreambooth',
        }
    ]
    return (
        <div>
            <Row>
                <Col>
                    <Select
                        defaultValue="txt2img"
                        style={{
                            width: 120,
                            marginBottom: 20
                        }}
                        onChange={handleChange}
                        options={options}
                    />
                </Col>
            </Row>
            <Row
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}
            >
                <Col className="gutter-row" span={6}>
                    <Card
                        bordered={false}
                        hoverable
                        style={{
                            width: '100%',
                        }}
                        actions={[
                            <CloudDownloadOutlined key="CloudDownloadOutlined" onClick={downLoadHandler} />,
                            <DeleteOutlined key="DeleteOutlined" onClick={deleteHandler} />
                        ]}
                        cover={<img alt="example" style={{ 'objectFit': 'cover' }} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
