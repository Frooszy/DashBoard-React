import { Flex } from "@chakra-ui/react";
import SideBar from "../components/SideBar/SideBar";
import { useRouter } from "next/router";
import { useEffect } from "react";


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
        <Flex>
            <SideBar />
        </Flex>
    )

}