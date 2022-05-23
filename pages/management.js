import { Divider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../components/Header/Header"
import AccountTable from "../components/AccountManagement/AccountTable"

export default function management() {

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
                <Divider />
                <AccountTable />
            </div>
        </div>
    )

}