import { useState } from 'react';
import style from '../components/loginJsCss/style.module.css'

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPasword] = useState("");

    function handleSubmit(e) {

        e.preventDefault();
        console.log('Submit', { email, password })

    }

    return (

        <div id="login" className={style.login}>
            <h1>Login System</h1>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.Field}>
                    <label htmlFor="email">Email</label>
                    <input className={style.email} type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={style.Field}>
                    <label htmlFor="password">Password</label>
                    <input className={style.password} type="password" name="password" id="password" value={password} onChange={(e => setPasword(e.target.value))} />
                </div>
                <div className={style.Actions}>
                    <button className={style.loginbutton} type="submit">Login</button>
                </div>
            </form>
        </div>

    )
}