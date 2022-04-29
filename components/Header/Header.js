import style from './Logo.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

function Logo() {

    const [name, setName] = useState()

    useEffect(() => {
        const name = localStorage.getItem('USER_USERNAME')
        setName(name)
    }, [])

    const Router = useRouter();

    const Logout = () => {

        Router.push('/login')

        localStorage.setItem('USER_LOGIN', 'False')

    }

    return (
        <div className={style.Header}>
            <p className={style.Logo}>Frooszy</p>
            <p className={style.DashBoard}>DashBoard</p>
            <div className={style.LoginW}>
                <p className={style.Login}>Welcome Back, {name}.</p>
                <p className={style.Logout} onClick={Logout}>Logout</p>
            </div>
        </div>
    )
}

export default Logo