import SideBar from "../components/SideBar/SideBar"
import Header from "../components/Header/Header"
import Calendar from "../components/Header/calendar"
import DashBoard from "../components/Dashboard/DashBoard"
import style from '../components/IndexJsCss/Index.module.css'
import { useEffect } from "react"
import { useRouter } from "next/router"

export default function DBMain() {

    const router = useRouter();

    useEffect(() => {
        const AreLogin = localStorage.getItem('USER_LOGIN')

        if (AreLogin === 'False') {
            router.push('/login')
        }
    }, [])

    return (

        <div className="mainDashboard">
            <div className={style.Header}>
                <Header />
                <Calendar />
            </div>
            <div className={style.Informacoes}>
                <DashBoard />
            </div>
            <div className={style.MenuLateral}>
                <SideBar />
            </div>
        </div>

    )
}