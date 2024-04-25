import { Popover, Radio } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './header.module.scss'
import { useDispatch } from 'react-redux'; // 导入useDispatch hook
import { logout } from '../store/reducers/authReducer'; // 导入loginSuccess action

function CustomHeader () {
    const navigate = useNavigate()
    const dispatch = useDispatch(); // 获取dispatch函数
    const [collapsed, setCollapsed] = useState(false);
    
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    function editUser() {
        navigate({pathname: '/useredit'})
    }

    function logOut() {
        dispatch(logout())
        navigate({pathname: '/login'})
    }

    const content = <>
        <div onClick={editUser} className={styles.pop}>修改用户信息</div>
        <div onClick={logOut} className={styles.pop}>退出登录</div>
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
