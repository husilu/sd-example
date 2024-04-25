
import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload, Row, Col, Image } from 'antd';
const { Dragger } = Upload;

const props = {
    name: 'file',
    multiple: false,
    action: 'http://124.71.223.180:8088/img/upload',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

const App = () => {
    return <Row>
        <Col span={24}>
            <Dragger {...props}>
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