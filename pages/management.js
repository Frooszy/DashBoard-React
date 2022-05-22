import { Divider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../components/Header/Header"
import AccountTable from "../components/AccountManagement/AccountTable"

export default function management() {

    const router = useRouter()

    useEffect(() => {
        const AreLogin = localStorage.getItem('USER_LOGIN')

        if (AreLogin === 'False') {
            router.push('/login')
        } else {
            const UserToken = localStorage.getItem('USER_TOKEN')

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

                        if (Priority != "admin") {
                            router.push('/dashboard')
                        }

                    })
                }
            })

        }

    }, [])

    return (
        <div>
            <div>
                <Header />
                <Divider />
                <AccountTable />
            </div>
        </div>
    )

}