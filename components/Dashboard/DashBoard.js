import style from './DashBoard.module.css'

import { Box, Badge, SimpleGrid, Flex, Progress } from '@chakra-ui/react'


function DashBoard() {

    return (
        <div className={style.Container}>

            <SimpleGrid columns={4} spacing={10} p='5'>
                <Flex maxW='sm' flexDirection='column' borderRadius='lg' borderWidth='1px' overflow='hidden' w='100%' p={4} color='white'>
                    <Box
                        color='black'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        noOfLines={1}
                        mb='3'
                    >
                        Management - Server 1
                    </Box>
                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='green' mb='2'>
                            Running
                        </Badge>
                    </Box>
                    <Box
                        as='kbd'
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        ml='2'
                        pb='3'
                    >
                        No Bugs Found on Server.
                    </Box>
                    <Progress colorScheme='green' size='sm' value={100} />
                </Flex>
                <Flex maxW='sm' flexDirection='column' borderRadius='lg' borderWidth='1px' overflow='hidden' w='100%' p={4} color='white'>
                    <Box
                        color='black'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        noOfLines={1}
                        mb='3'
                    >
                        Management - Server 2
                    </Box>
                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='green' mb="2">
                            Running
                        </Badge>
                    </Box>
                    <Box
                        as='kbd'
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        ml='2'
                        pb='3'
                    >
                        No Bugs Found on Server.
                    </Box>
                    <Progress colorScheme='green' size='sm' value={100} />
                </Flex>
                <Flex maxW='sm' flexDirection='column' borderRadius='lg' borderWidth='1px' overflow='hidden' w='100%' p={4} color='white'>
                    <Box
                        color='black'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        noOfLines={1}
                        mb='3'
                    >
                        Management - Server 3
                    </Box>
                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='red' mb="2">
                            Offline
                        </Badge>
                    </Box>
                    <Box
                        pb='3'
                        as='kbd'
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        ml='2'
                    >
                        The system was stopped manually.
                    </Box>
                    <Progress colorScheme='red' size='sm' value={100} />
                </Flex>
                <Flex maxW='sm' flexDirection='column' borderRadius='lg' borderWidth='1px' overflow='hidden' w='100%' p={4} color='white'>
                    <Box
                        color='black'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        noOfLines={1}
                        mb='3'
                    >
                        Management - Server 4
                    </Box>
                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='purple' mb="2">
                            Not found
                        </Badge>
                    </Box>
                    <Box
                        pb='3'
                        as='kbd'
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        ml='2'
                    >
                        No servers have been added.
                    </Box>
                    <Progress colorScheme='purple' size='sm' value={100} />
                </Flex>
            </SimpleGrid>
        </div >
    )

}

export default DashBoard