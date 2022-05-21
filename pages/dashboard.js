import Header from "../components/Header/Header"
import DashBoard from "../components/Dashboard/DashBoard"
import style from '../components/IndexJsCss/Index.module.css'
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

        <div className={style.MainDashboard}>
            <div className={style.Informacoes}>
                <Header />
                <DashBoard />
                <Divider p='2' w='auto' />
                <TableDashBoard />
            </div>
        </div>

    )
}