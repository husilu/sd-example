
import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload, Row, Col, Image } from 'antd';
import Api from '../../../api/img';
import { useSelector } from 'react-redux';
const { Dragger } = Upload;

const App = (props) => {
    const token = useSelector(state => state.auth.token);
    const { setoriginImgHandler } = props;
    const params = {
        name: 'file',
        multiple: false,
        action: 'http://124.71.223.180:8088/img/upload',
        headers: {
            token: token,
        },
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                console.log('info', info)
                message.success(`${info.file.name} file uploaded successfully.`);
                setoriginImgHandler(info.file.response.data)
    
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };
    return <Row>
        <Col span={24}>
            <Dragger {...params}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                    banned files.
                </p>
            </Dragger>
        </Col>
    </Row>

}

export default App