import {
    Container, Flex, IconButton, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Stack,
    Box,
    FormLabel,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Select,
    Textarea,
    Button
} from "@chakra-ui/react"

import { EditIcon } from '@chakra-ui/icons'

function AccountTable() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (

        <Flex justifyContent='center' alignItems='center' pt="5">
            <Container width='100%' maxWidth='100%'>
                <TableContainer boxShadow='xl' flexDirection='column' borderRadius='lg' borderWidth='1px' width='100%' height='100%'>
                    <Table variant='simple'>
                        <TableCaption>Updated 1 hours ago.</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Username</Th>
                                <Th>Email</Th>
                                <Th isNumeric>Modifier</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Admin</Td>
                                <Td>admin@admin.com</Td>
                                <Td isNumeric><IconButton onClick={onOpen} icon={<EditIcon />} /></Td>
                            </Tr>
                            <Tr>
                                <Td>Frooszy</Td>
                                <Td>frooszy@admin.com</Td>
                                <Td isNumeric><IconButton onClick={onOpen} icon={<EditIcon />} /></Td>
                            </Tr>
                            <Tr>
                                <Td>Struntuz</Td>
                                <Td>struntuz@gmail.com</Td>
                                <Td isNumeric><IconButton onClick={onOpen} icon={<EditIcon />} /></Td>
                            </Tr>
                            <Tr>
                                <Td>Cleiton</Td>
                                <Td>cleitonrasta@gmail.com</Td>
                                <Td isNumeric><IconButton onClick={onOpen} icon={<EditIcon />} /></Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader borderBottomWidth='1px'>
                            Account Management
                        </DrawerHeader>

                        <DrawerBody>
                            <Stack spacing='24px'>
                                <Box>
                                    <FormLabel htmlFor='username'>Name</FormLabel>
                                    <Input
                                        id='username'
                                        placeholder='Nome Do Usuario'
                                    />
                                </Box>
                                <Box>
                                    <FormLabel htmlFor='owner'>Select Position</FormLabel>
                                    <Select id='owner' defaultValue='segun'>
                                        <option value='admin'>Admin</option>
                                        <option value='manager'>Manager</option>
                                        <option value='member'>Member</option>
                                    </Select>
                                </Box>

                                <Box>
                                    <FormLabel htmlFor='desc'>Notes</FormLabel>
                                    <Textarea id='desc' />
                                </Box>
                            </Stack>
                        </DrawerBody>

                        <DrawerFooter borderTopWidth='1px'>
                            <Button variant='outline' mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='blue'>Submit</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </Container>
        </Flex>

    )

}

export default AccountTable