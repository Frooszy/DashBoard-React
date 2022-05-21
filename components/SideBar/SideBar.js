import { useRouter } from 'next/router';

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    IconButton,
    Container,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

function SideBar() {

    const Router = useRouter();

    const Logout = () => {

        localStorage.setItem('USER_LOGIN', 'False')
        localStorage.removeItem('USER_TOKEN')

        Router.push('/login')

    }

    const ManagementF = () => {

        Router.push('/management')

    }

    const DashBoard = () => {

        Router.push('/dashboard')

    }

    return (
        <Container p='0'>
            <Container p='0'>
                <Menu>
                    <MenuButton as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'>
                    </MenuButton>
                    <MenuList>
                        <MenuGroup title='Profile'>
                            <MenuItem>My Account</MenuItem>
                            <MenuItem>Personal Settings</MenuItem>
                        </MenuGroup>
                        <MenuDivider />
                        <MenuGroup title='DashBoard'>
                            <MenuItem onClick={DashBoard}>DashBoard</MenuItem>
                            <MenuItem onClick={ManagementF}>Management</MenuItem>
                            <MenuItem>Analytics</MenuItem>
                            <MenuItem>Products</MenuItem>
                        </MenuGroup>
                        <MenuDivider />
                        <MenuGroup title='Help'>
                            <MenuItem>Docs</MenuItem>
                            <MenuItem>Settings</MenuItem>
                            <MenuItem onClick={Logout}>Logout</MenuItem>
                        </MenuGroup>
                    </MenuList>
                </Menu>
            </Container>
        </Container>
    )

}

export default SideBar