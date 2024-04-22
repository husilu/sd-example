import { Popover, Radio } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './header.module.scss'

function CustomHeader () {
    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(false);
    
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    function editUser() {
        navigate({pathname: '/useredit'})
    }

    function logOut() {
        localStorage.removeItem('token')
        navigate({pathname: '/login'})
    }

    const content = <>
        <div onClick={editUser} className={styles.pop}>修改用户信息</div>
        <div onClick={logOut}>退出登录</div>
    </>

    return (
        <div className={`${styles['header-title']} display-f-s`}>
            <div className="display-f-a">
                AI
            </div>
            <Popover placement="bottom" trigger="click" content={content}>
                Admin
            </Popover>
        </div>
    )
}
export default CustomHeader
