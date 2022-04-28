import style from './Logo.module.css'
import { useRouter } from 'next/router'

function Logo() {

    const Router = useRouter();

    const Logout = () => {

        console.log('teste')

        Router.push('/login')

        localStorage.setItem('USER_LOGIN', 'False')

    }

    return (
        <div className={style.Header}>
            <p className={style.Logo}>Frooszy</p>
            <p className={style.DashBoard}>DashBoard</p>
            <p className={style.Login} onClick={Logout}>Logout</p>
        </div>
    )
}

export default Logo