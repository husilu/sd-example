import React, { Component } from 'react'
import { routerList } from './routes'
// 导入路由依赖
import { Route, Routes } from 'react-router-dom'
export default class index extends Component {
    render() {
        return (
            <Routes>
                {routerList.map(item => {
                    if(item.children) {
                        return item.children.map(child=> <Route path={child.path} element={child.element} key={child.title}/>)
                    } else {
                        return <Route path={item.path} element={item.element} key={item.title}/>
                    }

                })}
            </Routes>
        )
    }
}
