import Link from "next/link"
import style from './NotLogged.module.css'

function NotLogged() {

    return (

        <div className={style.NotLogged}>
            <p>You must be logged in to access the DashBoard</p>
            <div className={style.Login}>
                <Link href="/login">Login</Link>
            </div>
        </div>

    )

}

export default NotLogged