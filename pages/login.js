import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';
import style from '../components/loginJsCss/style.module.css'

//Chakra
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'


export default function Login() {

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPasword] = useState("");

    useEffect(() => {
        const AreLogin = localStorage.getItem('USER_LOGIN')

        if (AreLogin === 'True') {
            router.push('/dashboard')
        }
    }, [])

    const handleSubmit = (e) => {

        e.preventDefault();

        fetch('/api/login', {
            headers: {
                "Content-Type": 'application/json'
            },
            method: 'post',
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        }).then(res => {
            if (res.status == 200) {

                res.json().then(data => {
                    const Username = data.LoginUsername

                    localStorage.setItem('USER_USERNAME', Username)
                    localStorage.setItem('USER_LOGIN', 'True')
                    router.push('/dashboard')
                })

            } else {
                localStorage.setItem('USER_LOGIN', 'False')
            }
        }).catch(res => console.error('Error'))

    }

    return (

        <div id="login" className={style.login}>
            <Heading>Login System</Heading>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.Field}>
                    <label htmlFor="email">Email</label>
                    <Input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={style.Field}>
                    <label htmlFor="password">Password</label>
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter password'
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e => setPasword(e.target.value))}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </div>
                <div className={style.Actions}>
                    <Button type="submit">Login</Button>
                </div>
            </form>
        </div>

    )
}