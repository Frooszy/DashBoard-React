import jwt from 'jsonwebtoken';
import accounts from '../data/accounts.json'

export default function verification(req) {

    const KEY = process.env.JWT_KEY

    const Authorization = req.headers.authorization

    const Token = Authorization.replace('Bearer ', '')

    const Payload = jwt.verify(Token, KEY)

    const TokenUser = Payload.userID

    const Users = accounts.filter(account => account.username == TokenUser)

    if (Users.length > 0) {

        const priority = Users[0].userpriority

        if (priority === 'NotAutorized') {
            return null
        } else {
            return Users[0]
        }

    } else {
        return null
    }

}