import style from './Logo.module.css'

function Logo() {

    return (
        <div className={style.Header}>
            <p className={style.Logo}>Frooszy</p>
            <p className={style.DashBoard}>DashBoard</p>
            <p className={style.Login}>Login</p>
        </div>
    )

}

export default Logo