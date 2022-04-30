import style from './Logo.module.css'
import { useEffect, useState } from 'react';

function Logo() {

    const [name, setName] = useState()

    useEffect(() => {
        const name = localStorage.getItem('USER_USERNAME')
        setName(name)
    }, [])

    return (
        <div className={style.Header}>
            <p className={style.DashBoard}>DashBoard</p>
            <div className={style.LoginW}>
                <p className={style.Login}>Welcome Back, {name}.</p>
            </div>
        </div>
    )
}

export default Logo