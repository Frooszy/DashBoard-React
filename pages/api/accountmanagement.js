import verification from '../../middleware/verification';
import Accounts from '../../data/accounts.json'

export default function handler(req, res) {

    const user = verification(req)

    if (user) {

        res.status(200).json({
            Users: Accounts.map(account => ({
                username: account.username,
                email: account.email,
                userpriority: account.userpriority
            }))
        })
    } else {
        res.status(401).json({ Resultado: 'Invalid Token' })
    }

}