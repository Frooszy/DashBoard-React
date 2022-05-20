import { useState } from 'react';
import { useRouter } from 'next/router';

//chakra
import { Heading, Input, Button, InputGroup, InputRightElement, Flex, Container, Divider } from '@chakra-ui/react'

export default function Register() {

    const router = useRouter();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const LoginClick = () => {

        router.push('/login')

    }

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

        <Flex pt='20' justifyContent='center' alignItems='center' flexDir='column'>
            <Heading>Register System</Heading>
            <form onSubmit={handleSubmit}>
                <Container pt='5'>
                    <label htmlFor="Username">Username</label>
                    <Input type="username" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Container>
                <Container pt='5'>
                    <label htmlFor="email">Email</label>
                    <Input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Container>
                <Container pt='5'>
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
                </Container>
                <Flex pt='6' justifyContent='center'>
                    <Button type="submit" variant='outline'>Register</Button>
                </Flex>
                <Divider p='2' />
                <Container pt='4' display='flex' justifyContent='center'>
                    <Button onClick={LoginClick} variant='outline'>
                        Login
                    </Button>
                </Container>
            </form>
        </Flex>

    )

}