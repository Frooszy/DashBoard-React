import Header from "../components/Header/Header"
import DashBoard from "../components/Dashboard/DashBoard"
import { Divider } from "@chakra-ui/react"
import TableDashBoard from "../components/Dashboard/Table"
import { useRouter } from "next/router"
import { useEffect } from 'react';

export default function DBMain() {

    const router = useRouter()

    useEffect(() => {
        const AreLogin = localStorage.getItem('USER_LOGIN')

        if (AreLogin === 'False') {
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