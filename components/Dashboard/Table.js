import {
    Table,
    Thead,
    Tbody,
    AlertTitle,
    AlertDescription,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Flex,
    Divider,
    CircularProgress,
    Alert,
} from '@chakra-ui/react'

import { WarningTwoIcon } from '@chakra-ui/icons'

function TableDashBoard() {

    return (
        <Flex pt='8' pb='8' pl='5' pr='5'>
            <TableContainer boxShadow='xl' flexDirection='column' borderRadius='lg' borderWidth='1px' width='100%' height='100%'>
                <Table variant='simple'>
                    <TableCaption>Updated 2 hours ago.</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Server</Th>
                            <Th>Memory</Th>
                            <Th isNumeric>Startup</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Server 1</Td>
                            <Td>2GB / 8GB</Td>
                            <Td isNumeric>4:00 PM</Td>
                        </Tr>
                        <Tr>
                            <Td>Server 2</Td>
                            <Td>6GB / 16GB</Td>
                            <Td isNumeric>6:24 AM</Td>
                        </Tr>
                        <Tr>
                            <Td>Server 3</Td>
                            <Td>4GB / 8GB</Td>
                            <Td isNumeric>5:00 PM</Td>
                        </Tr>
                        <Tr>
                            <Td>Server 4</Td>
                            <Td>0GB / 0GB</Td>
                            <Td isNumeric>--:--</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            <Divider orientation='vertical' pl='3' pr='3' />
            <Flex boxShadow='xl' maxW='sm' flexDirection='column' borderRadius='lg' borderWidth='1px' overflow='hidden' w='100%' p={4}>
                <Alert
                    borderRadius='5px'
                    status='error'
                    variant='subtle'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    textAlign='center'
                    height='100%'
                >
                    <WarningTwoIcon boxSize='40px' mr={0} mb='2' />
                    <AlertTitle mt={4} mb={4} fontSize='lg'>
                        Your Server 3 Are Offline!
                    </AlertTitle>
                    <AlertDescription maxWidth='sm' as='kbd'>
                        The system was stopped manually.
                    </AlertDescription>
                    <CircularProgress isIndeterminate trackColor='red.100' color='red.300' mt='7' />
                </Alert>
            </Flex>
        </Flex >
    )

}

export default TableDashBoard