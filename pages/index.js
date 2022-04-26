import NotLogged from "../components/NotLogged/NotLogged"
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter();

  if (typeof window !== 'undefined') {
    const AreLogin = localStorage.getItem('USER_LOGIN')

    if (AreLogin === 'True') {
      router.push('/dashboard')
    } else {
      router.push('/login')
    }
  }

  return (

    <div className="app">

      <NotLogged />

    </div>

  )
}