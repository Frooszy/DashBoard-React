import accounts from './../../data/accounts.json'
import jwt from 'jsonwebtoken';

export default function handler(req, res) {

    const KEY = process.env.JWT_KEY

    const useremail = req.body.email
    const userpassword = req.body.password

    const Verification = accounts.filter(account => account.email == useremail && account.password == userpassword)

    if (Verification.length > 0) {

        const username = Verification[0].username

        const payload = {
            userID: username
        }

        jwt.sign(
            payload,
            KEY,
            {
                expiresIn: 365 * 24 * 60 * 60,
            },
            (err, token) => {
                res.status(200).json({ resultado: 'Ok', token: token })
            },
        )
    } else {
        res.status(401).json({ Resultado: 'Email or Password Invalid' })
    }

}