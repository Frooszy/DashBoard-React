import { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';

import { Text, Heading, Tooltip, Flex, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'

function Logo() {

    const [name, setName] = useState()

    useEffect(() => {
        const name = localStorage.getItem('USER_USERNAME')
        setName(name)
    }, [])

    return (
        <Flex justifyContent='space-between' p='4' >
            <Flex>
                <SideBar />
                <Tooltip label="Full Developed by Frooszy" placement='bottom' aria-label='A tooltip'>
                    <Heading pl='5'>Frooszy</Heading>
                </Tooltip>
            </Flex>
            <Flex>
                <Tooltip label="Our Team Thank You For Your Participation." placement='auto' aria-label='A tooltip'>
                    <Text as='i'>Welcome Back, {name}.</Text>
                </Tooltip>
            </Flex>
        </Flex>
    )
}

export default Logo