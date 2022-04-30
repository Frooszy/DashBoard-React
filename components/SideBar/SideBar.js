import style from './SideBar.module.css'
import { useRouter } from 'next/router';

function SideBar() {

    const Router = useRouter();

    const Logout = () => {

        Router.push('/login')

        localStorage.setItem('USER_LOGIN', 'False')

    }

    return (
        <div className={style.Header}>
            <p className={style.Logo}>Frooszy</p>
            <div className={style.Links}>
                <ul>
                    <li><p>Dashboard</p></li>
                    <li><p>Custoners</p></li>
                    <li><p>Orders</p></li>
                    <li><p>Analytics</p></li>
                    <li><p>Messages</p></li>
                    <li><p>Products</p></li>
                    <li><p>Reports</p></li>
                    <li><p>Settings</p></li>
                    <li><p>Add Product</p></li>
                </ul>
            </div>
            <div className={style.LoginW}>
                <p className={style.Logout} onClick={Logout}>Logout</p>
            </div>
        </div>
    )

}

export default SideBar