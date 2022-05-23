import Header from "../components/Header/Header"
import DashBoard from "../components/Dashboard/DashBoard"
import { Divider } from "@chakra-ui/react"
import TableDashBoard from "../components/Dashboard/Table"
import { useRouter } from "next/router"
import { useEffect } from 'react';

export default function DBMain() {

    const router = useRouter()

    useEffect(() => {

        const UserToken = localStorage.getItem('USER_TOKEN')

        if (UserToken) {

            fetch('/api/user', {
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": 'Bearer ' + UserToken
                },
            }).then(res => {
                if (res.status == 200) {

                    res.json().then(data => {

                        const Priority = data.UserPriority

                        if (Priority != "Admin") {
                            router.push('/dashboard')
                        }

                    })
                } else {
                    router.push('/login')
                }
            })

        } else {
            router.push('/login')
        }

    }, [])

    return (

        <div>
            <div>
                <Header />
                <DashBoard />
                <Divider p='2' w='auto' />
                <TableDashBoard />
            </div>
        </div>

    )
}