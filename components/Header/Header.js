import style from './Logo.module.css'
import { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';

import { Text, Heading } from '@chakra-ui/react'

function Logo() {

    const [name, setName] = useState()

    useEffect(() => {
        const name = localStorage.getItem('USER_USERNAME')
        setName(name)
    }, [])

    return (
        <div className={style.Header}>
            <div className={style.LateralEsquerda}>
                <SideBar />
                <Heading pl='5'>DashBoard</Heading>
            </div>
            <div className={style.LoginW}>
                <Text>Welcome Back, {name}.</Text>
            </div>
        </div>
    )
}

export default Logo