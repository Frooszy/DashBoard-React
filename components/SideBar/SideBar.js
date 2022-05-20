import style from './SideBar.module.css'
import { useRouter } from 'next/router';

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    MenuGroup,
    MenuDivider,
    CloseButton,
} from '@chakra-ui/react'

function SideBar() {

    const Router = useRouter();

    const Logout = () => {

        Router.push('/login')

        localStorage.setItem('USER_LOGIN', 'False')

    }

    return (
        <div className={style.Header}>
            <div className={style.Links}>
                <Menu>
                    <MenuButton as={Button} colorScheme='green'>
                        Profile
                    </MenuButton>
                    <MenuList>
                        <MenuGroup title='Profile'>
                            <MenuItem>My Account</MenuItem>
                            <MenuItem>Personal Settings</MenuItem>
                        </MenuGroup>
                        <MenuDivider />
                        <MenuGroup title='DashBoard'>
                            <MenuItem>Custoners</MenuItem>
                            <MenuItem>Orders</MenuItem>
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
            </div>
        </div>
    )

}

export default SideBar