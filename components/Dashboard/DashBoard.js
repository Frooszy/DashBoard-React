import style from './DashBoard.module.css'

import { Box, Badge, SimpleGrid } from '@chakra-ui/react'


function DashBoard() {

    return (
        <div className={style.Container}>

            <SimpleGrid columns={5} spacing={10} p='5' pl='20'>
                <Box maxW='sm' borderRadius='lg' borderWidth='1px' overflow='hidden' w='100%' p={4} color='white'>
                    <Box
                        color='black'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        noOfLines={1}
                        mb='3'
                    >
                        Status
                    </Box>
                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='green' mb='2'>
                            Running
                        </Badge>
                    </Box>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        ml='2'
                    >
                        Server-1
                    </Box>
                </Box>
                <Box maxW='sm' borderRadius='lg' borderWidth='1px' overflow='hidden' w='100%' p={4} color='white'>
                    <Box
                        color='black'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        noOfLines={1}
                        mb='3'
                    >
                        Status
                    </Box>
                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='green' mb="2">
                            Running
                        </Badge>
                    </Box>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        ml='2'
                    >
                        Server-2
                    </Box>
                </Box>
                <Box maxW='sm' borderRadius='lg' borderWidth='1px' overflow='hidden' w='100%' p={4} color='white'>
                    <Box
                        color='black'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        noOfLines={1}
                        mb='3'
                    >
                        Status
                    </Box>
                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='red' mb="2">
                            Offline
                        </Badge>
                    </Box>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        ml='2'
                    >
                        Server-3
                    </Box>
                </Box>
            </SimpleGrid>
        </div >
    )

}

export default DashBoard