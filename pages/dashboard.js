import Header from "../components/Header/Header"
import DashBoard from "../components/Dashboard/DashBoard"
import style from '../components/IndexJsCss/Index.module.css'
import { Divider } from "@chakra-ui/react"
import TableDashBoard from "../components/Dashboard/Table"

export default function DBMain() {

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