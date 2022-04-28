import style from '../components/RegisterJsCss/Register.module.css'
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Register() {

    const router = useRouter();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {

        e.preventDefault();

        fetch('/api/register', {
            headers: {
                "Content-Type": 'application/json'
            },
            method: 'post',
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })
        }).then(res => {
            if (res.status == 200) {
                router.push('/login')
            }
        }).catch(res => console.error('Error'))

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