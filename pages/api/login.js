import accounts from './../../data/accounts.json'

export default function handler(req, res) {

    const useremail = req.body.email
    const userpassword = req.body.password

    const Verification = accounts.filter(account => account.email == useremail && account.password == userpassword)

    const username = Verification.map(user => user.username)

    if (Verification.length > 0) {
        res.status(200).json({ resultado: 'Ok', LoginUsername: username })
    } else {
        res.status(401).json({ Resultado: 'Email or Password Invalid' })
    }

}