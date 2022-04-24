import SideBar from "../components/SideBar/SideBar"
import Header from "../components/Header/Header"
import Calendar from "../components/Header/calendar"
import DashBoard from "../components/Dashboard/DashBoard"
import style from '../components/IndexJsCss/Index.module.css'

export default function DBMain() {
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