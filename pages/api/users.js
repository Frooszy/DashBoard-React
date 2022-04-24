export default function handler(req, res) {

    const useraccount = JSON.parse(req.body)

    if (useraccount.email === "thecryzin@gmail.com" && useraccount.password === '123456') {
        res.status(200).json({ teste: 'teste' })
    } else {
        res.status(401).json({ error: 'User or Password are incorrect' })
    }

}