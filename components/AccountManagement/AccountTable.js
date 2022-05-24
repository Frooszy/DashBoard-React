import {
    Container,
    Flex,
    IconButton,
    TableContainer,
    Table,
    TableCaption,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Drawer,
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
    Select,
    Textarea,
    Button,
    ScaleFade,
    Alert,
} from "@chakra-ui/react"

import { EditIcon, InfoIcon } from '@chakra-ui/icons'
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

function AccountTable() {

    function Notify() {

        return (

            <Flex>
                <Alert status={Status} variant='left-accent' borderRadius='10'>
                    <InfoIcon mr='2' />
                    {NContent}
                </Alert>
            </Flex>

        )

    }

    //Outros
    const router = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [Users, setUsers] = useState([])

    //Dados
    const [CurrentUser, setCurrentUser] = useState('')
    const [Username, setUsername] = useState('')
    const [PriorityUser, setPriorityUser] = useState('')

    //Sistema de notificação
    const [NContent, setNContent] = useState('')
    const [SNotify, setSNotify] = useState(false)
    const [Status, setStatus] = useState('error')

    useEffect(() => {

        const UserTOKEN = localStorage.getItem('USER_TOKEN')

        fetch('/api/accountmanagement', {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "Authorization": 'Bearer ' + UserTOKEN
            },
        }).then(res => {
            if (res.status == 200) {

                res.json().then(data => {

                    const UsersList = data.Users

                    setUsers(UsersList)

                })
            }
        })

    }, [])

    const FormClick = () => {

        const UserTOKEN = localStorage.getItem('USER_TOKEN')

        fetch('/api/user', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Authorization": 'Bearer ' + UserTOKEN
            }
        }).then(res => {

            if (res.status === 200) {

                res.json().then(data => {

                    const ModifyUser = data.Username

                    fetch('/api/accountmchange', {
                        method: 'POST',
                        headers: {
                            "Content-Type": 'application/json',
                            "Authorization": 'Bearer ' + UserTOKEN
                        },
                        body: JSON.stringify({
                            "username": Username,
                            "userpriority": PriorityUser,
                            "email": CurrentUser.email,
                            "indexusername": CurrentUser.username,
                            "modifyuser": ModifyUser
                        })
                    }).then(res => {
                        if (res.status == 200) {

                            res.json().then(data => {

                                setNContent(data.Resultado)
                                setStatus('success')
                                setSNotify(true)

                                setTimeout(() => {
                                    setSNotify(false)
                                    onClose()

                                    setTimeout(() => {
                                        router.reload();
                                    }, 1000)

                                }, 2000)

                            })

                        } else {
                            res.json().then(data => {

                                setNContent(data.Resultado)
                                setStatus('error')
                                setSNotify(true)

                                setTimeout(() => {
                                    setSNotify(false)
                                }, 3000);

                            })
                        }
                    })

                })
            }
        })
    }

    return (

        <Flex justifyContent='center' alignItems='center' pt="5">
            <Container width='100%' maxWidth='100%'>
                <TableContainer boxShadow='xl' flexDirection='column' borderRadius='lg' borderWidth='1px' width='100%' height='100%'>
                    <Table variant='simple'>
                        <TableCaption>Frooszy's Account Management</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Username</Th>
                                <Th>Email</Th>
                                <Th isNumeric>Modifier</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {Users.map(user => (
                                <Tr>
                                    <Td>{user.username}</Td>
                                    <Td>{user.email}</Td>
                                    <Td isNumeric><IconButton onClick={() => {
                                        onOpen();
                                        setCurrentUser(user)
                                    }} icon={<EditIcon />} /></Td>
                                </Tr>
                            ))}
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
                                        defaultValue={CurrentUser?.username}
                                        id='username'
                                        placeholder='Name'
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </Box>
                                <Box>
                                    <FormLabel htmlFor='owner'>Select Position</FormLabel>
                                    <Select id='owner' placeholder={CurrentUser?.userpriority} onChange={(e) => setPriorityUser(e.target.value)}>
                                        <option value='admin'>Admin</option>
                                        <option value='manager'>Manager</option>
                                        <option value='member'>Member</option>
                                    </Select>
                                </Box>

                                <Box pb='10'>
                                    <FormLabel htmlFor='desc'>Notes</FormLabel>
                                    <Textarea id='desc' />
                                </Box>
                                <ScaleFade initialScale={0.9} in={SNotify}>
                                    <Notify />
                                </ScaleFade>
                            </Stack>
                        </DrawerBody>
                        <DrawerFooter borderTopWidth='1px'>
                            <Button variant='outline' mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='blue' onClick={FormClick}>Submit</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </Container>
        </Flex>

    )

}

export default AccountTable