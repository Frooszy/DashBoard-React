import jwt from 'jsonwebtoken';
import accounts from './../../data/accounts.json'

export default function handler(req, res) {

    const KEY = process.env.JWT_KEY

    const Authorization = req.headers.authorization

    const Token = Authorization.replace('Bearer ', '')

    const Payload = jwt.verify(Token, KEY)

    const TokenUser = Payload.userID

    const Users = accounts.filter(account => account.username == TokenUser)

    if (Users.length > 0) {
        res.status(200).json({ Username: Users[0].username, Email: Users[0].email })
    } else {
        res.status(401).json({ Resultado: 'Invalid Token' })
    }

}