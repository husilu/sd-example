import React, {useState} from "react";
import {Button, Table, Modal, Input, Form} from 'antd';
import UserForm from './components/form'
import {tbData} from "./staticData";
let currItem = null


export default function Sonohara() {
    const [editOpen, setEditOpen] = useState(false)
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text) => <span>{text}</span>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
        {
            title: '操作',
            dataIndex: 'operate',
            render: (text, record, index)=> <div><Button type="link" onClick={()=> {currItem = {...record}; setEditOpen(true)}}>编辑</Button><Button type="link">删除</Button></div>
        }
    ]
    const getFilter = obj => {
        console.log(obj, '查询条件更新')
    }
    const onFinish = e => {
        setEditOpen(false)
        // console.log(tbData, currItem, tbData.find(i=> i.key == currItem?.key))
        // Object.keys(tbData.find(i=> i.key == currItem?.key)).forEach(i=> {
        //     tbData.find(i=> i.key == currItem?.key)[i] = currItem.i
        // })
    }
    return(
        <React.Fragment>
            <UserForm getFilterParam={getFilter} />
            <Table dataSource={tbData} columns={columns} />
            <Modal
                title="编辑信息"
                style={{
                    top: 90,
                }}
                open={editOpen}
                onOk={() => onFinish()}
                onCancel={() => setEditOpen(false)}
            >
                <Form
                onFinish={onFinish}>
                    <Form.Item
                    label="name">
                        <Input value={currItem?.name} />
                    </Form.Item>
                    <Form.Item
                        label="age">
                        <Input value={currItem?.age} />
                    </Form.Item>
                    <Form.Item
                        label="address">
                        <Input value={currItem?.address} />
                    </Form.Item>
                </Form>

            </Modal>
        </React.Fragment>
    )
}



