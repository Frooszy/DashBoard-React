import style from './Logo.module.css'

function Logo() {

    function LoginPage() {

        console.log('Login Clicled')

    }


    return (
        <div className={style.Header}>
            <p className={style.Logo}>Frooszy</p>
            <p className={style.DashBoard}>DashBoard</p>
            <a href='/login' className={style.Login}>Login</a>
        </div>
    )

}

export default Logo