export default function handler(req, res) {

    const useraccount = JSON.parse(req.body)

    const accounts = (
        {
            email: 'admin@gmail.com',
            password: 'admin'
        })

    if (useraccount.email === accounts.email && useraccount.password === accounts.password) {
        res.status(200).json({ teste: 'Logged' })
    } else {
        res.status(401).json({ error: 'User or Password are incorrect' })
    }

}