import style from './Logo.module.css'
import Link from 'next/link'

function Logo() {

    // Alterar LOGIN para pagina do perfil, futuramente.

    return (
        <div className={style.Header}>
            <p className={style.Logo}>Frooszy</p>
            <p className={style.DashBoard}>DashBoard</p>
            <div className={style.Login}>
                <Link href='/dashboard'>Logout</Link>
            </div>
        </div>
    )

}

export default Logo