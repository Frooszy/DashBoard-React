import style from '../components/RegisterJsCss/Register.module.css'
import { useState } from 'react';
import { useRouter } from 'next/router';

//chakra
import { Heading, Input, Button, InputGroup, InputRightElement } from '@chakra-ui/react'

export default function Register() {

    const router = useRouter();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

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
                localStorage.setItem('USER_USERNAME', username);
                router.push('/login')
            } else {
                localStorage.removeItem('USER_USERNAME')
            }
        }).catch(res => console.error('Error'))

    }


    return (

        <div className={style.register}>
            <Heading>Register System</Heading>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.Field}>
                    <label htmlFor="Username">Username</label>
                    <Input className={style.username} type="username" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className={style.Field}>
                    <label htmlFor="email">Email</label>
                    <Input className={style.email} type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
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
                            value={password} onChange={(e) => setPassword(e.target.value)}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </div>
                <div className={style.Actions}>
                    <Button type="submit">Register</Button>
                </div>
            </form>
        </div>

    )

}