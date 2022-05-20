import SideBar from "../components/SideBar/SideBar"
import Header from "../components/Header/Header"
import DashBoard from "../components/Dashboard/DashBoard"
import style from '../components/IndexJsCss/Index.module.css'
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

export default function DBMain() {

    const [open, setOpen] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const AreLogin = localStorage.getItem('USER_LOGIN')

        if (AreLogin === 'False') {
            router.push('/login')
        }
    }, [])

    const ToogleMenu = () => {

        setOpen(!open)

    }

    return (

        <div className={style.MainDashboard}>
            <div className={style.Informacoes}>
                <Header />
                <DashBoard />
            </div>
        </div>

    )
}