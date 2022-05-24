import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';

//Chakra
import { Button, Input, InputGroup, InputRightElement, Heading, Flex, Container, Divider, Alert, ScaleFade } from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'

export default function Login() {

    function Notify() {

        return (

            <Flex>
                <Alert status={Status} variant='left-accent' borderRadius='5'>
                    <InfoIcon mr='3' />
                    {NContent}
                </Alert>
            </Flex>

        )

    }

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPasword] = useState("");

    const [NContent, setNContent] = useState('')
    const [SNotify, setSNotify] = useState(false)
    const [Status, setStatus] = useState('error')

    const RegisterClick = () => {

        router.push('/register')

    }

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
                    const UserTOKEN = data.token
                    setNContent(data.resultado)

                    fetch('/api/user', {
                        method: 'GET',
                        headers: {
                            "Content-Type": 'application/json',
                            "Authorization": 'Bearer ' + UserTOKEN
                        },
                    }).then(res => {
                        if (res.status == 200) {

                            res.json().then(data => {

                                localStorage.setItem('USER_TOKEN', UserTOKEN)

                                const usernameID = data.Username
                                localStorage.setItem('USER_USERNAME', usernameID)

                                setStatus('success')
                                setSNotify(true)

                                setTimeout(() => {

                                    setSNotify(false)

                                    router.push('/dashboard')

                                }, 2000);
                            })
                        }
                    })
                })
            } else {
                localStorage.setItem('USER_LOGIN', 'False')
                setNContent('Algo Deu Errado.')
                setStatus('error')
                setSNotify(true)

                setTimeout(() => {

                    setSNotify(false)

                }, 2000);
            }
        }).catch(res => console.error('Error'))

    }

    return (

        <Flex pt='20' justifyContent='center' alignItems='center' flexDir='column'>
            <Heading>Login System</Heading>
            <form onSubmit={handleSubmit}>
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
                            value={password}
                            onChange={(e => setPasword(e.target.value))}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Container>
                <Container pt='6' display='flex' justifyContent='center'>
                    <Button type="submit" variant='outline'>Login</Button>
                </Container>
                <Divider p='2' />
                <Container pt='4' pb='6' display='flex' justifyContent='center'>
                    <Button onClick={RegisterClick} variant='outline'>
                        Register
                    </Button>
                </Container>
            </form>
            <ScaleFade initialScale={0.9} in={SNotify}>
                <Notify />
            </ScaleFade>
        </Flex>
    )
}