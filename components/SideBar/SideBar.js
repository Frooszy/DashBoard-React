import style from './SideBar.module.css'

function SideBar() {

    return (
        <div className={style.Header}>
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
        </div>
    )

}

export default SideBar