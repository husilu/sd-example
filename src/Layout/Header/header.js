import { Popover } from 'antd'
import { useNavigate } from 'react-router-dom';
import styles from './header.module.scss'
import { useDispatch } from 'react-redux'; // 导入useDispatch hook
import { logout } from '../../store/reducers/authReducer'; // 导入loginSuccess action
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { changeMenu } from '../../store/reducers/homeReducer'; // 导入loginSuccess action
import { Button } from 'antd';

function CustomHeader () {
    const navigate = useNavigate()
    const dispatch = useDispatch(); // 获取dispatch函数
    const menuVal = useSelector(state => {
        return state.home.menu
    });

    const toggleCollapsed = () => {
        dispatch(changeMenu({ menu: !menuVal }));
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
                <span>
                    AI
                </span>
                <Button
                    type="primary"
                    onClick={toggleCollapsed}
                >
                    {menuVal ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
            </div>
            <Popover placement="bottom" trigger="click" content={content}>
                Admin
            </Popover>
        </div>
    )
}
export default CustomHeader
