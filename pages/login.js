import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';
import style from '../components/loginJsCss/style.module.css'

export default function Login() {

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPasword] = useState("");

    useEffect(() => {
        const AreLogin = localStorage.getItem('USER_LOGIN')

        if (AreLogin === 'True') {
            router.push('/dashboard')
        }
    }, [])

    function handleSubmit(e) {

        e.preventDefault();

        const teste = JSON.parse(string)

        console.log(teste)

        fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        }).then(res => {
            if (res.status == 200) {
                router.push('/dashboard')
                localStorage.setItem('USER_LOGIN', 'True')
            } else {
                localStorage.setItem('USER_LOGIN', 'False')
            }
        }).catch(res => console.error('Error'))

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