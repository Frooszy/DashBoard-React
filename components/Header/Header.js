import { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';

import { Text, Heading, Tooltip, Flex } from '@chakra-ui/react'

function Logo() {

    const [name, setName] = useState()

    useEffect(() => {
        const name = localStorage.getItem('USER_USERNAME')
        setName(name)
    }, [])

    return (
        <Flex justifyContent='space-between' p='4' >
            <Flex flexDirection='row'>
                <SideBar />
                <Heading pl='5'>DashBoard</Heading>
            </Flex>
            <Flex>
                <Tooltip label="Our Team Thank You For Your Participation." placement='bottom-start' aria-label='A tooltip'>
                    <Text as='i'>Welcome Back, {name}.</Text>
                </Tooltip>
            </Flex>
        </Flex>
    )
}

export default Logo