import style from '../components/RegisterJsCss/Register.module.css'
import { useState } from 'react';

export default function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {

        e.preventDefault();

    }


    return (

        <div className={style.register}>
            <h1>Register System</h1>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.Field}>
                    <label htmlFor="Username">Username</label>
                    <input className={style.username} type="username" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className={style.Field}>
                    <label htmlFor="email">Email</label>
                    <input className={style.email} type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={style.Field}>
                    <label htmlFor="password">Password</label>
                    <input className={style.password} type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className={style.Actions}>
                    <button className={style.loginbutton} type="submit">Register</button>
                </div>
            </form>
        </div>

    )

}